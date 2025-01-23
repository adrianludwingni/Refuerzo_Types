import { useEffect, useReducer } from "react"

export const Login = () => {

    // interface estado de autenticacion 

    interface AuthState {

        validando: boolean,
        token: string | null,
        username: string,
        password: string,

    }
    //creando estado inicial - segundo parametro
    const inicialState: AuthState = {
        validando: true,
        token: null,
        username: '',
        password: ''
    }
//type para los parametros de las acciones

type LoginPayLoad ={

    username: string;
    password: string;
}


// las posibles acciones a realizar
    type AuthAction = 
    {type: "logout"} | {type: "login", payload: LoginPayLoad}

    
    //Funcion reducer - primer parametro

    const authReducer = (state: AuthState, action: AuthAction): AuthState => {
        switch (action.type) {
            case "logout":
                return {
                    validando: false,
                    token: null,
                    username: "",
                    password: ""
                }

                case "login":

                // desestructuracion de objetos
                const { username,password} = action.payload;
                    return {

                        validando:false,
                        token: "REOREOLSDFDedoeqwk313w",
                        username: username,
                        password: password

                    }

            default:
                return state;

        }

    }

    //hook useReducer: permite el cambio de estados mas complejos

    const [state, dispatch] = useReducer(authReducer, inicialState);

    useEffect(() => {

        //Función de tiempo
        setTimeout(() => {
            dispatch({ type: "logout" })

        }, 1500);

    }, []);


    // funcion para disparar la accion de login

    const login=(): void => {
        dispatch({
            type:"login",
            payload:{
                username: "vflores",
                password: "vflores123*"
            }
        })
    }



    const logout=(): void => {
        dispatch({
            type:"logout",

        })
    }



    //Implementar una validacion para mostrar los mensajes de acuerdo a la accion

    if (state.validando == true) {
        return (

            <div>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </div>

        )

    }


    return (

        <div>

            <h3>Login</h3>

            {(state.token == null)
                ? <div className="alert alert-danger">No Autenticado...</div>
                : <div className="alert alert-success">Autenticado...</div>
            }


            {(state.token == null)

                ? <button className="btn btn-primary" onClick={login}>Login</button>


                : <button className="btn btn-danger" onClick={logout}>Logout</button>

            }
        </div>
    )
}
