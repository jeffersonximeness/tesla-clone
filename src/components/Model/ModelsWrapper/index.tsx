import React, { useCallback, useRef, useState } from 'react'

import { Container, OverlaysRoot } from './styles'

import ModelsContext, { carModel } from '../ModelsContext'
import ModelOverlay from '../ModelOverlay'

const ModelsWrapper: React.FC = ({ children }) => {
    const wrapperRef = useRef<HTMLDivElement>(null)

    const [registeredModels, setRegisteredModels] = useState<carModel[]>([])

    const registerModel = useCallback((model: carModel) => {
        setRegisteredModels(state => [...state, model])
    }, [])

    const unregisterModel = useCallback((modelName: string) => {
        setRegisteredModels(state => state.filter(model => model.modelName !== modelName))
    }, [])

    const getModelByname = useCallback((modelName: string) => {
        return registeredModels.find(item => item.modelName === modelName) || null
    }, [registeredModels])

    return (
        <ModelsContext.Provider
            value={{
                wrapperRef,
                registeredModels,
                registerModel,
                unregisterModel,
                getModelByname
            }}
        >
            <Container ref={wrapperRef}>
                <OverlaysRoot>
                    {registeredModels.map(item => (
                        <ModelOverlay key={item.modelName} model={item}>
                            {item.overlayNode}
                        </ModelOverlay>
                    ))}
                </OverlaysRoot>


                { children }
            </Container>
        </ModelsContext.Provider>
    )
}

export default ModelsWrapper