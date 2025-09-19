import SliderNota from "./SliderNota";

export default function Avaliacao(obj) {
  return (
    <div className="avaliacao">
      <div className="musica">
        <div className="img">
          <img src="https://t3.ftcdn.net/jpg/05/39/79/62/360_F_539796276_Rl3tMoQa9hLoDKVRkCgz2l8E2eCGI2ym.jpg" alt={obj.nome} />
        </div>
        <h3 className="nome-musica">{obj.musica}</h3>
      </div>

      <div className="conteudo">
        <p className="aval">
          <span className="tab"></span>
          {obj.comentario}
        </p>
        <SliderNota />
      </div>
    </div>
  );
}

