import React, { ReactNode } from 'react'


export interface carModel {
    modelName: string
    overlayNode: ReactNode
    sectionRef: React.RefObject<HTMLElement>
}

interface ModelsContext {
    wrapperRef: React.RefObject<HTMLElement>
    registeredModels: carModel[]
    registerModel: (model: carModel) => void
    unregisterModel: (model: string) => void
    getModelByname: (modelName: string) => carModel | null 
}

export default React.createContext<ModelsContext>({} as ModelsContext)