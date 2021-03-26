import {f} from '../main.js';

export default class Catalog extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
    }

    async connectedCallback() {
        const div = await this.getHtml();
        this.shadow.innerHTML = div.innerHTML;
        this.shadow.append(this.getStyle());
    }

    async getHtml() {
        const products = await this.getProducts();
        const div = document.createElement('div');
        products.forEach(product => {

            let item = document.createElement('shop-product');

            item.dataset.id = product.id;
            item.dataset.description = product.description;
            item.dataset.name = product.name;
            item.dataset.price = product.price;

            div.append(item);
        });
        return div;
    }

    async getProducts() {
        return await f('products');
    }

    getStyle() {
        const style = document.createElement('style');
        style.innerHTML = `
        :host {
        display: flex;
        flex-direction: column;
        gap: 1rem;   
        }       

        `;
        return style;
    }
}


