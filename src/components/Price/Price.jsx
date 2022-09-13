// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper";

import './price.css'

import Room1 from "../../img/Room1.png";
import Room2 from "../../img/Room2.png";
import Room3 from "../../img/Room3.png";

const Price = () => {
      return (
            <div className="price">

                  <h1 className="mt-5 pt-3 text-center">Our Most Populer Room</h1>

                  <li className="list-unstyled text-center py-2">It is a long established fact that a reader will be distracted <br /> by the readable content of a page.</li>
                  <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                              clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                  >
                        <SwiperSlide>
                              <img src={Room1} />
                              <h2 className="px-xl-4 px-0 py-2">Deluxe Contrast Room</h2>

                              <div className="d-xl-flex d-block justify-content-evenly ">
                                    <span><i class="bi bi-aspect-ratio"> </i><span>52 sqm</span></span><br />
                                    <span><i class="fa-solid fa-bed"> </i><span>2 Bed</span></span><br />
                                    <span><i class="fa-solid fa-bath"></i> <span>1 Bathroom</span></span><br />

                              </div>
                              <h3 className="px-xl-4 px-0 py-2 ">$200 / Night</h3>
                        </SwiperSlide>


                        <SwiperSlide>
                              <img src={Room2} />

                              <h2 className="px-xl-4 px-0 py-2">Luxery Twin Room</h2>

                              <div className="d-xl-flex d-block justify-content-evenly ">
                                    <span><i class="bi bi-aspect-ratio"> </i><span>52 sqm</span></span><br />
                                    <span><i class="fa-solid fa-bed"> </i><span>2 Bed</span></span><br />
                                    <span><i class="fa-solid fa-bath"></i> <span>1 Bathroom</span></span><br />

                              </div>
                              <h3 className="px-xl-4 px-0 py-2 ">$250 / Night</h3>
                        </SwiperSlide>


                        <SwiperSlide>
                              <img src={Room3} />

                              <h2 className="px-xl-4 px-0 py-2">Single Contrast Room</h2>

                              <div className="d-xl-flex d-block justify-content-evenly ">
                                    <span><i class="bi bi-aspect-ratio"> </i><span>52 sqm</span></span><br />
                                    <span><i class="fa-solid fa-bed"> </i><span>2 Bed</span></span><br />
                                    <span><i class="fa-solid fa-bath"></i> <span>1 Bathroom</span></span><br />

                              </div>
                              <h3 className="px-xl-4 px-0 py-2 ">$280 / Night</h3>

                        </SwiperSlide>

                        <SwiperSlide>
                              <img src={Room1} />
                              <h2 className="px-xl-4 px-0 py-2">Deluxe Contrast Room</h2>

                              <div className="d-xl-flex d-block justify-content-evenly ">
                                    <span><i class="bi bi-aspect-ratio"> </i><span>52 sqm</span></span><br />
                                    <span><i class="fa-solid fa-bed"> </i><span>2 Bed</span></span><br />
                                    <span><i class="fa-solid fa-bath"></i> <span>1 Bathroom</span></span><br />

                              </div>
                              <h3 className="px-xl-4 px-0 py-2 ">$200 / Night</h3>
                        </SwiperSlide>


                        <SwiperSlide>
                              <img src={Room2} />

                              <h2 className="px-xl-4 px-0 py-2">Luxery Twin Room</h2>

                              <div className="d-xl-flex d-block justify-content-evenly ">
                                    <span><i class="bi bi-aspect-ratio"> </i><span>52 sqm</span></span><br />
                                    <span><i class="fa-solid fa-bed"> </i><span>2 Bed</span></span><br />
                                    <span><i class="fa-solid fa-bath"></i> <span>1 Bathroom</span></span><br />

                              </div>
                              <h3 className="px-xl-4 px-0 py-2 ">$250 / Night</h3>
                        </SwiperSlide>


                        <SwiperSlide>
                              <img src={Room3} />

                              <h2 className="px-xl-4 px-0 py-2">Single Contrast Room</h2>

                              <div className="d-xl-flex d-block justify-content-evenly ">
                                    <span><i class="bi bi-aspect-ratio"> </i><span>52 sqm</span></span><br />
                                    <span><i class="fa-solid fa-bed"> </i><span>2 Bed</span></span><br />
                                    <span><i class="fa-solid fa-bath"></i> <span>1 Bathroom</span></span><br />

                              </div>
                              <h3 className="px-xl-4 px-0 py-2 ">$280 / Night</h3>

                        </SwiperSlide>

                  </Swiper>
            </div>
      );
};

export default Price;