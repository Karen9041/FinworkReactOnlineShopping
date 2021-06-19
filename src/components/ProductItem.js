import { Card } from "antd"
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { StoreContext } from "../store";
import { setProductDetail } from "../actions";

export default function ProductItem({ product }) {
    const { dispatch } = useContext(StoreContext);
    return (
        <Link to={`/Product/${product.id}`}
            onClick={() => {
            setProductDetail(dispatch, product.id, 1);
            }}
        >
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
