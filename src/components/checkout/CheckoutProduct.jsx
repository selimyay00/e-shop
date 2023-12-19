import './checkoutproduct.css'
import { FaStar } from 'react-icons/fa'
import { useStateValue } from "../StateProvider"


function CheckoutProduct(props) {
    const [{basket}, dispatch ] = useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: props.id,
        })
    }
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
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                </div>
        </div>
    )
}

export default CheckoutProduct