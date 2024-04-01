import React from 'react'
import { Toaster } from 'react-hot-toast';

import AppContent from '@/containers/AppContent/AppContent'
import Navbar from '@/containers/Navbar/Navbar'
import { getCurrentUser } from '@/actions/getCurrentUser';

const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {
    const currentUser = await getCurrentUser();

    return (
        <>
            <Toaster />
            <AppContent />
            <Navbar {...{ currentUser }} />
            {children}
        </>
    )
}

export default ProtectedLayout