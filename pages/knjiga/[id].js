import { useStateContext } from '@/context/StateContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { IoIosArrowBack } from 'react-icons/io';

function TermPage() {
  const router = useRouter();
  const { id } = router.query;
  const { knjigePrikaz, pronadjiKnjiguPoId } = useStateContext();
  const [knjiga, setKnjiga] = useState({});


  function postaviCspZaGoogleDriveLink(googleDriveLink) {
    const cspPolicy = `frame-src 'self' ${googleDriveLink}`;
    const metaTag = document.createElement("meta");
    metaTag.setAttribute("http-equiv", "Content-Security-Policy");
    metaTag.setAttribute("content", cspPolicy);
    document.head.appendChild(metaTag);
  }
  useEffect(() => {
    if(!knjigePrikaz){
      router.push('/')
    }
  }, [])
  
  useEffect(() => {
    if (knjiga && knjiga.googleDriveLink) {
      postaviCspZaGoogleDriveLink(knjiga.googleDriveLink);
    }
  }, [knjiga]);

  useEffect(() => {
    if (id) {
      if (knjigePrikaz) { const pronadjenaKnjiga = pronadjiKnjiguPoId(id, knjigePrikaz); setKnjiga(pronadjenaKnjiga); }
    }
  }, [id]);

  return (<div style={{ padding: '10px 20px' }}>
    <div style={{ marginBottom: '20px' }}>
      <IoIosArrowBack
        size={32}
        onClick={() => router.push('/')}
        style={{ cursor: 'pointer' }}
      />
    </div>
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      <Card style={{ width: '100%', maxWidth: '400px' }}>
        <Card.Body>
          <Card.Title>{knjiga && knjiga.naslov}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Autor: {knjiga && knjiga.autor}</Card.Subtitle>
          <Card.Text>{knjiga && knjiga.opis}</Card.Text>
          <Card.Footer>
            <small className="text-muted">Tip: {knjiga && knjiga.tip}</small>
          </Card.Footer>
        </Card.Body>
      </Card>
      <p style={{marginTop:'20px', width:'100%',}}>
        Ovde mozete pristupiti direktno drivu:<br/><a href={knjiga && knjiga.googleDriveLink}>{knjiga &&knjiga.googleDriveLink}</a>
      </p>
      <div style={{ marginTop: '20px', width: '100%', maxWidth: '800px' }}>
        <h1>Pregled PDF-a</h1>
        <iframe src={knjiga && knjiga.googleDriveLink} width="100%" height="600" allow="autoplay"></iframe>
      </div>
    </div>
  </div>
  );
}

export default TermPage;
