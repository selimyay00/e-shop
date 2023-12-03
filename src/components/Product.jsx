import './product.css'
import { FaStar } from 'react-icons/fa';
import bag from '../images/bag.jpg';

function Product() {
    return (
        <div className='product'>
            <div className='product__info'>
                <p>
                    Bennett Mystic 15.6 inch Laptop
                    for Men and Women
                </p>
                <p className='product__price'><i>$30</i></p>
                <FaStar className='product__rating' />
            </div>
            <img src={bag} alt="bag" className='product__images' />
            <button>Add to basket</button>
        </div>
    )
}

export default Product