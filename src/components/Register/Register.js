import { NavLink } from 'react-router-dom';
import picture from '../../images/doc_team.jpg';
const Register = () => {
    return (
        <div>
            <section style={{ "backgroundColor": '#eee' }}>
                <div className="p-5 h-75">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ "borderRadius": "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form htmlform='' className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">

                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="form3Example1c" className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">

                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="form3Example3c" className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">

                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4c" className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    </div>
                                                </div>

                                                <div>
                                                    <button type="button" className="btn btn-primary btn-lg">Register</button>
                                                </div>
                                                <div className='mt-3'>
                                                    <span>already register?</span> <NavLink to='/Login'>Login</NavLink>
                                                </div>
                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src={picture}
                                                className="img-fluid" alt="" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;