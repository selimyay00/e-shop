import './checkoutproduct.css'
import bag from '../images/bag.jpg';
import { FaStar } from 'react-icons/fa';


function CheckoutProduct() {
    return (
        <div className='checkout-product'>
            <img src={bag} alt="bag" className='checkout-image' />
                <div className='checkout-info'>
                    <p>Zestful Citrus Carryall: Vibrant Orange Bag for Everyday AdventuresZestful Citrus Carryall: Vibrant Orange Bag for Everyday Adventures</p>
                    <p>
                        <strong>$39.99</strong>
                    </p>
                    <FaStar />
                    <button>Remove from Basket</button>
                </div>
                
        </div>
    )
}

export default CheckoutProduct