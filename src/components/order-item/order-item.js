import React from 'react';
import { useDispatch } from 'react-redux';
import { GameCover } from '../game-cover'
import { AiOutlineCloseCircle} from 'react-icons/ai'
import { deleteItemFromCart } from '../../redux/cart/reducer'
import './order-item.css'

export const OrderItem = ({game}) => {
    const dispatch = useDispatch()
    const handleClick = ()=>{
        dispatch(deleteItemFromCart(game.id))
    }
    return (
        <div className='order-item'>
            <div className="order-item_cover">
                <GameCover image = {game.image}/>
            </div>
            <div className="order-item_title">
                <span>{game.title}</span>
            </div>
            <div className="order-item_price">
                <span>${game.price}</span>
                <AiOutlineCloseCircle
                size={25}
                className = 'order-item_delete-icon'
                onClick={handleClick}
                />
            </div>
        </div>
    );
};

