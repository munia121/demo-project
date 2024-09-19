
import { Outlet } from 'react-router-dom';
import Host from '../component/Host';
import Nav from '../component/Nav';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;