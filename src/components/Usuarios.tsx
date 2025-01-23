import { useEffect, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { ListaUsuario, Usuario } from '../interfaces/listaUsuarios';


export const Usuarios = () => {
    //generar un arreglo de usuarios
    const [users, setUsers] = useState<Usuario[]>([]);

    useEffect(() => {
        //Peticion a la API
        reqResApi.get<ListaUsuario>("/users")
        .then(resp=>{
            //console.log(resp.data.data[0].first_name);
            setUsers(resp.data.data)

        })
        .catch(console.log)
    }, []);

    //Funcion que repite las fiñas necesarias en la tabla para mostrar los usuarios
    
    const itemRowsTable =({first_name,last_name,email, avatar}: Usuario) =>{
        //desestructuracion de objetos
        
        return(
        <tr>
            <td>
                <img src={avatar} alt={first_name}
                style={{
                    width: 60,
                    borderRadius: 7  
                }    
                }/>
            </td>
            <td>Avatar</td>
            <td>{first_name}{last_name}</td>
            <td>{email}</td>  
        </tr>
        )

    }
    return (
        <div>
            <h3>Lista de Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((Usuario) => itemRowsTable(Usuario))
                    }
                </tbody>
            </table>
        </div>
    )
    }


