import { Card, Button } from 'react-bootstrap';
import CardModal from './CardModal';
import { useState } from 'react';

const CardComponent = ({ id, name, price, image, copies, description }) => {
	//mb be better to use state manager but it not my way :)

	const [currentPrice, setCurrentPrice] = useState(price);

	const handlePriceUpdate = (newPrice) => {
		setCurrentPrice(newPrice); // price update
	};

	return (
		<Card className='p-2 m-5' style={{ width: '18rem' }}>
			<Card.Img variant="top" src={image} />
			<Card.Body>
				<Card.Title className='text-center'>{name}</Card.Title>
				<Card.Title>Start price: {price} $ </Card.Title>
				<Card.Title>Copies: {copies}</Card.Title>
				<Card.Text>
					{description}
				</Card.Text>
				<CardModal
					id={id}
					name={name}
					price={currentPrice}
					image={image}
					copies={copies}
					description={description}
					onUpdatePrice={handlePriceUpdate}
				/>
			</Card.Body>
		</Card>
	);
}

export default CardComponent;