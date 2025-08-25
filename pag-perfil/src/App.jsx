import Perfil from "./components/Perfil";
import MusicaFavorita from "./components/MusicaFavorita";
import Avaliacao from "./components/Avaliacao";

function App() {
  const musicas = [
    { titulo: "musica 1", autor: "autor 1" },
    { titulo: "musica 2", autor: "autor 2" },
    { titulo: "musica 3", autor: "autor 3" },
    { titulo: "musica 4", autor: "autor 4" },
  ];

  const avaliacoes = [
    { titulo: "Musica Generica", texto: "Lorem ipsum dolor sit amet...", img: "./img-vector-icon-design-on-260nw-2164648583.webp" },
    { titulo: "Musica Generica", texto: "Outro texto de avaliação...", img: "./img-vector-icon-design-on-260nw-2164648583.webp" },
  ];

  return (
    <main>
      <Perfil />

      <section id="favoritas">
        <h2>Favoritas</h2>
        <div className="musicas">
          {musicas.map((m, i) => (
            <MusicaFavorita
              key={i}
              titulo={m.titulo}
              autor={m.autor}
              img="./img-vector-icon-design-on-260nw-2164648583.webp"
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
    </main>
  );
}

export default App;
