export default function Perfil() {
  return (
    <section id="perfil">
      <div className="img">
        <div className="sombra"></div>
        <img src="./img-vector-icon-design-on-260nw-2164648583.webp" alt="" />
      </div>

      <div className="perfil">
        <div>
          <a href="#">
            <i className="fa-solid fa-user" id="pfp"></i>
          </a>
          <div className="nomes">
            <h2 className="titulo2">Name</h2>
            <p className="nome">@username</p>
          </div>
        </div>

        <div>
          <div>
            <i className="fa-solid fa-user icon"></i>
            <p className="count">40</p>
          </div>
          <div>
            <i className="fa-solid fa-user icon"></i>
            <p className="count">56</p>
          </div>
        </div>

        <div className="descricao">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            illum vel, voluptas est minima iure officiis nobis ipsum aliquid
            laudantium?
          </p>
        </div>
      </div>
    </section>
  );
}
