import "bootstrap/dist/css/bootstrap.min.css";
import Discount from './Discount';

export default function Home() {
    return (
        <div className='main-container'>
            <div className='product-container'>
                <Discount title="Tomaten" description="1kg - 1.99 Euro" imageSrc="/img/tomatoes.jpg" />
                <Discount title="Käse" description="1kg - 2.99 Euro" imageSrc="/img/cheese.jpg" />
                <Discount title="Äpfel" description="1kg - 1.79 Euro" imageSrc="/img/apples.jpg" />
            </div>  
        </div>
    );
}
