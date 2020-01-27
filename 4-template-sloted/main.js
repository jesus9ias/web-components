'use strict';

(function() {
  class Template extends HTMLElement {
    constructor() {
      super();

      const template = document.getElementById('main-layout');
      const templateContent = template.content;

      this.attachShadow({ mode: 'open' }).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }

  customElements.define('main-layout', Template);
})();