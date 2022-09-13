import React from 'react';

import HistoryImg from '../../img/HistoryImg.png';
const History = () => {
      return (
            <div className="history">

                  <div className="history-main d-xl-flex d-block p-xl-4 px-0">
                        <div style={{background: '#e8f4f0'}} className="history_right col-xl-6 col-12 ">
                              <h1 className="p-4">Discover Our History</h1>

                              <li className='list-unstyled p-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</li>

                              <li className='list-unstyled p-4'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</li>

                              <li className='list-unstyled p-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</li>
                              <button style={{background:"#597193", borderRadius:"10px"}} className="p-2 my-2 mx-4 border-white text-white">Explore More</button>

                        </div>

                        <div className="col-xl-6 col-12">
                              <img className="w-100" src={HistoryImg} />
                        </div>
                  </div>

            </div>
      );
};

export default History;