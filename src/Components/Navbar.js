import { useRef } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
import {AiOutlineHome} from 'react-icons/ai'
import {MdOutlineManageAccounts} from 'react-icons/md'
import {MdOutlineAccountCircle} from 'react-icons/md'


const Navbar = () => {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
  return (
    <header>
			<h1><div className="logo">
             <span className='logo-name'>Sanlam logo</span>    
          </div>
          </h1>
			<nav ref={navRef}>
			    <Link to='/'><AiOutlineHome/> Home</Link>
				<Link to='/login'><MdOutlineAccountCircle/> Login</Link>
                <Link to='/signup'><MdOutlineManageAccounts/> Signup</Link>
                
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>


  )
}

export default Navbar