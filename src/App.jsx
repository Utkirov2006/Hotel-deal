import React from 'react';
import Cards from './components/Cards.jsx/Cards';
import City from './components/City/City';
import Customers from './components/Customers/Customers';
import History from './components/History/History';
import HotelBlog from './components/HotelBlog/HotelBlog';
import MainContent from './components/MainContent/MainContent';
import Navbar from './components/Navbar/Navbar';
import Price from './components/Price/Price';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <>

      <div className="container">
        <div className="row">
          <Navbar />
          <MainContent />
          <Cards />
          <Price />
          <City />
          <History />
          <Customers />
          <HotelBlog />
          <SignUp/>
          <Footer/>

        </div>
      </div>


    </>
  );
};

export default App;