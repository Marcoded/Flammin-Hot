
import React, { ReactNode } from 'react';

interface MainContentProps {
  children: ReactNode;
}

const MainContent = ({children}: MainContentProps) => (
    <div className='container mx-auto flex items-center justify-center h-screen'>
        {children}
    </div>
);

export default MainContent;