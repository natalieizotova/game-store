import React from 'react';
import './cart-item.css'
import { useDispatch } from 'react-redux';
import { AiOutlineCloseCircle} from 'react-icons/ai'
import { deleteItemFromCart } from '../../redux/cart/reducer'

export const CartItem = ({title,price,id}) => {
    const dispatch = useDispatch()
    const handleClick = ()=>{
        dispatch(deleteItemFromCart(id))
    }
    return (
        <div className='cart-item'>
            <span>{title}</span>
            <div className="cart-item_price">
                <span>$ {price}</span>
                <AiOutlineCloseCircle
                size={20}
                className = 'order-item_delete-icon'
                onClick={handleClick}
                />
            </div>
            
        </div>
    );
};

