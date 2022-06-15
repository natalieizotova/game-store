import React from 'react';
import { useSelector } from 'react-redux';
import { OrderItem } from '../../components/order-item';
import { calcTotalPrice } from '../../components/utils'
import './order-page.css'

export const OrderPage = () => {
    const items = useSelector(state=> state.cart.itemsInCart)
    if (items.length <0) return <h1>Your cart is Empty</h1>
    return (
        <div className='order-page'>
            <div className="order-page_left">
                {items.map(game=> <OrderItem game={game}/>)}
            </div>
            <div className="order-page_right">
                <div className="order-page_total-price">
                    <span>
                        Subtotal {items.length} items: ${ calcTotalPrice(items)}
                    </span>
                </div>
            </div>        
        </div>
    );
};

