import React from 'react'
import { setSourceMapRange } from 'typescript'

export const Funciones = () => {

    const sumar = (a:number,b:number):number => {

        return a+b;

    }

    return (
        <>
            <h3>Funciones</h3>
            <span>El resultado es: {sumar(10,20)}</span>
        </>
    )
}
