import React from 'react';
import CityMain from '../../pages/CityMain';

import './city.css'

import dreamcity from '../../img/dreamcity.webp';
import stroymarket from '../../img/stroymarket.webp';
import seoul from '../../img/seoul.webp';
import diamond from '../../img/diamond.webp';



const City = () => {
      return (
            <div className="city">

                  <h2 className="text-center mt-5 mb-4">Hotels</h2>


                  <div className="city_hotel d-block d-xl-flex flex-wrap justify-content-around">
                        <CityMain img={dreamcity} title="Dream City">
                              This is a longer card with supporting text below as a natural lead-in to additional <br /> content. This content is a little bit longer.
                        </CityMain>

                        <CityMain img={stroymarket} title="Stroy Market">
                              This is a longer card with supporting text below as a natural lead-in to additional <br /> content. This content is a little bit longer.
                        </CityMain>
                        <CityMain img={seoul} title="Seoul Mun">
                              This is a longer card with supporting text below as a natural lead-in to additional <br /> content. This content is a little bit longer.
                        </CityMain>
                        <CityMain img={diamond} title="Dimond Castle">
                              This is a longer card with supporting text below as a natural lead-in to additional <br /> content. This content is a little bit longer.
                        </CityMain>
                  </div>



            </div>
      );
};

export default City;