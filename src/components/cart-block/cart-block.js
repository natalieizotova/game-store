import React from 'react';
import './cart-block.css'
import {BiCart} from 'react-icons/bi'

export const CartBlock = () => {
    return (
        <div className='cart-block'>
            <BiCart size={30} className = 'cart-block_item'/>
            <span className='cart-block_total-price'>$1234</span>
        </div>
    );
};

 