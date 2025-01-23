
import { useCounter } from "../Hooks/useCounter";


export const ContadorCustomHook = () => {

    // llamar a nuestros 
    // creando nuestro propio hook
    const {valor, contador} = useCounter(50);


    return (
        <div>
            <h3>Contador Custom Hook: <small>{valor}</small> </h3>
            <button className="btn btn-primary"
            onClick={() =>contador(1)}>+1
            </button>

            &nbsp;
            
            <button className="btn btn-primary"
            onClick={() =>contador(-1)}>-1
            </button>
        </div>
    )
}
