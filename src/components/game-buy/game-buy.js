import React from 'react';
import { Button } from '../button/button';
import './game-buy.css'

export const GameBuy = ({game}) => {
    return (
        <div className='game-buy'>
            <span className='game-buy_price'>${game.price}</span>
            <Button type='primary' onClick={()=>null}>
                Add to Cart
                </Button>
            
        </div>
    );
};
