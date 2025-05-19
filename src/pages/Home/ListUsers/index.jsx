import  Button from "../../../components/button"
import TopBackground from "../../../components/Topbackgraound"
import api from "../../../services/api"
import { useEffect, useState} from "react";
import { TrashIcon, CardUsers, ContainerUsers, Title, Container, AvatarUser }   from "./styles";
 import  Trash  from "../../../assets/trash.svg";
import { useNavigate } from "react-router-dom";




function ListUsers() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

    async function getUsers(){ 
        const {data} = await api.get('/usuarios')

        setUsers(data)
        
        }
        getUsers()
       
    }, [])

    async function deletUsers(id) {
        await api.delete(`/usuarios/${id}`)

        async function getUsers(){ 
        const {data} = await api.get('/usuarios')

        setUsers(data)
        
        }
        getUsers()
       
        
        
    }

    return(
        <Container>
            <TopBackground />
            <Title>LIstagem de Usuários</Title>
         
         <ContainerUsers>

            {users.map( user => (
                <CardUsers key={user.id}>
                    <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>
            <div>
                <h3>{user.name}</h3>
                <p>{user.age}</p>
                <p>{user.email}</p>
            </div>
            <TrashIcon src={Trash} alt="Icone-lixo" onClick={() => deletUsers(user.id)}/>
             </CardUsers>
            ))}

            </ContainerUsers>

            <Button type= "button" onClick={()=> navigate('/')} >Voltar</Button>
        </Container>
    )
    
}

export default ListUsers