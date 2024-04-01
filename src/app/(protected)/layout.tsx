import React from 'react'

import AppContent from '@/containers/AppContent/AppContent'
import Navbar from '@/containers/Navbar/Navbar'
import { getCurrentUser } from '@/actions/getCurrentUser';

const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {
    const currentUser = await getCurrentUser();

    return (
        <>
            <AppContent {...{currentUser}}/>
            <Navbar {...{ currentUser }} />
            {children}
        </>
    )
}

export default ProtectedLayout