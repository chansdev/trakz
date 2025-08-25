export default function MusicaFavorita({ titulo, autor, img }) {
  return (
    <div className="musica">
      <div className="img">
        <img src={img} alt={titulo} />
      </div>
      <h3 className="titulo">{titulo}</h3>
      <p className="autor">{autor}</p>
    </div>
  );
}
