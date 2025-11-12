import "bootstrap/dist/css/bootstrap.min.css";

export default function Discount({title, description, imageSrc}) {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={imageSrc} className="card-img-top" alt={title}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/" className="btn btn-primary">Zum Warenkorb</a>
            </div>
        </div>
    );
}
