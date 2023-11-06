import './index.css'
import {Link} from 'react-router-dom'
const Header=()=>{
    return(
        <div className='navheader'>
            <div className="navimg">
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png" alt="logo" className='logo'/>
            </div>
            <div className='links'>
                 <Link to='/' className='li'>Home</Link>
               
                <Link to='/products' className='li'>Products</Link>
                 <Link to='/cart' className='li'>Cart</Link>
                 <Link to='/Login' className='lib'><button className='but'>Logout</button></Link>
            </div>
        </div>
    )
}
export default Header