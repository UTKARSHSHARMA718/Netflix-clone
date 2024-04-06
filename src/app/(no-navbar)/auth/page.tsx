import React from 'react'
import { redirect } from 'next/navigation';

import AuthContent from './content'

import { getCurrentUser } from '@/actions/getCurrentUser'
import { HOME } from '@/constant/routeNames';

const AuthPage = async () => {
    const user = await getCurrentUser();

    if(user){
        redirect(HOME);
    }

    return (
        <div>
            <AuthContent />
        </div>
    )
}

export default AuthPage