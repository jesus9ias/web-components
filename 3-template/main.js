'use strict';

(function() {
  class Template extends HTMLElement {
    constructor() {
      super();

      const template = document.getElementById('nav-bar');
      const templateContent = template.content;

      this.attachShadow({ mode: 'open' }).appendChild(
        templateContent.cloneNode(true)
      );
    }
  }

  customElements.define('nav-bar', Template);
})();