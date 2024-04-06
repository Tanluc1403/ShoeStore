import React, { Component } from 'react';

import data from "./data.json";
import ProductList from './productList';
import Modal from './modal';

export default class ShoesStore extends Component {
  constructor(props) {
    super (props);
    this.state = {
      productsData :data,
      product : "" ,
    }

    
  }

  handleInfo = (product) => {
    console.log(product);
    this.setState({
      product,
    })
  }
  
  render() {
    return (
      <div>
        <h1 className="display-4 text-center my-3">STORE SHOES</h1>
        <ProductList productsData={this.state.productsData} getInfo={this.handleInfo}/>
        <Modal product={this.state.product}/>

      </div>
    )
  }
}
