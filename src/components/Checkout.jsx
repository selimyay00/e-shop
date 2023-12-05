import './checkout.css';
import christmas from '../images/christmas.jpg';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img src={christmas} className='checkout__image' />
                <h2>Your Shopping Basket</h2>
                <CheckoutProduct />
            </div>
            <div className='checkout__right'>

            </div>
        </div>
    )
}

export default Checkout