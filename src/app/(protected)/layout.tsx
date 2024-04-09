import React from 'react'
import { redirect } from 'next/navigation';
import type { Metadata } from 'next'

import AppContent from '@/containers/AppContent/AppContent'
import Navbar from '@/containers/Navbar/Navbar'
import ToastProvider from '@/containers/ToastProvider/ToastProvider';

import { getCurrentUser } from '@/actions/getCurrentUser';
import { AUTH } from '@/constant/routeNames';

export const metadata: Metadata = {
    title: 'Netflix | Content',
    description: 'Just a practise project!',
}

const ProtectedLayout = async ({ children }: { children: React.ReactNode }) => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        redirect(AUTH)
    }

    return (
        <html lang="en">
            <body>
                <ToastProvider />
                <AppContent />
                <Navbar {...{ currentUser }} />
                {children}
            </body>
        </html>
    )
}

export default ProtectedLayout