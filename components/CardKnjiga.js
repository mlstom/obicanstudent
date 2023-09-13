import Link from 'next/link';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap'; // Uvezite Card komponentu iz react-bootstrap

function CardKnjiga({ id, naslov, autor }) {
    const [hovered, setHovered] = useState(false);
    const imageUrl='https://th.bing.com/th/id/R.b0de552241ff2fd268ce39381d63c614?rik=rWxbZwCPSgjSqg&pid=ImgRaw&r=0'
    const cardStyles = {
        minWidth:'300px',
        minheight:'150px',
        boxShadow: hovered ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none', // Dodajte senku na hover
        transition: 'box-shadow 0.3s ease-in-out', // Dodajte animaciju senke
        cursor: 'pointer', // Promenite kursor na pokazivač na hover
      };

      const imageStyles = {
        width: '60px', // Postavite širinu slike
        height: 'auto', // Postavite visinu slike
        objectFit: 'cover', // Podesite da se slika prilagodi dimenzijama
        marginRight: '10px', // Dodajte prostor između slike i teksta
      }
    return (
        <Link href={`/knjiga/${id}`} style={{textDecoration:'none'}}>
            <Card
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={cardStyles}
            ><div className="d-flex">
                <Card.Img
                    variant="top"
                    src={imageUrl}
                    alt="Slika knjige"
                    style={imageStyles}
                />
                <Card.Body>
                    <Card.Title>{naslov.length < 21 ? naslov : naslov.slice(0, 20) + '...'}</Card.Title>
                    <Card.Text>Autor: {autor}</Card.Text>
                </Card.Body>
                </div>
            </Card>
        </Link>
    );
}

export default CardKnjiga;
