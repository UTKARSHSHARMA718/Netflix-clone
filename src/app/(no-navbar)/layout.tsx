import React from 'react';

import ToastProvider from '@/containers/ToastProvider/ToastProvider';

const NoNavbarLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <>
            <ToastProvider />
            {children}
        </>
    )
}

export default NoNavbarLayout;