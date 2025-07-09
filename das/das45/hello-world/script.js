class HelloWorldComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <h1>👋 Hello TUMO</h1>
    `;
  }
}

customElements.define('t-hello', HelloWorldComponent);
