
import TitleName from '../../../Components/shared/TitleName/TitleName'
import Img1 from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {

  return (
    <section>



      <div className="featured flex justify-around items-center px-12 gap-12 bg-fixed mb-10">
        <div>
          <img className='w-[800px] h-[400px]' src={Img1} alt="featured-image" />
        </div>
        <div className='text-white'>
          <TitleName heading="From Our Menu" subHeading="Check It Out" />
          <h3 className='text-5xl font-medium'>June 23, 2024<br />
            Where can I get some?
          </h3>
          <p className='text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
          </p>
        </div>
      </div>
    </section>

  )
}

export default Featured