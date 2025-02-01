import React from 'react';

const AdminLayout = ({children}) => {
    return (
        <div>
            <div>
                Admin Header
            </div>
            {
                children
            }
            
        </div>
    );
};

export default AdminLayout;