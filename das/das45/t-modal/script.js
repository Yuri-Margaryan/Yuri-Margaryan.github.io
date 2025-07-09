class ModalComponent extends HTMLElement {
  connectedCallback() {
    this._renderTemplate();
  }

  open() {
    this.classList.add('open');
    this.querySelector('.modal-wrapper').style.display = 'flex';
    this.querySelector('.modal-backdrop').style.display = 'block';
  }

  close() {
    this.classList.remove('open');
    this.querySelector('.modal-wrapper').style.display = 'none';
    this.querySelector('.modal-backdrop').style.display = 'none';
  }

  _renderTemplate() {
    this.innerHTML = `
      <div class="modal-backdrop" style="display: none;"></div>
      <div class="modal-wrapper" role="dialog" aria-modal="true" style="display: none;">
        <div class="modal">
          <div class="modal-header">
            <h2 class="modal-title">${this.getAttribute('title')}</h2>
            <button class="modal-close" aria-label="Close">&times;</button>
          </div>
          <div class="modal-body">
            <p>${this.getAttribute('paragraph')}</p>
          </div>
        </div>
      </div>
    `;

    this.querySelector('.modal-close')?.addEventListener('click', () => this.close());
  }
}

customElements.define('t-modal', ModalComponent);
