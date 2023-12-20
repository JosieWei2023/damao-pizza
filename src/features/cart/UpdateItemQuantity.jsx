import { useDispatch, useSelector } from 'react-redux'
import Button from '../../ui/Button'
import { decreaseItemQuantity, getCurrentQuantityById, increaseItemQuantity } from './cartSlice';
/* eslint-disable react/prop-types */
function UpdateItemQuantity({ pizzaId}) {
    const dispatch = useDispatch();
    const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

    return (
        <div className='flex gap-2 items-center'>
            <Button type="round" onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
            <span className='text-sm font-medium'>{currentQuantity}</span>
            <Button type="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity
