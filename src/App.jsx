import React, { useState } from 'react';
import Navbar from "./components/navbar";
import Product from "./components/product";
import ShoppingCart from './components/shopping-cart';

export default function App() {

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
        console.log(items);
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
        console.log(items);
    }

    return (
        <>
            <Navbar />
            <div className='main-container'>
                <div className='product-container'>
                    <Product onAdd={() => addItem(1, 'Tomaten', 2.69)} onDel={() => delItem('Tomaten')} source="/img/tomatoes.jpg" title="Tomaten" description="Zum Warekorb hinzufügen" />
                    <Product onAdd={() => addItem(1, 'Gurken', 1.99)} onDel={() => delItem('Gurken')} source="/img/cucumbers.jpg" title="Gurken" description="Zum Warekorb hinzufügen" />
                    <Product onAdd={() => addItem(1, 'Äpfel', 3.69)} onDel={() => delItem('Äpfel')} source="/img/apples.jpg" title="Äpfel" description="Zum Warekorb hinzufügen" />
                    <Product onAdd={() => addItem(1, 'Birnen', 4.11)} onDel={() => delItem('Birnen')} source="/img/pears.jpg" title="Birnen" description="Zum Warekorb hinzufügen" />
                </div>
                <ShoppingCart items={items} />
            </div>
        </>
    );
}
