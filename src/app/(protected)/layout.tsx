import React from 'react'
import { redirect } from 'next/navigation';

import AppContent from '@/containers/AppContent/AppContent'
import Navbar from '@/containers/Navbar/Navbar'
import ToastProvider from '@/containers/ToastProvider/ToastProvider';

import { getCurrentUser } from '@/actions/getCurrentUser';
import { AUTH } from '@/constant/routeNames';

const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        redirect(AUTH)
    }

    return (
        <>
            <ToastProvider />
            <AppContent />
            <Navbar {...{ currentUser }} />
            {children}
        </>
    )
}

export default ProtectedLayout