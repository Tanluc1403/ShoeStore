import React, { Component } from 'react';
import ProductItem from './productItem';

export default class ProductList extends Component {
  renderListProduct = () => {
    const { productsData, getInfo } = this.props;
   
    return productsData.map((item) => {
      
      return <ProductItem key = {item.id} product = {item} getInfo= {getInfo} />
      
    })
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderListProduct()}
        </div>
        
        


        
      </div>
        
    )
  }
}
