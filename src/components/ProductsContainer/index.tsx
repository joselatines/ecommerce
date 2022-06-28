interface IProps {
	children: React.ReactNode;
}

function ProductsContainer({ children }: IProps) {
	return (
		<div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
			{children}
		</div>
	);
}

export default ProductsContainer;
