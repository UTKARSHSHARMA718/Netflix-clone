import React from 'react';
import Link from 'next/link';

interface NavbarItemProps {
    label: string;
    active?: boolean;
    href: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label, active, href }) => {
    return (
        <Link className={active ? 'text-white cursor-default' : 'text-gray-200 hover:text-gray-300 cursor-pointer transition'} {...{ href }}>
            {label}
        </Link>
    )
}

export default NavbarItem;