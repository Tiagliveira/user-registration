import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/button";
import TopBackground from "../../../components/Topbackgraound";
import api from "../../../services/api";
import {
  TrashIcon,
  CardUsers,
  ContainerUsers,
  Title,
  Container,
  AvatarUser,
} from "./styles";
import Trash from "../../../assets/trash.svg";

function ListUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function getUsers() {
    try {
      const { data } = await api.get("/usuarios");
      setUsers(data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteUser(id) {
    const confirmDelete = window.confirm("Tem certeza que deseja deletar este usuário?");
    if (!confirmDelete) return;

    try {
      await api.delete(`/usuarios/${id}`);
      getUsers();
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Container>
      <TopBackground />
      <Title>Listagem de Usuários</Title>

      <ContainerUsers>
        {loading ? (
          <p>Carregando usuários...</p>
        ) : users.length === 0 ? (
          <p>Nenhum usuário encontrado.</p>
        ) : (
          users.map((user) => (
            <CardUsers key={user.id}>
              <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
              <div>
                <h3>{user.name}</h3>
                <span>Idade: {user.age}</span>
                <br />
                <small>Email: {user.email}</small>
              </div>
              <TrashIcon
                src={Trash}
                alt="Ícone de lixo"
                onClick={() => deleteUser(user.id)}
              />
            </CardUsers>
          ))
        )}
      </ContainerUsers>

      <Button type="button" onClick={() => navigate("/")}>
        Voltar
      </Button>
    </Container>
  );
}

export default ListUsers;
