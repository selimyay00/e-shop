import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';


function Header() {
    return (
        <div className='header'>
            <h1>version-1 branch header</h1>
            <div className='header__section1'>
                <StorefrontIcon className='store-icon' />
                <h4>E-Shop</h4>
            </div>
            <div className='header__section2'>
                <input type="text" />
                <SearchIcon size="large" className='search-icon' />
            </div>
            <div className='header__section3'>
                <div className='links'>
                    <h5>Hello Guest</h5>
                    <h3 style={{marginTop: -1}}>Sign In</h3>
                </div>
                <div className='links'>
                    <h5>Your</h5>
                    <h3 style={{marginTop: -1}}>Shop</h3>
                </div>
                <div className='shop-icon'>
                <ShoppingCartIcon size="large" />
                <h4>0</h4>
                </div>
            </div>
        </div>
    )
}

export default Header