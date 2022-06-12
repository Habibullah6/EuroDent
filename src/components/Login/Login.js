import { BsGoogle } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import loginBanner from '../../images/bg3.jpg';
import './Login.css';
const Login = () => {
    return (
        <div>
            <div className="container">
                <div className="row m-5 no-gutters shadow-lg rounded">
                    <div className="col-md-6 d-none d-md-block p-2">
                        <img src={loginBanner} className="img-fluid w-100 h-100" alt=''/>
                    </div>
                    <div className="col-md-6 bg-white p-3">
                        <h3 className="pb-3">Login Form</h3>
                        <div className="form-style">
                            <form>
                             
                                <div className="form-group pb-3">
                                    <input type="email" placeholder="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="form-group pb-3">
                                    <input type="password" placeholder="Password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                
                                <div className="pb-2">
                                    <button type="submit" className="btn btn-dark w-100 font-weight-bold mt-2"> <FaLongArrowAltRight/> Submit</button>
                                </div>
                            </form>
                            <div className="sideline">OR</div>
                            <div>
                                <button type="submit" className="btn btn-primary w-100 font-weight-bold mt-2"> <BsGoogle/> Login With Google</button>
                            </div>
                            <div className="pt-4 text-center">
                                <span>New users in this website? </span> 
                                <NavLink to='/register'> 
                                      Please Register
                                </NavLink>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;