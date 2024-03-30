import React from 'react';

import { MOBILE_MENU_OPTIONS } from '@/constant/const';

interface MobileMenuProps {
    visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
    if (!visible) {
        return null;
    }

    return (
        <div className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex">
            <div className="flex flex-col gap-4">
                {MOBILE_MENU_OPTIONS?.map(item => {
                    return <div className="px-3 text-center text-white hover:underline" key={item?.label}>
                        {item?.label}
                    </div>
                })}
            </div>
        </div>
    )
}

export default MobileMenu;