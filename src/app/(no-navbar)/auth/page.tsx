import React from 'react'
import { redirect } from 'next/navigation';

import AuthContent from './Content'

import { getCurrentUser } from '@/actions/getCurrentUser'
import { HOME } from '@/constant/routeNames';

const AuthPage = async () => {
    const user = await getCurrentUser();

    if (user) {
        redirect(HOME);
    }

    return (
        <AuthContent />
    )
}

export default AuthPage