import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface IProps {
	type: 'gallery' | 'cart';
	product: {};
}

function ProductCard({ type, product }: any) {
	const { name, description, image, price } = product;
	if (type.includes('gallery'))
		return (
			<Card sx={{ maxWidth: 300, minWidth: 250 }}>
				<CardActionArea>
					<CardMedia component='img' height='250' image={image} alt={name} />
					<CardContent>
						<Typography gutterBottom variant='h5' component='h3'>
							{name}
						</Typography>
						<div style={{ display: 'flex', placeItems: 'center', gap: '.8em' }}>
							<Typography variant='h6' color='primary'>
								${price}
							</Typography>
							<Typography
								sx={{ textDecoration: 'line-through' }}
								variant='h6'
								color='text.secondary'
							>
								${price * 2}
							</Typography>
						</div>
						<Typography variant='body2' color='text.secondary'>
							{description}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size='small' variant='contained' color='primary'>
						<ShoppingCartIcon /> Agregar
					</Button>
				</CardActions>
			</Card>
		);

	return <span>Insert a type prop</span>;
}

export default ProductCard;
