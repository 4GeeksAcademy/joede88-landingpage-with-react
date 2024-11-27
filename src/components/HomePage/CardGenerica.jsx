/* import Card from 'react-bootstrap/Card';
import BotonGenerico from './BotonGenerico';


const CardGenerica = () => {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://placehold.jp/150x180.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <BotonGenerico texto="Clica Aquí" variant="primary"></BotonGenerico>
        </Card.Body>
      </Card>
    );
  }
  export default CardGenerica; */

  import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BotonGenerico from "./BotonGenerico";

function GridExample() {
  return (
    <Row xs={1} md={2} lg={4} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="https://placehold.jp/500x325.png" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <BotonGenerico texto="Clica aquí" margen="30px" ></BotonGenerico>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridExample;