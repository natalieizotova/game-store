import React from 'react';
import { calcTotalPrice } from '../utils';
import './cart-menu.css'
import { Button } from '../button/button';
import { CartItem } from '../cart-item/cart-item';

const CartMenu = ({items, onClick}) => {
    return (
        <div className='cart-menu'>
            
            <div className="cart-menu_game-list">
                {items.length > 0 ?
                items.map((game) => (
                    <CartItem 
                    key = {game.title}
                    price = {game.price}
                    title={game.title}
                    id = {game.id}
                    />
                )): 'Your cart is Empty'
                }
            </div>
            {
                items.length > 0?(
                <div className="cart-menu_arrange">
                    <div className="cart-menu_total-price">
                        <span>Total:</span>
                        <span>${calcTotalPrice(items)}</span>
                    </div>
                    <Button type='primary' size = 'm' onClick={onClick}>
                        Place your Order
                    </Button>
                </div>
            ): null}
        </div>
    );
};

export default CartMenu;