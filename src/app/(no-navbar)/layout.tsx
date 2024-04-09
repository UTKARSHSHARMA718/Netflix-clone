import React from 'react';
import type { Metadata } from 'next'

import ToastProvider from '@/containers/ToastProvider/ToastProvider';

export const metadata: Metadata = {
    title: 'Authentication',
    description: 'Just a practise project!',
}

const NoNavbarLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <html lang="en">
            <body>
                <ToastProvider />
                {children}
            </body>
        </html>
    )
}

export default NoNavbarLayout;