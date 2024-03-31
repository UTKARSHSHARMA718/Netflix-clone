"use client"

import React, { useCallback, useState } from 'react';
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import axios from "axios"

import Button from '@/components/Button/Button';
import Heading from '@/components/Heading/Heading';
import Input from '@/components/Input/Input';

import Logo from "@/../../public/images/logo.png"
import { CREDENTIALS, LOGIN_TYPE, REGISTER_TYPE } from '@/constant/const';
import { PROFILES } from '@/constant/routeNames';
import { API, REGISTER } from '@/constant/apiEndpoints';

const Auth = () => {
    const router = useRouter();

    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [variant, setVariant] = useState(LOGIN_TYPE);

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === LOGIN_TYPE ? REGISTER_TYPE : LOGIN_TYPE);
    }, []);

    const loginUserHandler = useCallback(async () => {
        try {
            await signIn(CREDENTIALS, {
                email:userEmail,
                password:userPassword,
                redirect: false,
                callbackUrl: '/'
            });

            router.push(PROFILES);
        } catch (error) {
            console.log(error);
        }
    }, [userEmail, userPassword, router]);

    const registerUserHandler = useCallback(async () => {
        try {
            const url = API + REGISTER
            await axios.post(url, {
                userEmail,
                userName,
                userPassword,
            });

            loginUserHandler();
        } catch (error) {
            console.log(error);
        }
    }, [userEmail, userName, userPassword, loginUserHandler]);

    return (
        <div className={`relative h-full w-full bg-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-cover`}>
            <div className='bg-black w-full h-full lg:bg-opacity-50'>
                <nav className="px-12 py-5">
                    <Image src={Logo?.src} className='h-12' width={200} height={200} alt='netflix-logo' />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <Heading label={variant === LOGIN_TYPE ? 'Sign in' : 'Register'} />
                        <div className="flex flex-col gap-4">
                            {variant === REGISTER_TYPE && (
                                <Input
                                    id="name"
                                    type="text"
                                    label="Username"
                                    value={userName}
                                    onChange={(e: any) => setUserName(e.target.value)}
                                />
                            )}
                            <Input
                                id="email"
                                type="email"
                                label="Email address or phone number"
                                value={userEmail}
                                onChange={(e: any) => setUserEmail(e.target.value)}
                            />
                            <Input
                                type="password"
                                id="password"
                                label="Password"
                                value={userPassword}
                                onChange={(e: any) => setUserPassword(e.target.value)}
                            />
                        </div>
                        <Button label={variant === 'login' ? 'Login' : 'Sign up'} onClick={variant === 'login' ? loginUserHandler : registerUserHandler} />
                        <p className="text-neutral-500 mt-12">
                            {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                            <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                                {variant === 'login' ? 'Create an account' : 'Login'}
                            </span>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Auth