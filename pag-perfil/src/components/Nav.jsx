import { Link } from "react-router-dom";

export default function Nav({ img, user, username, children }) {
    return (<header> 
        <Link to="/"><img src={img} alt="" /></Link>

        <nav>
            <ul>
                {children}
            </ul>
        </nav>

        <div className="perfil-nav">
            <div className="pefil-img-nav"><i className="fa-solid fa-user" id="pfp"></i></div>
            <div>
                <h2>{user}</h2>
                <p>{username}</p>
            </div>
            <button>. . .</button>
        </div>
    </header>)
}