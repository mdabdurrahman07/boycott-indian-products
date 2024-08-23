import { Link } from 'react-router-dom';
import ErrorImg from '../../assets/404.png'

const Error = () => {
    return (
        <div className='error'>
            <div className='text-center'>
                <img src={ErrorImg} alt="404" />
                <Link to="/">
                    <button className='mt-10'>Back to home</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;