class ButtonComponent extends HTMLElement {
  connectedCallback() {
    const titleAttribute = this.getAttribute('title') || '';
    const bgAttribute = this.getAttribute('background') || '#41EB5C';

    this.innerHTML = `
      <button class="btn" style="background-color: ${bgAttribute}">
        <span>${titleAttribute}</span>
      </button>
    `;
  }
}

customElements.define('t-button', ButtonComponent);
