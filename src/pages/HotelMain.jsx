import React from 'react';

const HotelMain = (props) => {
      return (
            <div className="hotel-main">

                  <img src={props.img} />

                  <div className="hotel-right p-3">
                        <h3>{props.title}</h3>
                        <li className="list-unstyled w-75">{props.about}</li>

                        <a href='#' className='list-unstyled'>Read More <i class="fa fa-arrow-right" aria-hidden="true"></i> </a>
                  </div>
            </div>
      );
};

export default HotelMain;