import React, { ReactNode } from 'react';

interface ItemsLayoutProps {
  children: ReactNode;
}

const ItemsLayout = ({children}: ItemsLayoutProps) => (
    <div className='grid grid-cols-2 gap-5 container md:grid-cols-3 mx-auto items-center justify-items-center mt-10'>
        {children}
    </div>
);

export default ItemsLayout;