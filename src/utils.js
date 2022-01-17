const componentToHex = (color) => {
  let hex = color.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
};

export const rgbToHex = (r, g, b) => {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
};
