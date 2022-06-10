import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router-dom';
import bannerOne from '../../images/banner1.png';
import bannerTwo from '../../images/banner2.png';
import './Banner.css';
const Banner = () => {
  return (
    <>
      <Carousel className='bg-secondary' controls={false}>
        <Carousel.Item interval={1000}>
          <div className="row p-3">
            <div className="col">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-lg-4">
                  <div className='text-start'>
                    <img
                      className="img-fluid w-100"
                      src={bannerOne}
                      alt="First slide"
                    />
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className='text-start text-white border border-3 border-white p-5 rounded'>
                    <h1 className='fs-1 text-justify'>Best Dental clinic in Dhaka city with high professional doctors</h1>
                    <p className='text-justify'>General dentistry is important to maintaining the health of your smile as well as your overall health. Unaddressed tooth decay or gum disease can lead to infections and other conditions that can put your entire body at risk for health issues.</p>
                    <button className='btn btn-primary border border-2 border-white'>Book Appointment Here</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div className="row p-3">
            <div className="col">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-8">
                  <div className='text-start text-white border border-3 border-white p-5 rounded'>
                    <h1 className='fs-1 text-justify'>High quality of medical services with advanced medical technologies</h1>
                    <p className='text-justify'>all specialists have extensive practical experience and regularly training courses in educational centers of the world.</p>
                    <button className='btn btn-primary border border-2 border-white'>Book Appointment Now with 10% cashback</button>
                  </div>
                </div>
                <div className="col-lg-4">
                  <img
                    className="img-fluid w-100"
                    src={bannerTwo}
                    alt="First slide"
                  />
                </div>
              </div>
            </div>
          </div>

        </Carousel.Item>
      </Carousel>

      <div className='bg-primary p-5'>
        <div className="row">
          <div className="col">
            <div className="row d-flex justify-content-around align-items-center">
              <div className="col-lg-6 text-start text-white">
                 <p className='fs-4'>All specialists have extensive practical experience and regularly training courses in educational centers of the world.</p>
              </div>
              <div className="col-lg-6">
                <h1 className='text-white'>+8801715009002</h1>
                <NavLink to='*'>
                <button className='btn btn-secondary border border-2 border-white'>Booking Appointment and get 10% cashback</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>


  );
};

export default Banner;