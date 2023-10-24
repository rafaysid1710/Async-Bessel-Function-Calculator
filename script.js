class AsyncBesselFunction {
  static async calculateBesselJ2(x) {
    const A1 = await this.calculateA1(x);
    const A2 = await this.calculateA2(x);
    const A3 = await this.calculateA3(x);
    const A4 = await this.calculateA4(x);
    const A5 = await this.calculateA5(x);
    const A6 = await this.calculateA6(x);
    const A7 = A1 - A2 + A3 - A4 + A5 - A6;

    return A7;
  }

  static async calculateA1(x) {
    return x * x;
  }

  static async calculateA2(x) {
    return Math.pow(x, 4);
  }

  static async calculateA3(x) {
    return Math.pow(x, 2) / Math.pow(2, 2);
  }

  static async calculateA4(x) {
    return Math.pow(x, 4) / Math.pow(4, 2);
  }

  static async calculateA5(x) {
    return Math.pow(x, 2) / Math.pow(3, 2);
  }

  static async calculateA6(x) {
    return Math.pow(x, 4) / Math.pow(5, 2);
  }
}

// Example usage:
const x = 2;  // Replace with the desired value of x

AsyncBesselFunction.calculateBesselJ2(x)
  .then((result) => {
    console.log('Bessel Function J2:', result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
