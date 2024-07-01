import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';


// import images
import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import TitleName from '../../../Components/shared/TitleName/TitleName';

const Category = () => {
    return (
        <section>
           <TitleName heading="Order Online" subHeading="From 11:00am to 10:00pm" />
            
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="category-image" />
                    <h3 className='uppercase text-white text-4xl -mt-16 pb-16 install swiper ml-20'>SALADS</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="category-image" />
                    <h3 className='uppercase text-white text-4xl -mt-16 pb-16 install swiper ml-20'>SOUPS</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="category-image" />
                    <h3 className='uppercase text-white text-4xl -mt-16 pb-16 install swiper ml-20'>PIZZAS</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="category-image" />
                    <h3 className='uppercase text-white text-4xl -mt-16 pb-16 install swiper ml-20'>DESSERTS</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="category-image" />
                    <h3 className='uppercase text-white text-4xl -mt-16 pb-16 install swiper ml-20'>SALADS</h3>
                </SwiperSlide>
            </Swiper>
        </section>

    )
}

export default Category