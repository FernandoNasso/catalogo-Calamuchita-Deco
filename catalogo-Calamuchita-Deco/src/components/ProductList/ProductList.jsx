import PropTypes from 'prop-types';
import Product from "../Product/Product";
import styles from './ProductList.module.css';

const ProductList = ({ products }) => {
  return (
    <div className={styles['product-list']}>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      cantPack: PropTypes.number,
      price: PropTypes.number,
      imageUrl: PropTypes.string,
    })
  ).isRequired,
};

export default ProductList;
