import { Outlet } from 'react-router-dom';

function PageContainer() {
    return (
        <div className="container mt-4">
            <Outlet />
        </div>
    );
}

export default PageContainer;