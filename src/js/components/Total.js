export default class Total {
  constructor({ element }) {
    this.element = element;
  }

  render({ stack }) {
    console.log(stack);
    this.element.innerText = stack.length ? stack.join('') : 0;
  }
}
