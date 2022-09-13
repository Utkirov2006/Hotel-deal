import React from 'react';


const CityMain = (props) => {
      return ( 
            <div className="city-main justify-content-between">
                  <img className='w-100 ' src={props.img} />
                  <p>{props.title}</p>
                  <p>{props.children}</p>

            </div>
      );
};

export default CityMain;