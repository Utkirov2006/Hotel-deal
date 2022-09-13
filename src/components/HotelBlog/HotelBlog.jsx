import React from 'react';
import HotelMain from '../../pages/HotelMain';

import HotelBlogImg1 from '../../img/HotelsBlogImg1.png';
import HotelBlogImg2 from '../../img/HotelsBlogImg2.png';
import HotelBlogImg3 from '../../img/HotelsBlogImg3.png';
const HotelBlog = () => {
      return (
            <div className="hotel-blog p-xl-4 px-0">

                  <h2 className="text-center my-4">HOTEL BLOG</h2>


                  <div className="hotel_left d-xl-flex d-block justify-content-between p-3">
                        <HotelMain img={HotelBlogImg1} title="How To Travel With Map" about="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />

                        <HotelMain img={HotelBlogImg2} title="Single Contrast Room" about="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                        
                        <HotelMain img={HotelBlogImg3} title="Luxery Twin Room" about="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                  </div>
            </div>
      );
};

export default HotelBlog;