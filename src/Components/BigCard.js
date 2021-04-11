import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import avatar from '../images/avatar.jpg';

const BigCard = (props) => {
  const { name, designation, role } = props;
  return (
    <span className="Container">
      <Card style={{ borderRadius: 10 }}>
        <div style={{ padding: 10 }}>
          <div>
            <Card.Img variant="top" style={{ height: 140, width: 140, borderRadius: 70 }} src={avatar} />
          </div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text style={{ color: '#a8abb3' }}>{designation}</Card.Text>
            <span className="Role">{role}</span>
          </Card.Body>
        </div>
        <div className="Footer">
          <Button style={{ width: '50%', borderBottomLeftRadius: 10, backgroundColor: '#FFF', padding: 10 }} variant="light">
            <FaEnvelope style={{ marginRight: 10 }} />
              Email
          </Button>
          <div className="BorderBetween"></div>
          <Button style={{ width: '50%', borderBottomLeftRadius: 10, backgroundColor: '#FFF', padding: 10 }} variant="light">
            <FaPhone style={{ marginRight: 10 }} />
            Call
          </Button>
        </div>
      </Card>
    </span>
  );
}

export default BigCard;
