export default class Product extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.shadow.innerHTML = this.getHtml();
        this.shadow.append(this.getStyle());
    }

    getHtml() {
        return `
        <div class="h1">${this.dataset.name} - ${this.dataset.price}</div>
        `;
    }

    getStyle() {
        const style = document.createElement('style');
        style.innerHTML = `
        div {
            color:red;
             border: black dashed 1px;
        }
        `;
        return style;
    }
}


