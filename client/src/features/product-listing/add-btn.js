import React from "react"

export default function AddButton(props) {
    return  <button type="button" class="btn btn-sm btn-outline-success"
    onClick={() => props.addToCart(props.product)}
    >Add to cart ({
        (props.cartItem && props.cartItem.quantity) || 0
    })</button>
}
