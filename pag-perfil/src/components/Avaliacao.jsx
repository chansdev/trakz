import SliderNota from "./SliderNota";

export default function Avaliacao({ titulo, texto, img }) {
  return (
    <div className="avaliacao">
      <div className="musica">
        <div className="img">
          <img src={img} alt={titulo} />
        </div>
        <h3 className="nome-musica">{titulo}</h3>
      </div>

      <div className="conteudo">
        <p className="aval">
          <span className="tab"></span>
          {texto}
        </p>
        <SliderNota />
      </div>
    </div>
  );
}
