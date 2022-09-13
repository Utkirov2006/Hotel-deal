import React from 'react';

import "./cards.css"

import home from "../../img/Home.png"
const Cards = () => {
      return (
            <div className="cards w-100 ">
                  <h1 className="mt-5 pt-5 text-center">Check Availability</h1>

                  <li className="mb-5 text-center list-unstyled">It is a long established fact that a reader will be distracted by the readable content of a page.</li>



                  <div className="cards-main d-block d-xl-flex">
                        <div className="cards-left">
                              <img src={home} className="w-100"/>
                        </div>

                        <div className="cards-right p-5">
                              <form>
                                    <div className="form-group">
                                          <label> CHECK-IN</label>
                                          <input type="date" className="form-control mb-3" aria-describedby="emailHelp" />
                                    </div>

                                    <div className="form-group">
                                          <label> CHECK-OUT</label>
                                          <input type="date" className="form-control" />
                                    </div>
                                    {/* <div className="form-check">
                                          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                          <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                    </div> */}

                                    <label className="mt-3" for="exampleCheckcars">GUESTS:</label>

                                    <select id="cars" className="form-select" aria-label="Default select example">
                                          <option label="1 Room">1 Room</option>
                                          <option label="2 Room">2 Room</option>
                                          <option label="3 Room">3 Room</option>
                                          <option label="4 Room">4 Room</option>


                                    </select>

                                    <button type="button" className="btn btn-primary btn-lg btn-block w-100 my-4">Block level button</button>
                                
                              </form>
                        </div>
                  </div>
            </div>
      );
};

export default Cards;