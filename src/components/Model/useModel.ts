import { useCallback, useContext, useEffect } from 'react'

import ModelsContext from './ModelsContext'

export default function useModel(modelName: string) {
    const { registerModel, unregisterModel, getModelByname } = useContext(ModelsContext)

    useEffect(() => () => unregisterModel(modelName), [modelName, unregisterModel])

    const getModel = useCallback(() => getModelByname(modelName), [getModelByname, modelName])

    return { registerModel, getModel }
}