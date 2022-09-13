import React from 'react';

const CustomersMain = (props) => {
      return (
            <div className="customers-main  mt-xl-2 mt-4">

                  <div className="customers-right m-4">

                        <img className=' bg-primary rounded-circle mt-xl-0 mt-4' src={props.img} />
                        <h3>{props.name}</h3>
                        <li className='list-unstyled'>{props.job}</li>
                        <li className='list-unstyled py-2'>{props.children}</li>
                  </div>
            </div>
      );
};

export default CustomersMain;