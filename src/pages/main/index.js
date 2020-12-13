import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component{

    state = {
        products: [],
        productInfo: {},
        page: 1,
    };

    componentDidMount(){ // Este método padrão do react é executado assim que o componente é carregado em tela
        this.loadProducts();
    }

    loadProducts = async (page = 1) => { // arrow function permite utilizar o THIS.
        const response = await api.get(`/products?page=${page}`); // Realiza a requisição
        
        const { docs, ...productInfo } = response.data; // joga os valores da API nas variáveis docs e productInfo
        
        this.setState({ products: docs, productInfo, page })
    }

    prevPage = () => {
        const { page, productInfo } = this.state;
        
        // Verifica se a página atual é a primeira
        if(page === 1) return;

        const pageNumber = page - 1; 

        this.loadProducts(pageNumber);
    }
    nextPage = () => {
        const { page, productInfo } = this.state;

        // Verifica se a página atual é a última
        if(page === productInfo.pages) return;

        const pageNumber = page + 1; 

        this.loadProducts(pageNumber);
    };
    
    render(){
        const { products, page, productInfo } = this.state;

        return(
            <div className="product-list">
                { products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <Link to={`/products/${product._id}`}>Acessar</Link>
                    </article>

                ))}
                <div className="actions">
                    <button disabled={page === 1} onClick={ this.prevPage } >Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={ this.nextPage } >Próximo</button>
                </div>
            </div>
        );        
    }
}