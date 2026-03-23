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

  // Background gradient
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, '#6c3ce0');
  bg.addColorStop(0.5, '#8b5cf6');
  bg.addColorStop(1, '#c084fc');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // Subtle pattern dots
  ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
  for (let x = 0; x < W; x += 30) {
    for (let y = 0; y < H; y += 30) {
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Main card
  const cardX = PADDING - 20;
  const cardY = 100;
  const cardW = W - (PADDING - 20) * 2;
  const cardH = H - 200;
  roundRect(ctx, cardX, cardY, cardW, cardH, 24);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.lineWidth = 1;
  ctx.stroke();

  // Category pill
  const catInfo = CATEGORY_INFO[data.category];
  const catLabel = `${catInfo.emoji} ${catInfo.label}`;
  ctx.font = '600 22px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  const catWidth = ctx.measureText(catLabel).width + 32;
  const catX = (W - catWidth) / 2;
  const catY = cardY + 30;
  roundRect(ctx, catX, catY, catWidth, 38, 19);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
  ctx.fill();
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  ctx.fillText(catLabel, W / 2, catY + 19);

  // Main conversion text (precise)
  ctx.font = '800 42px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  const maxTextWidth = cardW - 80;
  const preciseLines = wrapText(ctx, data.preciseText, maxTextWidth);
  const preciseStartY = catY + 60;
  for (let i = 0; i < preciseLines.length; i++) {
    ctx.fillText(preciseLines[i], W / 2, preciseStartY + i * 52);
  }

  // Natural language text
  const naturalY = preciseStartY + preciseLines.length * 52 + 16;
  ctx.font = '500 26px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  const naturalLines = wrapText(ctx, data.naturalText, maxTextWidth);
  for (let i = 0; i < naturalLines.length; i++) {
    ctx.fillText(naturalLines[i], W / 2, naturalY + i * 36);
  }

  // Branding
  ctx.font = '700 24px -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  ctx.fillText('Curious Converter', W / 2, H - 30);

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
