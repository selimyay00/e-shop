import './home.css'
import eCommerceImage from '../images/e-commerce.jpg';
import Product from './Product';

function Home() {
    return (
        <div>            
                <img src={eCommerceImage} alt="e-commerce-image" className='home-image' />
                <div className='first-row'>
                    <Product />
                    <Product />
                </div>
                <div className='second-row'>
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className='third-row'>
                    <Product />
                </div>
        </div>
    )
}

export default Home