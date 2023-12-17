import PropTypes from 'prop-types';
import styles from './Product.module.css';

const Product = ({ name, price, imageUrl }) => {
  return (
    <div className={styles.product}>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Product;
