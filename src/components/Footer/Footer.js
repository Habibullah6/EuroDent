import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { TiSocialLinkedinCircular, TiSocialYoutubeCircular } from "react-icons/ti";
const Footer = () => {
    return (
        <div className='bg-dark text-primary p-5'>
            <div className="row">
                <div className="col">
                    <div className="row d-flex justify-content-evenly align-items-center">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="d-flex  border border-3 border-primary pb-1 px-1 rounded-pill justify-content-center align-items-center text-white">
                                <span className="me-4 fs-2"> <BsFacebook/>  </span>
                                <span className="me-4 fs-2"> <AiFillTwitterCircle/></span>
                                <span className="me-4 fs-1"><TiSocialLinkedinCircular /></span>
                                <span className="fs-1"> <TiSocialYoutubeCircular /> </span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12  text-start">
                           <h4>Services</h4>
                            <ul className="list-unstyled">
                            <li>Periodontics</li>
                            <li>Orthodontics</li>
                            <li>Esthetic dentistry</li>
                            <li>Implant dentistry</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12  text-start">
                            <h4>Specialists</h4>
                            <ul className="list-unstyled">
                            <li>Cardiology</li>
                            <li>Therapist</li>
                            <li>Surgery</li>
                            <li>Pediatrics</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className=" text-start">
                            <h4>Contacts</h4>
                            <p>Address:  No 131 #House No: 60/B #Road, Gulshan, Dhaka City 1000 Bangladesh,Phone: +8801712000902 E-mail: info@eurodent.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;