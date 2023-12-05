import './checkoutproduct.css'
import bag from '../images/bag.jpg';
import { FaStar } from 'react-icons/fa';


function CheckoutProduct() {
    return (
        <div className='checkout-product'>
            <img src={bag} className='cp-image'/>
            <div className='product__info'>
                <p className='cp-title'>
                    Zestful Citrus Carryall: Vibrant Orange Bag for Everyday Adventures
                </p>
                <p>
                    <small>$</small>
                    <strong>20</strong>
                </p>
                <div className='product__rating'>
                    <FaStar />
                </div>
                <button>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct