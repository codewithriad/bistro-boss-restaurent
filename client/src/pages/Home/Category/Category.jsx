
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

// import images
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';

const Category = () => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-24"
        >
            <SwiperSlide>
                <img src={slide1} alt="category-image" />
                <h3 className='uppercase text-white text-4xl -mt-24 ml-20'>SALADS</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="category-image" />
                <h3 className='uppercase text-white text-4xl -mt-24 ml-20'>SOUPS</h3>

            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="category-image" />
                <h3 className='uppercase text-white text-4xl -mt-24 ml-20'>PIZZAS</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt="category-image" />
                <h3 className='uppercase text-white text-4xl -mt-24 ml-20'>DESSERTS</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide5} alt="category-image" />
                <h3 className='uppercase text-white text-4xl -mt-24 ml-20'>SALADS</h3>
            </SwiperSlide>
        </Swiper>
    )
}

export default Category