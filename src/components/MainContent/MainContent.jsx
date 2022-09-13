import React from 'react';

import './maincontent.css'


import Hotel from '../../img/Hotel.png'

const MainContent = () => {
      return (
            <div className="main-content d-block d-xl-flex">

                  <div className="main-left">

                        <h1>Discover a hotel
                              that defies a new
                              dimension of luxury.</h1>

                        <li className="li list-unstyled">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</li>

                        <button className="btn2 my-2 text-white"> Get started</button>


                  </div>


                  <div className="main-right w-50 d-xl-block d-none">
                        <img className='w-100' src={Hotel} />

                  </div>

            </div >
      );
};

export default MainContent;