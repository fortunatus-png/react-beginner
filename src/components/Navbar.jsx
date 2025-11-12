import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
    return (  
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/gemuese">Gemüse</Link>
              <Link className="nav-link" to="/obst">Obst</Link>
              <Link className="nav-link" to="/milch">Milchprodukte</Link>
              <Link className="nav-link" to="/wkorb">Wkorb</Link>
            </div>
          </div>
        </div>
      </nav>
    );
}
 