
import useProducts from '../../hooks/useProducts';
import OrderReviews from '../OrderReviews/OrderReviews';
import './Reviews.css';
const Reviews = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h1>review: {products.length}</h1>
            {
                products.map(product =>
                    <OrderReviews
                        key={product.id}
                        product={product}
                    ></OrderReviews>
                )
            }
        </div>
    );
};

export default Reviews;