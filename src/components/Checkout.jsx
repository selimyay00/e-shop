import './checkout.css';
import christmas from '../images/christmas.jpg';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img src={christmas} className='checkout__image' alt='Christmas' />
                <h2>Your Shopping Basket</h2>
                {basket.map(item => (
                    <CheckoutProduct 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
