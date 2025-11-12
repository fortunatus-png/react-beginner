import { useState } from 'react';
import Product from "./Product";
import ShoppingCart from './ShoppingCart';

export default function Vegetable() {
    const [items, setItems] = useState([]);

    const addItem = (amount, name, price) => {
        setItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(item => item.name === name);

            if (existingItemIndex >= 0) {
                return prevItems.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, amount: item.amount + amount } // Neues Objekt
                        : item
                );
            } else {
                return [...prevItems, { amount, name, price }];
            }
        });
    }

    const delItem = (name) => {
        setItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(item => item.name === name);

            if (existingItemIndex >= 0) {
                const updatedItems = prevItems.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, amount: item.amount - 1 }
                        : item
                );
                return updatedItems.filter(item => item.amount > 0);
            }
            return prevItems;
        });
    }

    return (
        <>
            <div className='main-container'>
                <div className='product-container'>
                    <Product onAdd={() => addItem(1, 'Tomaten', 3.69)} onDel={() => delItem('Tomaten')} source="/img/tomatoes.jpg" title="Tomaten" description="Zum Warekorb hinzufügen" />
                    <Product onAdd={() => addItem(1, 'Gurken', 4.11)} onDel={() => delItem('Gurken')} source="/img/cucumbers.jpg" title="Gurken" description="Zum Warekorb hinzufügen" />
                    <Product onAdd={() => addItem(1, 'Karotten', 4.11)} onDel={() => delItem('Karotten')} source="/img/carrots.jpg" title="Karotten" description="Zum Warekorb hinzufügen" />
                </div>
                <ShoppingCart items={items} />
            </div>
        </>
    );
}
