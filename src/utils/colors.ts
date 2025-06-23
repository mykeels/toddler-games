export const RAINBOW_COLORS = ['#FFFFFF', '#FF5117', '#FF1093', '#17A6FF', '#FFC300', '#17FF70', '#803EC2', '#333333'];

export const getRainbowColor = (id: string) => {
  // Create a simple hash of the string
  const hash = id.split('').reduce((acc, char) => {
    return acc + char.charCodeAt(0);
  }, 0);

  // Get index in range 0-6 using modulo
  const colorIndex = hash % RAINBOW_COLORS.length;

  return RAINBOW_COLORS[colorIndex];
};

export const isLightColor = (color: string) => {
  const [r, g, b] = color.match(/\w\w/g)?.map((hex) => parseInt(hex, 16)) || [0, 0, 0];
  return (r * 299 + g * 587 + b * 114) / 1000 > 128;
};
