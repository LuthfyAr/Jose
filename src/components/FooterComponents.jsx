import { Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterComponents = () => {
  return <div className='footer py-5'>
    <Container>
      <Row className='d-flex justify-content-between'>
        <Col lg='5'>
        <h3 className='fw-bold'> JOSE VET</h3>
        <p className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, repudiandae. Dicta fuga maiores quae nostrum velit facere necessitatibus dolorum laudantium!</p>
        <div className='no mb-1 mt-4'>
          <Link className='text-decoration-none'>
            <i className='fa-brands fa-whatsapp'></i>
            <p className='m-0'>+62 123-456-789</p>
          </Link>
        </div>
        <div className='email'>
          <Link className='text-decoration-none'>
            <i className='fa-regular fa-envelope'></i>
            <p className='m-0'>person@gmail.com</p>
          </Link>
        </div>
        </Col>
        <Col className='d-flex flex-column col-lg-2 col mt-lg-0 mt-5'>
          <h5 className='fw-bold'>Menu</h5>
          <Link to=''>Home</Link>
          <Link to='symtomschecker'>Symptoms Checker</Link>
          <Link to='fasilitas'>Fasilitas</Link>
          <Link to='reservasi'>Reservasi</Link>
        </Col>
        <Col lg='4' className='mt-lg-0 mt-5'>
          <h5 className='fw-bold mb-3'>Subscribe</h5>
          <div className='subscribe'>
            <input type="text" placeholder='Subscribe...'/>
            <button className='btn btn-success rounded-end rounded-0'>Subscribe</button>
          </div>
          <div className='social mt-3'>
          <p>Instagram : @Josevet</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className='text-center px-md-0 px-3'>&copy; Copyright {new Date().getFullYear()} by <span className='fw-bold'>Human</span>, All Right Reserve</p>
        </Col>
      </Row>
    </Container>
  </div>;
};

export default FooterComponents;
