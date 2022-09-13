import React from 'react';


import CustomersImg1 from '../../img/CustomersImg1.png';
import CustomersImg2 from '../../img/CustomersImg2.png';
import CustomersImg3 from '../../img/CustomersImg3.png';
import CustomersMain from '../../pages/CustomersMain';
const Customers = () => {
      return (
            <div className="customers">

                  <h2 className="px-xl-4 px-0 py-2">Our Happy Customers</h2>
                  <li className="list-unstyled px-xl-4 px-0">Know about our clients, we are a woldwide corporate brand</li>

                  <div className="custtomers_left d-xl-flex d-block justify-content-between p-xl-4 p-0">

                        <CustomersMain img={CustomersImg1} name="Wade Warren" job="Louis Vuitton">
                              Necessary to deliver white glove,
                              fully managed campaigns that surpass
                              industry benchmarks.Take your career
                              to next level.

                        </CustomersMain>
                        <CustomersMain img={CustomersImg2} name="Albert Florise" job="Nintendo">
                              Necessary to deliver white glove,
                              fully managed campaigns that surpass
                              industry benchmarks.Take your career
                              to next level.

                        </CustomersMain>
                        <CustomersMain img={CustomersImg3} name="Jenny Wilson" job="Bank of America" >
                              Necessary to deliver white glove,
                              fully managed campaigns that surpass
                              industry benchmarks.Take your career
                              to next level.

                        </CustomersMain>
                  </div>


            </div>
      );
};

export default Customers;