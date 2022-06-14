import Carousel from 'react-bootstrap/Carousel';
import { FiArrowRightCircle, FiPhoneForwarded } from "react-icons/fi";
import { GrUserExpert } from "react-icons/gr";
import { NavLink } from 'react-router-dom';
import bannerTwo from '../../images/dental-equipment.png';
import bannerOne from '../../images/doc_team.jpg';
import './Banner.css';


const Banner = () => {
  return (
    <div className='bg-secondary'>
      
      <Carousel controls={false}>
        <Carousel.Item interval={1000}>
          <div className="row p-3">
            <div className="col">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-lg-5">
                  <div className='text-start'>
                    <img
                      className="img-fluid w-100"
                      src={bannerOne}
                      alt="First slide"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className='text-start text-white border border-3 border-white p-5 rounded'>
                    <h1 className='fs-1 text-justify'>Best Dental clinic in Dhaka city with high professional doctors</h1>
                    <p className='text-justify'>General dentistry is important to maintaining the health of your smile as well as your overall health. Unaddressed tooth decay or gum disease can lead to infections and other conditions that can put your entire body at risk for health issues.</p>
                   <NavLink to='*'> <button className='btn btn-secondary border border-2 border-white'>Book Appointment Here <FiArrowRightCircle/> </button></NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Carousel.Item>
        <Carousel.Item interval={500}>
          <div className="row p-3">
            <div className="col">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="col-lg-7">
                  <div className='text-start text-white border border-3 border-white p-5 rounded'>
                    <h1 className='fs-1 text-justify'>High quality of medical services with advanced medical technologies</h1>
                    <p className='text-justify'>all specialists have extensive practical experience and regularly training courses in educational centers of the world.</p>
                    <NavLink to='*'>
                    <button className='btn btn-secondary border border-2 border-white'>Book Appointment <FiArrowRightCircle/> </button>
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-5">
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

      <div className=' p-5 bg-primary'>
        <div className="row">
          <div className="col">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-lg-6 col-md-6 col-12  fs-4 fw-bold text-white ">
                 <p> <span className='fs-1'><GrUserExpert/></span> All specialists have extensive practical experience and regularly training courses in educational centers of the world.</p>
              </div>
              <div className="col-lg-6 col-md-6 col-12  text-end">
                <h1 className='text-white'> <FiPhoneForwarded/> +8801715000902</h1>
                <NavLink to='*'>
                {/* <button className=''>Booking now<FiArrowRightCircle/> </button> */}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    


);
};

export default Banner;