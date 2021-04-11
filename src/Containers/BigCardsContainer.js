import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BigCard from '../Components/BigCard';

const BigCardsContainer = () => {
  return (
    <Container style={{ padding: 10, backgroundColor: '#f4f5f7' }}>
      <Row style={{ marginBottom: 10 }}>
        <Col>
          <BigCard name="Syed Sumail Hassan" designation="Mid Laner" role="Admin" />
        </Col>
        <Col>
          <BigCard name="Sarmad Wahab" designation="Service Manager" role="Admin" />
        </Col>
        <Col>
          <BigCard name="Awais Shahid" designation="Hyper Aggressive Carry" role="Admin" />
        </Col>
        <Col>
          <BigCard name="Waqar Shahid" designation="Big brain" role="Admin" />
        </Col>
      </Row>
      <Row>
        <Col>
          <BigCard name="Abdullah Muhammad" designation="Carry" role="Admin" />
        </Col>
        <Col>
          <BigCard name="Ferrari" designation="Software Architect" role="Admin" />
        </Col>
        <Col>
          <BigCard name="Usman Akram" designation="Designer" role="Admin" />
        </Col>
        <Col>
          <BigCard name="Ain ul Hassan" designation="Senior Software Engineer" role="Admin" />
        </Col>
      </Row>
    </Container>
  );
}

export default BigCardsContainer;
