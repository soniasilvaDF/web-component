class Banner extends HTMLElement {
    async connectedCallback() {
        const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';        
        const styles = this.getStyles();

        try {
            const response = await fetch(API_URL);
            const data = await response.json();

            this.innerHTML = `
        ${styles}
        <div class="banner">
        <h2>${this.getAttribute('title') || 'Aviso'}</h2>
        <p>${this.getAttribute('message') || 'Serviços indisponíveis'}</p>
        <p>(API:) ${data.title}</p>
      </div>
      `;
        } catch (error) {
            this.innerHTML = `
        <div class="banner" style="background:red; color:white; padding:1rem;">
          Erro ao carregar dados da API
        </div>
      `;
            console.error('Error:', error);
        }
    }

    getStyles() {
        const defaultSettings = this.getLayoutSettings();
        const parsedSettings = JSON.parse(this.getAttribute('settings') ?? '{}');

        const layoutSettings = {
        ...defaultSettings,
        ...parsedSettings
        };

        // OR const layoutSettings = this.getLayoutSettings();
        return `
      <style>
        .banner {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 1rem;
          margin: 1rem;
          background: #f9f9f9;
          box-sizing: border-box;
          top: ${layoutSettings.top};
          left: ${layoutSettings.left};
          right: ${layoutSettings.right};
          width: ${layoutSettings.width};
          height: ${layoutSettings.height};
          position: ${layoutSettings.position};
          z-index: ${layoutSettings.zIndex};
        }
        .banner h2 {
          margin: 0 0 0.5rem 0;
          color: #007acc;
        }
      </style>`;
    }

    getLayoutSettings() {
        return {
            top: this.getAttribute('top') ?? '0px',
            left: this.getAttribute('left') ?? '0px',
            right: this.getAttribute('right') ?? '0px',
            width: this.getAttribute('width') ?? 'auto',
            height: this.getAttribute('height') ?? 'auto',
            position: this.getAttribute('position') ?? 'absolute',
            zIndex: this.getAttribute('zIndex') ?? '1'
        };
    }
}

if (!customElements.get('warning-banner')) {
    customElements.define('warning-banner', Banner);
}
