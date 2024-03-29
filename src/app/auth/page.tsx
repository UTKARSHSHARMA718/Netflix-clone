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
import { CREDENTIALS, LOGIN, REGISTER } from '@/constant/const';
import { PROFILES } from '@/constant/routeNames';
import { API } from '@/constant/apiEndpoints';

const Auth = () => {
    const router = useRouter();

    const [userEmail, setUserEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [variant, setVariant] = useState(LOGIN);

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === LOGIN ? REGISTER : LOGIN);
    }, []);

    const loginUserHandler = useCallback(async () => {
        try {
            await signIn(CREDENTIALS, {
                userEmail,
                userPassword,
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
            const url = API + PROFILES
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
                        <Heading label={variant === 'login' ? 'Sign in' : 'Register'} />
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
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
                        <div className="flex flex-row items-center gap-4 mt-8 justify-center">
                            <div onClick={() => signIn('google', { callbackUrl: '/profiles' })} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                                <FcGoogle size={32} />
                            </div>
                            <div onClick={() => signIn('github', { callbackUrl: '/profiles' })} className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                                <FaGithub size={32} />
                            </div>
                        </div>
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