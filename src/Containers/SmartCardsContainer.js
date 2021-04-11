import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SmartCard from '../Components/SmartCard';

const SmartCardsContainer = () => {
  return (
    <Container style={{ padding: 10, backgroundColor: '#f4f5f7' }}>
      <Row style={{ marginBottom: 10 }}>
        <Col>
          <SmartCard name="Syed Sumail Hassan" designation="Mid Laner" role="Admin" />
        </Col>
        <Col>
          <SmartCard name="Sarmad Wahab" designation="Service Manager" role="Admin" />
        </Col>
        <Col>
          <SmartCard name="Awais Shahid" designation="Hyper Aggressive Carry" role="Admin" />
        </Col>
      </Row>
      <Row>
        <Col>
          <SmartCard name="Abdullah Muhammad" designation="Carry" role="Admin" />
        </Col>
        <Col>
          <SmartCard name="Ferrari" designation="Software Architect" role="Admin" />
        </Col>
        <Col>
          <SmartCard name="Usman Akram" designation="Designer" role="Admin" />
        </Col>
      </Row>
    </Container>
  );
}

export default SmartCardsContainer;
