import { Card } from "antd"
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
    return (
        <Link to={`/product/${product.id}`}>
            <Card 
                hoverable
                className="product"
                cover={<img alt={product.name} src={product.image} />}>
                <div className="product-info">
                    <p>
                        {product.name}<br/>
                        $ {product.price}
                    </p>
                </div>
            </Card>
        </Link>
    );
}
