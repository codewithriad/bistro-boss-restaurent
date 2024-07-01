


const TitleName = ({ heading, subHeading }) => {
    return (
        <div className="w-4/12 mx-auto text-center my-6">
            <p className="text-yellow-600 text-lg mb-4">--- {subHeading} ---</p>
            <h2 className="text-4xl uppercase border-b-4 border-t-4 py-6">{heading}</h2>

        </div>

    )
}

export default TitleName