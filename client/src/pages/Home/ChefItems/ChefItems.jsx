
import img from '../../../assets/home/slide1.jpg';
import TitleName from '../../../Components/shared/TitleName/TitleName';

const ChefItems = () => {
    return (
        <section>
            <TitleName heading={"Cheff Recommends"} subHeading={"Should Try"} />

            <div className="grid grid-cols-3 gap-4 my-32">

                {/* card 1 */}

                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            className='w-full h-[300px]'
                            src={img}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-3xl font-medium text-center">Caser Salad</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">ADD TO CARD</button>
                        </div>
                    </div>
                </div>

                {/* card 2 */}

                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            className='w-full h-[300px]'
                            src={img}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-3xl font-medium text-center">Caser Salad</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">ADD TO CARD</button>
                        </div>
                    </div>
                </div>

                {/* card 3 */}

                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            className='w-full h-[300px]'
                            src={img}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="text-3xl font-medium text-center">Caser Salad</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">ADD TO CARD</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ChefItems