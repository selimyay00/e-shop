import './checkoutproduct.css'
import bag from '../images/bag.jpg';
import { FaStar } from 'react-icons/fa';


function CheckoutProduct(props) {
    return (
        <div className='checkout-product'>
            <img src={props.image} alt="image" className='checkout-image' />
                <div className='checkout-info'>
                    <p>{props.title}</p>
                    <p>
                        <strong>${props.price}</strong>
                    </p>
                <div className='product__rating'>
                    {Array(props.rating)
                        .fill()
                        .map((_, i) => (
                            <FaStar key={i} />
                        ))}
                </div>
                    <button>Remove from Basket</button>
                </div>
        </div>
    )
}

export default CheckoutProduct