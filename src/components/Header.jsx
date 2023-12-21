import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import './header.css';
import { Link } from "react-router-dom"
import { useStateValue } from './StateProvider';


function Header() {
    const [{basket}, dispatch] = useStateValue()

    return (
        <div className='header'>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <div className='header__section1'>
                <StorefrontIcon className='store-icon' />
                <h4 className='link-text'>E-Shop</h4>
            </div>
            </Link>
            <div className='header__section2'>
                <input type="text" />
                <SearchIcon size="large" className='search-icon' />
            </div>
            <div className='header__section3'>
                <div className='links'>
                    <h5 className='link-text'><i>Welcome!</i></h5>
                    <h3 style={{marginTop: -1}} className='link-text'>Sign In</h3>
                </div>
                <div className='links'>
                    <h5 className='link-text'><i>Your</i></h5>
                    <h3 style={{marginTop: -1}} className='link-text'>Shop</h3>
                </div>
                <Link to="/checkout" style={{ textDecoration: 'none', color: 'white' }}>
                <div className='shop-icon'>
                    <ShoppingCartIcon size="large" />
                    <h4>{basket.length}</h4>
                </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header