"use client"

import React, { useContext } from 'react'

import DetailsModal from '@/components/DetailsModal/DetailsModal'
import { GlobalContext } from '@/context/GlobalContext';

const AppContent = () => {
    // @ts-ignore
    const { globalState, setGlobalState } = useContext(GlobalContext);

    return (
        <>
            <DetailsModal visible={globalState?.isInfoModalOpen} onClose={() => setGlobalState((prev: any) => ({ ...prev, isInfoModalOpen: false }))} />
        </>
    )
}

export default AppContent