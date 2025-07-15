class ButtonComponent extends HTMLElement {
    connectedCallback() {
        const titleAttribute = this.getAttribute('title') || '';
        const mode = this.getAttribute('mode') || 'primary';

        this.innerHTML = `
        <button class="${mode === 'primary' ? 'info-radius' : 'header-info'}">
            ${titleAttribute}
        </button>
        `;
    }
}

customElements.define('t-button', ButtonComponent);
