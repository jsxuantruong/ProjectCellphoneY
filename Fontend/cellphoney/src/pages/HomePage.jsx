import React from 'react'
import Main from "../Components/Main";
import MenuTop from "../Components/MenuTop";
import Navbars from '../Components/Navbars';
import Footer from '../Components/Footer';

function HomePage() {
  return (
  <div>
    <Navbars></Navbars>
    <MenuTop></MenuTop>
    <Main></Main>
    <Footer></Footer>
  </div>
  )
}

export default HomePage