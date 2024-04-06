import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        const { product} = this.props
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Thông tin chi tiết</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img src={product.image} />
                            
                            <div>
                            <b>Alias :</b> {product.alias}
                            </div>
                            <div>
                            <b>Price :</b> {product.price}
                            </div>
                            <div>
                                <b>Description :</b> {product.description}
                            </div>
                            <div>
                            <b>Quantity :</b> {product.quantity}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
<div>
  $('#myModal').on('shown.bs.modal', function () {'{'}
  $('#myInput').trigger('focus')
  {'}'})
</div>
