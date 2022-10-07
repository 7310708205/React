import React from 'react';
import "../styles/nav.css";
const Navbar=({setShow, size})=>{
    return(
        <nav>
            <div className='nav-box'>
                <span className='my-shop' onClick={()=>setShow(true)}>Shop here!</span>
                <div className='cart' onClick={()=>setShow(false)}>
                    <span>
                        <i class="fas fa-cart-plus"></i>
                    </span>
                    <span>{size}</span>
                </div>
            </div>
        </nav>
    )
}
export default Navbar