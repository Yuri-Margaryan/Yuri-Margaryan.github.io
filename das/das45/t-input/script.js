class InputComponent extends HTMLElement {
  connectedCallback() {
    this._renderTemplate();
  }

  static get observedAttributes() {
    return ['id', 'label', 'placeholder', 'default-value', 'type', 'suffix', 'readonly'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this._renderTemplate();
  }

  _renderTemplate() {
    const id = this.getAttribute('id') || Date.now();
    const label = this.getAttribute('label');
    const placeholder = this.getAttribute('placeholder');
    const defaultValue = this.getAttribute('default-value') || null;
    const type = this.getAttribute('type') || '';
    const suffix = this.getAttribute('suffix') || '';
    const isReadOnly = this.hasAttribute('readonly');

    this.innerHTML = `
      <div class="t-input-group">
        ${label ? `<label for="t-${id}">${label}</label>` : ''}
        <div class="t-input-container">
          <input
            id="t-${id}"
            type="${type}"
            class="t-input"
            placeholder="${placeholder}"
            ${isReadOnly ? 'readonly' : ''}
            ${defaultValue ? `value=${defaultValue}` : ''}
          >
          ${suffix ? `<div class="t-input-suffix-container"><i class="bi ${suffix}"></i></div>` : ''}
        </div>
      </div>
    `;
  }
}

customElements.define('t-input', InputComponent);
