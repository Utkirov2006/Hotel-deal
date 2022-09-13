import React from 'react';

import './signUp.css'
// import SignUpImg from "../../img/SignUpImg.png";
const SignUp = () => {
      return (
            <div className="sign-up d-block text-center col-xl-10 col-12  mx-auto m-4">
                  <h2 className="pt-5 pb-2 text-center">Signup to receive news and updates from our hotel.</h2>
                  <p className="pb-2 text-white">Stay in Touch</p>
                  {/* <img src={SignUpImg} /> */}

                  <div className="input-group py-4 w-50  mx-auto">
                        <input type="text" className="form-control " aria-label="Text input with segmented dropdown button" placeholder='Enter Your Email Address' />
                        <button type="button" className="btn btn-outline-secondary">subscribe</button>


                  </div>
            </div>

      );
};

export default SignUp;