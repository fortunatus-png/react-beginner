import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Product = ({ onAdd, onDel, source, title, description }) => (
    <div className="card" style={{ width: '18rem' }}>
        <img src={source} className="card-img-top" alt="tomatoes" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <button onClick={onAdd} className="btn btn-primary">Hinzufügen</button>
            <button onClick={onDel} className="btn btn-primary">Entfernen</button>
        </div>
    </div>
);

export default Product;