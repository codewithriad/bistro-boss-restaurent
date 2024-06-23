import menuBg from '../../../assets/menu/menu-bg.png'

const Menu = () => {
    return (
        <>
            <div className='flex justify-between items-center flex-row gap-4'>
                <div>
                    <div className='flex justify-between items-center gap-4 mb-6'>
                        <img className='grid-cols-1 rounded-tr-full rounded-bl-full rounded-br-full w-[118px] h-[104px]' src={menuBg} alt="" />
                        <div className='grid-cols-2'>
                            <h4>ROAST dUCK bREAST--------</h4>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                        <p className='grid-cols-1 text-[#BB8506] text-xl font-medium'>$14.5</p>
                    </div>
                    <div className='flex justify-between items-center gap-4 mb-6'>
                        <img className='grid-cols-1 rounded-tr-full rounded-bl-full rounded-br-full w-[118px] h-[104px]' src={menuBg} alt="" />
                        <div className='grid-cols-2'>
                            <h4>ESCALOPE DE VEAU ---------- </h4>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce.</p>
                        </div>
                        <p className='grid-cols-1 text-[#BB8506] text-xl font-medium'>$14.5</p>
                    </div>
                    <div className='flex justify-between items-center gap-4 mb-6'>
                        <img className='grid-cols-1 rounded-tr-full rounded-bl-full rounded-br-full w-[118px] h-[104px]' src={menuBg} alt="" />
                        <div className='grid-cols-2'>
                            <h4>FISH PARMENTIER ------------------</h4>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                        <p className='grid-cols-1 text-[#BB8506] text-xl font-medium'>$14.5</p>
                    </div>
                </div>

                <div>
                    <div className='flex justify-between items-center gap-4 mb-6'>
                        <img className='grid-cols-1 rounded-tr-full rounded-bl-full rounded-br-full w-[118px] h-[104px]' src={menuBg} alt="" />
                        <div className='grid-cols-2'>
                            <h4>ROAST dUCK bREAST--------</h4>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                        <p className='grid-cols-1 text-[#BB8506] text-xl font-medium'>$14.5</p>
                    </div>
                    <div className='flex justify-between items-center gap-4 mb-6'>
                        <img className='grid-cols-1 rounded-tr-full rounded-bl-full rounded-br-full w-[118px] h-[104px]' src={menuBg} alt="" />
                        <div className='grid-cols-2'>
                            <h4>ESCALOPE DE VEAU ---------- </h4>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce.</p>
                        </div>
                        <p className='grid-cols-1 text-[#BB8506] text-xl font-medium'>$14.5</p>
                    </div>
                    <div className='flex justify-between items-center gap-4 mb-6'>
                        <img className='grid-cols-1 rounded-tr-full rounded-bl-full rounded-br-full w-[118px] h-[104px]' src={menuBg} alt="" />
                        <div className='grid-cols-2'>
                            <h4>FISH PARMENTIER ------------------</h4>
                            <p>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                        </div>
                        <p className='grid-cols-1 text-[#BB8506] text-xl font-medium'>$14.5</p>
                    </div>
                </div>

            </div>
            <div className='flex justify-center items-center my-8'>
                <button className="text-black bg-transparent border-black border-b-2 mb-4 pb-2 hover:rounded-b-md font-medium text-lg transition-all">ORDER YOUR FAVOURITE FOODS</button>
            </div>
        </>



    )
}

export default Menu