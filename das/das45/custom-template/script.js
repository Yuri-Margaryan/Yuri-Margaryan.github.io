class CustomTemplateComponent extends HTMLElement {
  connectedCallback() {
    const template = document.getElementById('custom-template');
    const templateContent = template.content;

    this.appendChild(templateContent.cloneNode(true))
  }
}

customElements.define('t-custom-template', CustomTemplateComponent);
