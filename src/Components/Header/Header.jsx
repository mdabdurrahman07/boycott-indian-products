import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.png'

const navItems = [
    {
        name: 'indian',
        link: '/'
    },
    {
        name: 'bangladeshi',
        link: '/bangladeshi'
    },
    {
        name: 'products',
        link: '/products'
    },
]

const Header = () => {
    const location = useLocation()

    return (
        <div className="header">
            <Link to={'/'}> 
                <img src={Logo} className='logo' alt="logo" />
            </Link>
            <div>
                <ul>
                    {
                        navItems?.map((item, idx) => (
                            <li className={`${location.pathname === item.link ? 'bg-primary text-white px-4 rounded-full py-1' : 'py-1'}`} key={idx}>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;