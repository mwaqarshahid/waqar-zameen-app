import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import avatar from '../images/avatar.jpg';

const SmartCard = (props) => {
  const { name, designation } = props;
  return (
    <span>
      <Card style={{ borderRadius: 10 }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text style={{ color: '#a8abb3' }}>{designation}</Card.Text>
          </Card.Body>
          <Card.Img variant="top" style={{ height: 46, width: 46, borderRadius: 23, marginRight: 20 }} src={avatar} />
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

export default SmartCard;
