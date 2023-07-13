import { Container, Row, Col } from "react-bootstrap";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Home() {
    return (
        <div>
          <div className="home-banner-container">
            <Col className="home-banner-left">
          
            </Col>
            <Col className="home-banner-right">
              <div className="cta-box box-1">
                <h2>upper/long row</h2>
                <span>lorem ipsum lorem ipsum lorem ipsum</span>
                <a className="banner-cta-btn">Get A Quote</a>
              </div>
              <div className="cta-box-cols">
                <Col className="cta-box box-2">
                  <h3>lower col 1</h3>
                  <span>lorem ipsum lorem ipsum lorem ipsum</span>
                  <a className="banner-cta-btn">Learn More</a>
                </Col>
                <Col className="cta-box box-3">
                  <h3>lower col 1</h3>
                  <span>lorem ipsum lorem ipsum lorem ipsum</span>
                  <a className="banner-cta-btn">Learn More</a>
                </Col>
              </div>
            </Col>
          </div>
          <div className="home-container">
          <Container>
              <h2>Company Highlights</h2>
              <Row className="heagon-row">
                  <Col className="hexagon-1">
                    <div className="hexagon slide-in-hexagon1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                        <span>Box Title 4</span>
                    </div>
                  </Col>
                  <Col className="hexagon-2">
                    <div className="hexagon slide-in-hexagon1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                        <span>Box Title 4</span>
                    </div>
                  </Col>
                  <Col className="hexagon-3">
                    <div className="hexagon slide-in-hexagon1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                        <span>Box Title 4</span>
                    </div>
                  </Col>
                  <Col className="hexagon-4">
                    <div className="hexagon slide-in-hexagon1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
                      <span>Box Title 4</span>
                    </div>
                  </Col>
              </Row>
          </Container>
          </div>
          <div className="home-container about-container">
          <Container>
              <Row>
                  <Col className="reviews-title-column" md={4}>
                      <h3>About title here</h3>
                      <span>date founded/location</span>
                  </Col>
                  <Col md={8}>
                  <span>Short paragraph about the company and operations goes here Short paragraph about the company and operations goes here
                      Short paragraph about the company and operations goes hereShort paragraph about the company and operations goes here
                      </span>
                  </Col>
              </Row>
          </Container>
          </div>
          <div className="home-container reviews">
          <Container>
              <Row>
                  <Col className="reviews-title-column" md={4}>
                      <h3>reviews title here</h3>
                      <span>"best customer review here"</span>
                      <a className="banner-cta-btn">Get A Quote</a>
                  </Col>
                  <Col md={8}>
                  <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
                  </Col>
              </Row>
          </Container>
          </div>
          <div className="dumpster-rental">
            <Container>
              <Row>
                <Col md={6}>
                <h3>Rolloff Dumpster Dumpster Rental</h3>
                <span>15 and 30 Yard Dumpsters Available</span>
                </Col>
                <Col md={6}>
                 <a className="banner-cta-btn">Book Yours Now</a>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
    )
}