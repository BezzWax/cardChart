import { useState } from 'react';
import { Button, Modal, Row, Col, Image } from 'react-bootstrap';
import PriceChart from './PriceChart';

const CardModal = ({ id, name, price, image, copies, description }) => {
	const [show, setShow] = useState(false);
	const [currentPrice, setCurrentPrice] = useState(price);

	const handlePriceUpdate = (newPrice) => {
		setCurrentPrice(newPrice); // price update
	};

	return (
		<>
			<Button variant="primary" onClick={() => setShow(true)}>
				More details
			</Button>

			<Modal
				show={show}
				onHide={() => setShow(false)}
				size="xxl"
				fullscreen={true}
				className="modal-fullscreen"
			>
				<Modal.Header closeButton>
					<Modal.Title>
						{name} #{id}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row>
						<Col>
							<Image width={400} height={400} src={image} />
						</Col>
						<Col>
							<ul style={{ listStyle: "none" }}>
								<li>Price: {currentPrice} $</li>
								<li>Copies: {copies}</li>
								<li>Description: {description}</li>
								<li>
									<Button>
										Buy
									</Button>
								</li>
							</ul>
						</Col>
						<Col>
							<PriceChart onUpdatePrice={handlePriceUpdate} />
						</Col>
					</Row>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default CardModal;
