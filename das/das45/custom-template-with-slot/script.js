class CustomTemplateWithSlotComponent extends HTMLElement {
  connectedCallback() {
    const template = document.getElementById('custom-template');
    const templateContent = template.content;

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(templateContent.cloneNode(true));
  }
}

customElements.define('t-custom-template-and-slot', CustomTemplateWithSlotComponent);
