class Post extends HTMLElement {
    constructor() {
        super();
        
        const titlePart = document.createElement('h1');
        titlePart.innerText = this.getAttribute('title') || 'Default Title';
        titlePart.style.backgroundColor = '#f8d154';

        const contentPart = document.createElement('p');
        contentPart.innerText = this.textContent || 'Default content goes here.';

        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(titlePart);
        shadowRoot.appendChild(contentPart);
        document.appendChild(shadowRoot);
    }
}

customElements.define('my-post', Post);