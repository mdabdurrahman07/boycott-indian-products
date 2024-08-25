import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import Cross from '../../assets/cross.png'
import { useState } from 'react';

const navItems = [
    {
        name: 'indian',
        link: '/'
    },
    {
        name: 'non indian',
        link: '/non-indian'
    },
    {
        name: 'products',
        link: '/products'
    },
]

const Header = () => {
    const location = useLocation()
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className="header">
            <Link to={'/'}> 
                <img src={Logo} className='logo' alt="logo" />
            </Link>
            <div className='hidden lg:block'>
                <ul>
                    {
                        navItems?.map((item, idx) => (
                            <li className={`${location.pathname === item.link ? 'bg-secondary text-white px-4 rounded-full py-1' : 'py-1'}`} key={idx}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* RESPONSIVE */}
            <div className="lg:hidden">
                <div className="action_btn z-20" onClick={() => setShowMenu(!showMenu)}>
                    <img src={Bars} className={`m-1.5 w-6 ${!showMenu ? 'block' : 'hidden'}`} alt="" />
                    <img src={Cross} className={`m-1.5 w-6 ${!showMenu ? 'hidden' : 'block'}`} alt="" />
                </div>
                <div className={`ham_container ${!showMenu ? '!-left-[500px]' : '!left-0'}`}>
                    <ul className="px-4">
                        {
                            navItems?.map((item, idx) => (
                                <li key={idx} className={`${item.link === location.pathname ? 'bg-third bg-opacity-60' : ''}`} onClick={() => setShowMenu(false)}>
                                    <Link className={`ham_menu_item`} to={item?.link}>{item?.name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;