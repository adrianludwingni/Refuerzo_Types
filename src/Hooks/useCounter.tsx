// creando nuestro propio hook 

import { useState } from "react";

export const useCounter = (inicial: number = 10) => {

    const [valor, setValor] = useState <number>(inicial);
        //cambiar estado mediante la funcion
        const contador=(numero: number):void =>{
            setValor(valor + numero)
        }

        return {
            valor,
            contador
        }
}
