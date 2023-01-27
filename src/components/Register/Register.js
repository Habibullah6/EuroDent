import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../context/useAuth';
import { TabTitle } from '../../hooks/GeneralFunction';
import registerImg from '../../images/bg1.jpg';



const Register = () => {
    TabTitle('register page')
    const {handleEmailPasswordRegister,auth, updateProfile,handleEmailVerify, setUser} = useAuth();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value)
        
    }
    
    const handleEmailChange = (e) => {
        
        setEmail(e.target.value)
        
    }
    
    const handlePasswordChange = (e) => {
        
        setPassword(e.target.value)
       
    }
    
    const handleUserName = () => {
        
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }
    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (regEx.test(email)) {
          alert("Email is Valid");
        } else if (!regEx.test(email) && email !== "") {
          alert("Email is Not Valid");
        } else {
          alert("");
        }
      };

    const handleUsersEmailPasswordRegistration = (e) => {
        e.preventDefault()
        emailValidation()
        
        handleEmailPasswordRegister(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setUser(user)
            handleUserName()
            handleEmailVerify()
            console.log(user);
            
            // ...
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
          });
    }

    return (
        <div>
            <section style={{ "backgroundColor": '#eee' }}>
                <div className="p-5 h-75">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black ">
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form onSubmit={handleUsersEmailPasswordRegistration} htmlform='' className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">

                                                    <div className="form-outline flex-fill mb-0">
                                                        <input onBlur={handleNameChange} type="text" id="form3Example1c" className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">

                                                    <div className="form-outline flex-fill mb-0">
                                                        <input onBlur={handleEmailChange} type="email" id="form3Example3c" className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">

                                                    <div className="form-outline flex-fill mb-0">
                                                        <input onBlur={handlePasswordChange} type="password" id="form3Example4c" className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                    </div>
                                                </div>

                                                <div>
                                                    <button type="submit" className="btn btn-primary">Register</button>
                                                </div>
                                                <div className='mt-3'>
                                                    <span>already register?</span> <NavLink to='/Login'>Login</NavLink>
                                                </div>
                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src={registerImg}
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