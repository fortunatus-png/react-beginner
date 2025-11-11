
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
    return (  
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Logo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">Gemüse</a>
              <a className="nav-link" href="/">Obst</a>
              <a className="nav-link" href="/">Milchprodukte</a>
              <a className="nav-link" href="/" tabIndex="-1" aria-disabled="true">Wkorb</a>
            </div>
          </div>
        </div>
      </nav>
    );
}
