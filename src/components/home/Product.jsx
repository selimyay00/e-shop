import './product.css';
import { FaStar } from 'react-icons/fa';
import { useStateValue } from '../StateProvider';

function Product(props) {
    const [state, dispatch] = useStateValue();

    function addToBasket() {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: props.id,
                image: props.image,
                price: props.price,
                rating: props.rating
            }
        });
    }

    return (
        <div className='product'>
            <div className='product__info'>
                <p>{props.title}</p>
                <p className='product__price'>
                    <small>$</small>{props.price}
                </p>
                <div className='product__rating'>
                    {Array(props.rating)
                        .fill()
                        .map((_, i) => (
                            <FaStar key={i} />
                        ))}
                </div>
            </div>
            <img src={props.image} alt="images" className='product__images' />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    );
}

export default Product;
