import type { Category } from '../types/units';
import { CATEGORY_INFO } from '../types/units';

interface ShareCardData {
  preciseText: string;
  naturalText: string;
  category: Category;
}

const W = 1200;
const H = 630;
const PADDING = 80;

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(' ');
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    const test = current ? `${current} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function drawCard(data: ShareCardData): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d')!;
  const font = '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

  // White outer background
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, W, H);

  // Gradient inner card
  const cardX = PADDING;
  const cardY = PADDING;
  const cardW = W - PADDING * 2;
  const cardH = H - PADDING * 2;
  roundRect(ctx, cardX, cardY, cardW, cardH, 28);

  const grad = ctx.createLinearGradient(cardX, cardY, cardX + cardW, cardY + cardH);
  grad.addColorStop(0, '#6c3ce0');
  grad.addColorStop(0.5, '#8b5cf6');
  grad.addColorStop(1, '#c084fc');
  ctx.fillStyle = grad;
  ctx.fill();

  // Subtle dot texture on card
  ctx.save();
  roundRect(ctx, cardX, cardY, cardW, cardH, 28);
  ctx.clip();
  ctx.fillStyle = 'rgba(255, 255, 255, 0.035)';
  for (let x = cardX; x < cardX + cardW; x += 28) {
    for (let y = cardY; y < cardY + cardH; y += 28) {
      ctx.beginPath();
      ctx.arc(x, y, 1.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();

  // Measure all text to vertically centre it within the card
  const innerPadding = 48;
  const maxTextWidth = cardW - innerPadding * 2;
  const preciseLineHeight = 52;
  const naturalLineHeight = 36;
  const gap = 20;

  ctx.font = `800 42px ${font}`;
  const preciseLines = wrapText(ctx, data.preciseText, maxTextWidth);

  ctx.font = `500 26px ${font}`;
  const naturalLines = wrapText(ctx, data.naturalText, maxTextWidth);

  const totalTextHeight =
    preciseLines.length * preciseLineHeight +
    gap +
    naturalLines.length * naturalLineHeight;

  const textStartY = cardY + (cardH - totalTextHeight) / 2;

  // Main conversion text
  ctx.font = `800 42px ${font}`;
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  for (let i = 0; i < preciseLines.length; i++) {
    ctx.fillText(preciseLines[i], W / 2, textStartY + i * preciseLineHeight);
  }

  // Natural language text
  const naturalY = textStartY + preciseLines.length * preciseLineHeight + gap;
  ctx.font = `500 26px ${font}`;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
  for (let i = 0; i < naturalLines.length; i++) {
    ctx.fillText(naturalLines[i], W / 2, naturalY + i * naturalLineHeight);
  }

  // Branding — bottom left of card
  ctx.font = `700 20px ${font}`;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.textAlign = 'left';
  ctx.textBaseline = 'bottom';
  ctx.fillText('Curious Converter', cardX + innerPadding, cardY + cardH - 24);

  // Category — bottom right of card
  const catInfo = CATEGORY_INFO[data.category];
  ctx.font = `600 18px ${font}`;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'bottom';
  ctx.fillText(catInfo.label.toUpperCase(), cardX + cardW - innerPadding, cardY + cardH - 24);

  return canvas;
}

function canvasToBlob(canvas: HTMLCanvasElement): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error('Failed to create image'));
    }, 'image/png');
  });
}

export async function shareConversion(data: ShareCardData): Promise<void> {
  const canvas = drawCard(data);
  const blob = await canvasToBlob(canvas);
  const file = new File([blob], 'curious-conversion.png', { type: 'image/png' });

  // Try native share with file support
  if (navigator.share && navigator.canShare?.({ files: [file] })) {
    await navigator.share({
      text: data.preciseText,
      files: [file],
    });
    return;
  }

  // Fallback: download the image
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'curious-conversion.png';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
