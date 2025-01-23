import { useEffect, useState } from "react"

export const ComponenteUseEffect = () => {

    //hook useState: permite cambiar el estado de la variable, arrehglo, componente, etc
    const [bandera, setBandera] = useState<boolean>(false);


    //cambiar el estado de la bandera

    const cambiarBandera = () : void => {
        setBandera(!bandera);
    }

    //hook useEffect: permite ejecutar efectos secundarios encomponentes funcionales
    //1.- se ejecuta cada vez que el componente se renderiza
    //2.- se ejecuta cuando existe una lista de dependencias
    useEffect(() =>{
        //Codigo a ejecutar
    console.log("Desde el useEffect");
    }, [bandera]); //Lista de dependencias

    return (
        <div>
            <h3>Hook - UseEffect</h3>
            <button onClick={cambiarBandera}>Cambiar</button>

        </div>
    )
}
