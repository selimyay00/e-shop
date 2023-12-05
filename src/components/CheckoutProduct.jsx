import './checkoutproduct.css'
import bag from '../images/bag.jpg';
import { FaStar } from 'react-icons/fa';


function CheckoutProduct() {
    return (
        <div className='checkoutProduct'>
            <img 
                src={bag} 
                alt='checkout image' 
                className='checkoutProduct__image'
            />
            <div className='checkoutproduct__info'>
                <p className='checoutProduct__title'>
                Zestful Citrus Carryall: Vibrant Orange Bag for Everyday Adventures
                </p>
                <p className='checkoutProduct__price'> 
                    <small>$</small>
                    <strong>39.99</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    <FaStar />
                </div>
                <button>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct