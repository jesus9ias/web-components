'use strict';

(function () {
  class GreatText extends HTMLElement {
    constructor() {
      super();
      
      const componentContainer = document.createElement('div');
      componentContainer.textContent = this.getAttribute('text');
      
      const shadow = this.attachShadow({ mode: 'open' });

      shadow.appendChild(componentContainer);
    }
  }

  customElements.define('great-text', GreatText);
})();