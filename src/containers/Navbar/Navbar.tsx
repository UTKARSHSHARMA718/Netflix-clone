"use client"

import React, { useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { BellIcon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

import AccountMenu from '@/components/AccountMenu/AccountMenu';
import MobileMenu from '@/components/MobileMenu/MobileMenu';
import NavbarItem from '@/components/NavbarItem/NavbarItem';
import { MOBILE_MENU_OPTIONS, DISTANCE_TO_MAKE_NAVBAR_DARK } from '@/constant/const';
import { compareStrings } from '@/libs/utils/utils';
import { SafeUser } from '@/Types/SafeTypes';
import styles from './Navbar.module.css'

interface INavbar{
    currentUser: SafeUser|null;
}

const Navbar:React.FC<INavbar> = ({currentUser}) => {
    const router = useRouter();

    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);
    const pathName = usePathname() || "";

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= DISTANCE_TO_MAKE_NAVBAR_DARK) {
                setShowBackground(true)
            } else {
                setShowBackground(false)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const toggleAccountMenu = useCallback(() => {
        setShowAccountMenu((current) => !current);
    }, []);

    const toggleMobileMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    }, []);

    return (
        <nav className={`w-full fixed z-40 ${styles.navContainer}`}>
            <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
                <Image src="/images/logo.png" width={200} height={200} className={`h-4 lg:h-7 ${styles.logo}`} alt="Logo" />
                <div className={`flex-row ml-8 gap-7 hidden md:flex ${styles.navlinksContainer}`}>
                    {MOBILE_MENU_OPTIONS?.map(items => {
                        return <NavbarItem label={items?.label} key={items?.label} active={compareStrings(pathName, items?.routeName)} onClick={()=>router?.push(items?.routeName)} />
                    })}
                </div>
                <div onClick={toggleMobileMenu} className={`flex flex-row items-center gap-2 ml-8 cursor-pointer relative ${styles.mobileOptions}`}>
                    <p className="text-white text-sm">Browse</p>
                    <ChevronDownIcon className={`w-4 text-white fill-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
                    <MobileMenu visible={showMobileMenu} />
                </div>
                <div className="flex flex-row ml-auto gap-4 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <MagnifyingGlassIcon className="w-6" />
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BellIcon className="w-6" />
                    </div>
                    <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <Image src="/images/default-blue.png" width={50} height={50} alt="user-image" />
                        </div>
                        <ChevronDownIcon className={`w-4 text-white fill-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
                        <AccountMenu visible={showAccountMenu} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;