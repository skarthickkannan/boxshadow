class Shadow {
  constructor(selector, x, y, radius) {
    this.element = document.querySelector(`#${selector}`);
    if (x || y || radius) {
      this.element.style.width = `${x}rem`;
      this.element.style.height = `${y}rem`;
      this.element.style.borderRadius = `${radius}px`;
    }
  }
  default() {
    this.element.style.boxShadow = `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)`;
  }
  small() {
    this.element.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
  }
  medium() {
    this.element.style.boxShadow =
      '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
  }
  large() {
    this.element.style.boxShadow =
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
  }
  xl() {
    this.element.style.boxShadow =
      '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
  }
  x2l() {
    this.element.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
  }
  x3l() {
    this.element.style.boxShadow = '0 35px 60px -15px rgba(0, 0, 0, 0.3)';
  }
  inner() {
    this.element.style.boxShadowr = ' inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)';
  }
}

export default Shadow;
