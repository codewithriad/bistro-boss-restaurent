import ContactNumber from "../../../Components/ContactNumber"
import HomeRec from "../../../Components/shared/HomeRec/HomeRec"
import Carousell from "../Carousel/Carousel"
import Category from "../Category/Category"
import ChefItems from "../ChefItems/ChefItems"
import Featured from "../Featured/Featured"
import Menu from "../Menu/Menu"
import Testimonials from "../Testimonials/Testimonials"


const Home = () => {
  return (
    <>
    
        <Carousell/>
        <Category/>
        <HomeRec/>
        <Menu/>
        <ContactNumber/>
        <ChefItems/>
        <Featured/>
        <Testimonials/>
    </>
  )
}

export default Home            