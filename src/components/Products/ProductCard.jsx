import React, { useEffect } from 'react';
import styles from './products.module.scss';
import { BsCartPlus, BsCartXFill } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCartAction, decQAction, incQAction, removeFromCartAction } from '../../redux/actions/index';
import { incQReducer } from './../../redux/reducers/index';
const ProductCard = ({ product }) => {
	const { pathname } = useLocation();
	const isInCart = pathname.includes('cart');
	const dispatch = useDispatch()
	const addToCart = () => dispatch(addToCartAction(product))
	const removeFromCart = () => dispatch(removeFromCartAction(product.name))

	const incqa = () => dispatch(incQAction(product))
	const decqa = () => dispatch(decQAction(product))

	// useEffect(() => {
	// 	addToCart()
	// 	removeFromCart()
	// }, [dispatch])

	return (
		<div className={styles['product-card']}>
			{isInCart && (
				<button className={styles['del-product']} onClick={removeFromCart}>
					<BsCartXFill />
				</button>
			)}
			<img src={product.image} alt={product.name} />
			<div className={styles['product-details']}>
				<h3>
					{product.name}
					{isInCart && <span> x ({product.quantity})</span>}
				</h3>
				<h5>{product.ingredients}</h5>
				<div className={styles['product-footer']}>
					{isInCart ? (
						<>
							<button onClick={incqa}>
								<AiOutlinePlus />
							</button>
							<h3>{product.price}EGP</h3>
							<button onClick={decqa}>
								<AiOutlineMinus />
							</button>
						</>
					) : (
						<>
							<h3>{product.price}EGP</h3>
							<button onClick={addToCart}>
								<BsCartPlus />
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
