class Color {
  r;
  g;
  b;

  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  opacity(value) {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${value})`;
  }

  toString() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}

export default {
  colors: {
    black: new Color(20, 20, 20),
    white: new Color(252, 247, 248),
    orange: new Color(230, 80, 48)
  },
  fonts: {
    serif: `'GT Super', serif`,
    sansSerif: `'Inter', sans-serif`
  }
};
