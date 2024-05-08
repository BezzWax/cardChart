import React from 'react';
import CardComponent from './card/Card';
import { Container, Row } from 'react-bootstrap';
import CardImg from './img/img.png';
import CardImg2 from './img/img2.png';
import CardImg3 from './img/img3.png';

function App() {
  const nft = [
    { id: 1, name: 'Panda', price: 30, image: CardImg, copies: 5, description: "In the digital wilderness, you emulate the cautious panda, making informed decisions to safeguard your financial future in the bamboo groves of investments." },
    { id: 2, name: 'Hippo', price: 100, image: CardImg2, copies: 1, description: "Balancing fire and water, you dance with angels, creating a stable investment journey. Balanced in investment, wealth, and wisdom, you build a bright future." },
    { id: 3, name: 'Fox', price: 780, image: CardImg3, copies: 10, description: "Clever in capturing market trends, you're the sly fox seizing opportunities. Agile and sharp, you dance with market trends, avoiding financial pitfalls." },
  ];

  // for data i use => https://www.bybit.com/ru-RU/nft/

  return (
    <Container>
      <Row className='d-flex vh-100 justify-content-center align-items-center' >
        {nft.map((card) => (
          <CardComponent
            key={card.id}
            id={card.id}
            name={card.name}
            price={card.price}
            image={card.image}
            copies={card.copies}
            description={card.description}
          />
        ))}
      </Row>
    </Container>
  );
}

export default App;
