import React from 'react';

export const metadata = {
  title: 'Dashboard',
};

const AdminLayout = ({ children }) => {
  return (
    <div className='flex overflow-hidden justify-center'>
      {/* <aside>Admin Sidebar</aside> */}
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
