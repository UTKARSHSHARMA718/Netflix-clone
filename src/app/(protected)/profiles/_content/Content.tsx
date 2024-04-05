'use client'

import { useCallback } from "react";
import { useRouter } from "next/navigation";

import UserCard from "@/components/UserCard/UserCard";
import { AUTH, HOME } from "@/constant/routeNames";
import { SafeUser } from "@/Types/SafeTypes";

interface AppContent {
    currentUser: SafeUser | null
}

const AppContent: React.FC<AppContent> = ({ currentUser }) => {
    const router = useRouter();
    // TODO: try to fix this
    // if (!currentUser) {
    //     router?.push(AUTH);
    //     return;
    // }

    const selectProfile = useCallback(() => {
        router.push(HOME);
    }, [router]);

    return (
        <div className="flex items-center h-full justify-center">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl text-white text-center">Who&#39;s watching?</h1>
                <div className="flex items-center justify-center gap-8 mt-10">
                    <div onClick={() => selectProfile()}>
                        <UserCard name={currentUser?.name || ""} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppContent;