import Perfil from "./components/Perfil";
import MusicaFavorita from "./components/MusicaFavorita";
import Avaliacao from "./components/Avaliacao";
import Nav from "./components/Nav"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Pagina1 from "./pages/Pagina1";
import Pagina2 from "./pages/Pagina2";
import Pagina3 from "./pages/Pagina3";


function App() {
  const musicas = [
    { titulo: "musica 1", autor: "autor 1" },
    { titulo: "musica 2", autor: "autor 2" },
    { titulo: "musica 3", autor: "autor 3" },
    { titulo: "musica 4", autor: "autor 4" },
  ];

  const avaliacoes = [
    { titulo: "Musica Generica", texto: "Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .", img: "./images.png" },
    { titulo: "Musica Generica", texto: "Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .Lorem .", img: "./images.png" },
  ];

  return (
    <div id="fullContent">
      <Nav img="./trakz-icon.png" nome="nome" username="nome_deUsuario">
        <li><Link to="/pagina1">Pagina1</Link></li>
        <li><Link to="/pagina2">Pagina2</Link></li>
        <li><Link to="/pagina3">Pagina3</Link></li>
      </Nav>
      
      <main>
      <Routes>
        <Route
            path="/"
            element={
              <>
          <Perfil />

          <section id="favoritas">
            <h2>Favoritas</h2>
            <div className="musicas">
              {musicas.map((m, i) => (
                <MusicaFavorita
                  key={i}
                  titulo={m.titulo}
                  autor={m.autor}
                  img="./images.png"
                />
              ))}
            </div>
          </section>

          

          <section id="avaliacoes">
            <h2 className="titulo">Avaliações</h2>
            {avaliacoes.map((a, i) => (
              <Avaliacao key={i} {...a} />
            ))}
          </section>
          </>
        }/>
          <Route path="/pagina1" element={<Pagina1/>}/>
          <Route path="/pagina2" element={<Pagina2/>}/>
          <Route path="/pagina3" element={<Pagina3/>}/>
        </Routes>  
      </main>
    </div>);
}

export default App;
