class SelectComponent extends HTMLElement {
  constructor() {
    super();

    this._options = [];
    this._areOptionsVisible = false;
  }

  connectedCallback() {
    const id = this.getAttribute('id') || Date.now();
    const label = this.getAttribute('label');
    const placeholder = this.getAttribute('placeholder');
    const defaultValue = this.getAttribute('default-value') || null;
    const type = this.getAttribute('type') || '';
    const isReadOnly = this.hasAttribute('readonly');

    this.innerHTML = `
      <t-input
        id="${id}"
        label="${label}"
        placeholder="${placeholder}"
        defaultValue="${defaultValue}"
        type="${type}"
        suffix="bi-arrow-down"
        readonly="${isReadOnly}"
      ></t-input>
      <div class="select-options-container" style="display: none"></div>
    `;

    this._addEventListeners();
  }

  set options(value) {
    this._options = value;

    const optionsContainer = this.querySelector('.select-options-container');
    value.forEach((option, index) => {
      const optionItem = document.createElement('div');
      optionItem.className = 'select-option-item';
      optionItem.dataset.id = option.value;
      optionItem.innerHTML = option.label;

      optionsContainer.appendChild(optionItem);
    });
  }

  get options() {
    return this._options;
  }

  _addEventListeners() {
    this._onDropdownToggle();
    this._onOptionSelect();
    this._onOutsideClick();
  }

  _onDropdownToggle() {
    this.addEventListener('click', (evt) => {
      evt.preventDefault();

      const selectOptionsContainer = this.querySelector('.select-options-container');
      selectOptionsContainer.style.display = selectOptionsContainer.style.display === 'none' ? 'block' : 'none';
    });
  }

  _onOptionSelect() {
    this.addEventListener('click', (evt) => {
      evt.preventDefault();
      if (!evt.target.classList.contains('select-option-item')) {
        return;
      }

      const foundSelectedOption = this._options.find((option) => option.value === +evt.target.dataset.id);
      this.querySelector('t-input').setAttribute('default-value', foundSelectedOption.label);
    });
  }

  _onOutsideClick() {
    document.addEventListener('click', (evt) => {
      if (this.contains(evt.target)) {
        return;
      }

      const selectOptionsContainer = this.querySelector('.select-options-container');
      if (selectOptionsContainer.style.display === 'block') {
        selectOptionsContainer.style.display = 'none';
      }
    });
  }
}

customElements.define('t-select', SelectComponent);
