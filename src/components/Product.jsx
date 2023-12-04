import './product.css'
import { FaStar } from 'react-icons/fa';

function Product(props) {
    return (
        <div className='product'>
            <div className='product__info'>
                <p>
                    {props.title}
                </p>
                <p className='product__price'>
                    {props.price}
                </p>
                <FaStar className='product__rating' />
            </div>
            <img src={props.image} alt="images" className='product__images' />
            <button>Add to basket</button>
        </div>
    )
}

export default Product