import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

/* whatever component we import here, will be shown on the website directly. this specific component need to be imported in app.jsx as main path */
const Root = () => {
    return (
        <div>
            {/* using <outlet></outlet>, here we want show the nested child route, where we mentioned the route of the body of our website*/}
            <div className='max-w-6xl mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;