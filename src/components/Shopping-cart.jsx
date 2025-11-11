
import "bootstrap/dist/css/bootstrap.min.css";

const ShoppingCart = ({ items }) => {

    const result = items.reduce((total, currentValue) => total + currentValue.amount * currentValue.price, 0);

    return (
        < div className='shopping-cart' >
            <h2>Warenkorb</h2>
            {items.map((item) => (<div key={item.name}>{item.amount} x {item.name} = {(item.price * item.amount).toFixed(2)}€</div>))}
            <hr />
            Gesamt: {result.toFixed(2)}€
        </div >
    );
}

export default ShoppingCart;
