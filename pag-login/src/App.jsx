import './App.css'; // Importando o arquivo CSS corretamente
import { useEffect, useState } from 'react';

const App = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/usuarios')
    .then(response => response.json())
    .then( users => {
      setUsuarios(users)
    })
    .catch(error => console.error('Erro ao buscar dados:', error))
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const dadosDoFormulario = {
      nome: event.target.username.value,
      email: event.target.email.value,
    };

    try {
      const response = await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario: dadosDoFormulario }),
      });

      // Verifica se a resposta foi bem-sucedida (status 2xx)
      if (response.ok) {
        // Se a resposta for bem-sucedida, converte para JSON
        const novoUsuario = await response.json();
        setUsuarios([...usuarios, novoUsuario]); // Adiciona o novo usuário à lista
        console.log("Usuário adicionado com sucesso!");
      } else {
        // Se a resposta não for bem-sucedida, exibe o status no console
        console.error(`Erro ao adicionar usuário: Status ${response.status}`);
      }
    } catch (error) {
      // Caso ocorra um erro na requisição (como problemas de rede), exibe o erro
      console.error("Erro ao enviar dados:", error);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault()

    const id = event.target.id.value

    try {
      const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'DELETE'
      })
    } catch (error) {
    console.error("Erro na requisição DELETE:", error);

  }
  };

  const handleUpdate = async (event) => {
    event.preventDefault()

    const id = event.target.idA.value

    const dadosNovos = {
      nome: event.target.nome.value,
      email: event.target.email.value
    }

    try {
      const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ usuario: dadosNovos }),
      });

      if (response.ok) {
        // Se a resposta for bem-sucedida
        console.log('Usuário atualizado com sucesso!');
      } else {
        // Se houver algum erro com a requisição
        console.log('Erro ao atualizar o usuário.');
      }
    } catch (error) {
      // Se ocorrer algum erro durante a requisição
      console.log('Erro na comunicação com o servidor.');
    }
  }

  return (
    <div className="App">
      <section id="login">
        <div className="login-box">
          <h2>Login</h2>

          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Usuário</label>
            <input type="text" id="username" name="username" required />

            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" required />

            <button type="submit">Entrar</button>
          </form>
        </div>
      </section>

      <section id="usuarios">
        <h2 className="titulo">Usuarios:</h2>
        <ul>
          {usuarios.map((u) => (
          <li key={u.id}>{"id: " + u.id + " nome: " + u.nome + " email: " + u.email}</li>
          ))}
        </ul>
      </section>

      <section id="login">
        <div className="login-box">
          <h2>Deletar</h2>
          <p>Bota o ID do usuario que deseja deletar:</p>

          <form onSubmit={handleDelete}>
            <label htmlFor="id">ID</label>
            <input type="text" id="id" name="id" required />

            <button type="submit">Deletar</button>
          </form>
        </div>
      </section>

      <section id="login">
        <div className="login-box">
          <h2>Atualizar</h2>
          <p>Bota o ID do usuario que deseja atualizar e os dados novos:</p>

          <form onSubmit={handleUpdate}>
            <label htmlFor="idA">ID</label>
            <input type="text" id="idA" name="idA" required />
            
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" required />

            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" required />

            <button type="submit">Atualizar</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default App;
