import React from 'react';
import './home.css';
import eCommerceImage from '../../images/e-commerce.jpg';
import Product from './Product';
import bag from '../../images/bag.jpg';
import tv from '../../images/tv.jpg';
import iphone from '../../images/iphone.jpg';
import camera from '../../images/camera.jpg';
import watch from '../../images/watch.jpg';
import airpods from '../../images/airpods.jpg';


function Home() {
    return (
        <div className='products-div'>            
                <img src={eCommerceImage} alt="e-commerce-image" className='home-image' />
                <div className='first-row'>
                    <Product 
                        id='1'
                        title='Zestful Citrus Carryall: Vibrant Orange Bag for Everyday Adventures'
                        price={39.99}
                        rating={2}
                        image={bag}
                    />
                    <Product 
                        id='2'
                        title='TV Unveiled: The Nexus Chronicles - Unraveling Realms'
                        price={699.99}
                        rating={3}
                        image={tv}
                    />
                </div>
                <div className='second-row'>
                    <Product 
                        id='3'
                        title='iPhone 14'
                        price={999.99}
                        rating={4}
                        image={iphone}
                    />
                    <Product 
                        id='4'
                        title='CaptureSphere: Lenscrafting moments'
                        price={399.99}
                        rating={2}
                        image={camera}
                    />
                    
                </div>
                <div className='third-row'>
                    <Product 
                        id='6'
                        title='TimeCraft Elegance: Wrist Symphony'
                        price={99.99}
                        rating={4}
                        image={airpods}
                    />
                    <Product 
                        id='5'
                        title='TimeCraft Elegance: Wrist Symphony'
                        price={199.99}
                        rating={4}
                        image={watch}
                    />
                </div>
        </div>
    )
}

export default Home