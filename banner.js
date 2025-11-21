class Banner extends HTMLElement {
  async connectedCallback() {
    const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';
    const styles = `
      <style>
        .banner {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 1rem;
          margin: 1rem;
          background: #f9f9f9;
          font-family: Arial, sans-serif;
        }
        .banner h2 {
          margin: 0 0 0.5rem 0;
          color: #007acc;
        }
      </style>`;

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
}

if (!customElements.get('warning-banner')) {
  customElements.define('warning-banner', Banner);
}