import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { TiSocialLinkedinCircular, TiSocialYoutubeCircular } from "react-icons/ti";
const Footer = () => {
    return (
        <div className='bg-dark text-primary p-5'>
            <div className="row">
                <div className="col">
                    <div className="row d-flex justify-content-around align-items-center">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="d-flex  border border-3 border-primary pb-1 rounded-pill justify-content-center align-items-center text-white">
                                <span className="me-4 fs-2"> <BsFacebook/>  </span>
                                <span className="me-4 fs-2"> <AiFillTwitterCircle/></span>
                                <span className="me-4 fs-1"><TiSocialLinkedinCircular /></span>
                                <span className="fs-1"> <TiSocialYoutubeCircular /> </span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, velit?</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, velit?</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, velit?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;