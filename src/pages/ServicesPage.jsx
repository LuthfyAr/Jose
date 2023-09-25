import {Container, Row, Col} from "react-bootstrap";
import HeroImage from '../assets/cat.png';
import { Services,  dataSwiper} from '../data/index';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
// import {} from

const ServicesPage = () => {
  return (
    <div className="homepage">
      <header className="w100 min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="header-box d-flex align-items-center pt-lg-5">
          <Col lg='6'>
            <h1 className="mb-2">
              Taking <br /><span>Care of Your Pet</span> <br /> With Us
            </h1>
            <p className="mb-2">
              Human canine bonding is the relationship between dogs and humans.
            </p>
            <button className="btn btn-success btn-lg rounded-1 me-2">Daftar Sekarang</button>
          </Col>
          <Col lg='6'className="pt-lg-0 pt-5" >
          <img src={HeroImage} alt="hero-img"/>
          </Col>
        </Row>
      </Container>
      </header>

      <div className="services w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Our Services</h1>
              <p className="text-center ">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row>
            {Services.map((service) =>{
              return(
                <Col key={service.id} className="shadow rounded">
                  <img src={service.image} alt="" className='w-100 mb-5 rounded-top'/>
                  <h5 className="mb-5 px-3">{service.title}</h5>
                  <button className='btn btn-primary rounded-1'>{service.fasilitas}</button>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>

      <div className="testimoinal py-5">
        <Container>
          <Row>
            <Col>
            <h1 className="text-center fw-bold my-5">Testimoni</h1>
            </Col>
          </Row>
          <Row>
          <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dataSwiper.map((data) => {
          return (
            <SwiperSlide key={data.id} className="shadow-sm">
              <p className="desc">{data.desc}</p>
              <div className="people">
                <img src={data.image} alt="" />
                <div>
                  <h5 className="mb-1">{data.name}</h5>
                  <p className="m-0 fw-bold">{data.skill}</p>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default ServicesPage;
