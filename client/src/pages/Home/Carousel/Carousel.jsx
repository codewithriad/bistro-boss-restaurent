import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../../src/assets/home/01.jpg';
import img2 from '../../../../src/assets/home/02.jpg';
import img3 from '../../../../src/assets/home/03.png';
import img4 from '../../../../src/assets/home/04.jpg';
import img5 from '../../../../src/assets/home/05.png';
import img6 from '../../../../src/assets/home/06.png';

const Carousell = () => {
    return (
        <>
            <Carousel>
                <div>
                    <img src={img1} alt='food-carousel' />
                </div>
                <div>
                    <img src={img2} alt='food-carousel' />
                </div>
                <div>
                    <img src={img3} alt='food-carousel' />
                </div>
                <div>
                    <img src={img4} alt='food-carousel' />
                </div>
                <div>
                    <img src={img5} alt='food-carousel' />
                </div>
                <div>
                    <img src={img6} alt='food-carousel' />
                </div>

            </Carousel>
        </>
    )
}

export default Carousell