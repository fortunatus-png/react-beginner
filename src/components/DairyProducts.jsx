import { useState } from 'react';
import Product from "./Product";
import ShoppingCart from './ShoppingCart';

export default function DairyProducts() {
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
                    <Product onAdd={() => addItem(1, 'Milch', 3.69)} onDel={() => delItem('Milch')} source="/img/milk.jpg" title="Milch" description="Zum Warekorb hinzufügen" />
                    <Product onAdd={() => addItem(1, 'Käse', 4.11)} onDel={() => delItem('Käse')} source="/img/cheese.jpg" title="Käse" description="Zum Warekorb hinzufügen" />
                    <Product onAdd={() => addItem(1, 'Yoghurt', 4.11)} onDel={() => delItem('Yoghurt')} source="/img/yoghurt.jpg" title="Yoghurt" description="Zum Warekorb hinzufügen" />
                </div>
                <ShoppingCart items={items} />
            </div>
        </>
    );
}
