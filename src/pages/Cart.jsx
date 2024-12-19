import React from 'react';
import ProductsList from '../components/Products/ProductsList';
import { store } from '../redux/index.js';
import { useSelector } from 'react-redux';
const Cart = () => {

	const cart = useSelector(state => state.cart)
	const cartTotal = useSelector(state => state.cartTotal)

	// const total = cart.reduce((a, b) => a + b.price, 0);
	return (
		<div>
			<h1 style={{ textAlign: 'center', fontSize: '35px', color: '#e74c3c' }}>
				Cart
			</h1>
			<h4
				style={{
					textAlign: 'center',
					fontSize: '25px',
					color: '#60a5fa',
					margin: 0,
				}}
			>
				{' '}
				total: {cartTotal}
			</h4>

			<ProductsList products={cart} />

		</div>
	);
};

export default Cart;
