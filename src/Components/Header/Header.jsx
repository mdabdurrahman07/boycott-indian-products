import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import { useState } from 'react';

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
        name: 'category',
        link: '/category'
    },
]

const Header = () => {
    const [currentNav, setCurrentNav] = useState('indian')

    return (
        <div className="header">
            <img src={Logo} className='logo' alt="logo" />
            <div>
                <ul>
                    {
                        navItems?.map((item, idx) => (
                            <li key={idx} onClick={() => setCurrentNav(item?.name)}>
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