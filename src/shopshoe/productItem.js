import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        const { product, getInfo } = this.props;
        return (
            <div className="col-sm-3">
                <div className="card">
                    <img className="card-img-top" src={product.image} width={200} alt="" />
                    <div className="card-body">
                        <h4 className="card-title"> {product.name}</h4>
                        <div>
                            Des : {product.shortDescription}
                        </div>
                        <button 
                        className='btn btn-info'  
                        data-toggle="modal" 
                        data-target="#exampleModal" 
                        onClick={()=> {
                            getInfo(product) 
                        }}
                        > Chi tiết
                        </button>
                        
                    </div>
                </div>
            </div>
        )
    }
}
