/**
 * Generates a color based on a seed string using the golden ratio method.
 * Based on: https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
 * 
 * @param seed - String to use as seed (e.g., title + date)
 * @param saturation - HSV saturation (0-1), default 0.5
 * @param value - HSV value/brightness (0-1), default 0.95
 * @returns RGB color as hex string (e.g., "#ff5733")
 */
export function generateColorFromSeed(
  seed: string,
  saturation: number = 0.5,
  value: number = 0.95
): string {
  // Create a simple hash from the seed string
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  // Normalize hash to [0, 1) range
  const normalizedHash = Math.abs(hash) / 2147483647;
  
  // Use golden ratio to get evenly distributed hue
  const goldenRatioConjugate = 0.618033988749895;
  const hue = (normalizedHash * goldenRatioConjugate) % 1;
  
  // Convert HSV to RGB
  const rgb = hsvToRgb(hue, saturation, value);
  
  // Convert to hex string
  return `#${rgb.map(x => x.toString(16).padStart(2, '0')).join('')}`;
}

/**
 * Converts HSV color to RGB.
 * HSV values should be in [0..1)
 * Returns [r, g, b] values from 0 to 255
 */
function hsvToRgb(h: number, s: number, v: number): [number, number, number] {
  const h_i = Math.floor(h * 6);
  const f = h * 6 - h_i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  
  let r: number, g: number, b: number;
  
  switch (h_i) {
    case 0:
      [r, g, b] = [v, t, p];
      break;
    case 1:
      [r, g, b] = [q, v, p];
      break;
    case 2:
      [r, g, b] = [p, v, t];
      break;
    case 3:
      [r, g, b] = [p, q, v];
      break;
    case 4:
      [r, g, b] = [t, p, v];
      break;
    case 5:
      [r, g, b] = [v, p, q];
      break;
    default:
      [r, g, b] = [v, t, p];
  }
  
  return [
    Math.round(r * 255),
    Math.round(g * 255),
    Math.round(b * 255)
  ];
}

