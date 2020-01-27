'use strict';

(function() {
  class Counter extends HTMLElement {
    constructor() {
      super();

      const shadow = this.attachShadow({ mode: 'open' });

      const componentContainer = document.createElement('div');

      let seconds = 0;

      function updateTime() {
        componentContainer.innerHTML = `<p>Seconds ago ${seconds}</p>`;
      }

      updateTime();

      shadow.appendChild(componentContainer);

      setInterval(function() {
        seconds++;
        updateTime();
      }, 1000);
    }
  }

  customElements.define('time-counter', Counter);
})();