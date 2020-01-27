'use strict';

(function() {
  class BasicComponnet extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: 'open' });

      const componentContainer = document.createElement('div');

      componentContainer.innerHTML = '<p>Basic Component</p>';

      shadow.appendChild(componentContainer);
    }
  }

  customElements.define('basic-component', BasicComponnet);
})();