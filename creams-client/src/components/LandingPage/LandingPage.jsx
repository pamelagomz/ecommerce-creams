import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './landingpage.css';
import cream from '../../assets/Creams-vol1-6.png';
import imageCream from '../../assets/Creams-ColorCrema.png'
import imageCoral from '../../assets/Creams-Coral.png'
import imageVerde from '../../assets/Creams-verde.png'
import imagePink from '../../assets/Creams-Rosa.png'



const LandingPage = () => {
    const section1Style = {
      background: '#FBDDE6',
      color: '#333', // Cambia el color del texto según sea necesario
      position: 'relative',
      padding: '100px 0', // Ajusta el relleno según sea necesario
      fontFamily: 'Montserrat',
    };

    const section3Style = {
        background: '#96BCAB',
        color: '#333', // Cambia el color del texto según sea necesario
        position: 'relative',
        padding: '100px 0', // Ajusta el relleno según sea necesario
        fontFamily: 'Montserrat',
      };
  
    return (
      <div>
        {/* Sección 1 con fondo */}
        <section style={section1Style} className="text-center">
          <Container>
            <Row>
              <Col>
                <h1 className="display-2 text-danger mb-4" style={{fontFamily: 'Playfair Display'}}>EL FUTURO DE LA LECHE VEGANA</h1>
                <div className="text-start mt-10 mb-10">
              <p className="lead mb-4" style={{fontSize: '15px'}}>Descubre sabores deliciosos, 100% veganos.</p>
              <Button variant="light">Comprar</Button>
              </div>
              </Col>
            </Row>
          </Container>
          {/* Imagen superpuesta */}
          <div className="position-absolute bottom-0 start-50 translate-middle-x" style={{ marginBottom: '-50px' }}>
            <img
              src={cream}
              alt="Lata"
              className="img-fluid"
              style={{ width: '250px' }}
            />
          </div>
        </section>
  
        {/* Sección 2 */}
        <section className="py-5">
          <Container>
            <Row>
              <Col >
                <h2>Deliciosos sabores</h2>
                <p>Transformarán tu rutina diaria de café.</p>
              </Col>
            </Row>
            <Row className='justify-content-center align-items-center'>
            <img
              src={imageCream}
              alt="Lata"
              className="img-fluid m-5"
              style={{ width: '200px' }}
              margin="50px"
            />
            <img
              src={imageCoral}
              alt="Lata"
              className="img-fluid m-5"
              style={{ width: '200px' }}
              margin="50px"
            />
            <img
              src={imageVerde}
              alt="Lata"
              className="img-fluid m-5"
              style={{ width: '200px' }}
              margin="50px"
            />
            <img
              src={imagePink}
              alt="Lata"
              className="img-fluid m-5"
              style={{ width: '200px' }}
              margin="50px"
            />
            </Row>
          </Container>
        </section>

        {/* Sección 3 */}
        <section id="3" style={section3Style} className="text-center">
          <Container>
            <Row>
              <Col >
                <h2>Nuestra Historia</h2>
                <p>En el corazón de nuestra marca de leche en polvo se encuentra una historia de pasión y compromiso con la calidad. Nacimos de la idea de crear una opción vegana excepcional para los amantes del café, fusionando los sabores ricos con una alternativa láctea que se adapta a todos los estilos de vida. Desde nuestros inicios, nos hemos esforzado por ofrecer una experiencia única, elevando cada taza de café a nuevas alturas de indulgencia y sabor. Únete a nosotros en este viaje de autenticidad, donde la deliciosa simplicidad encuentra su lugar en cada momento de café.</p>
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      
    );
  };
  
  export default LandingPage;
