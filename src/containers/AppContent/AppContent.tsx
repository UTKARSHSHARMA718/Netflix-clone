"use client"

import React, { useContext } from 'react'

import DetailsModal from '@/components/DetailsModal/DetailsModal';
import { GlobalContext } from '@/context/GlobalContext';
import { GlobalStateType } from '@/Types/ContextTypes';

const AppContent = () => {
    const contextData:GlobalStateType =  useContext(GlobalContext)!
    const { globalState, setGlobalState } = contextData;

    return <DetailsModal visible={globalState?.isInfoModalOpen} onClose={() => setGlobalState((prev: any) => ({ ...prev, isInfoModalOpen: false }))} />

}

export default AppContent