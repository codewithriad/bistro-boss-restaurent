/* eslint-disable react/prop-types */


const Button = ({ButtonText}) => {
  return (
    <div>
         <button className="text-black bg-transparent border-black border-b-2 mb-4 pb-2 hover:rounded-b-md font-medium text-lg transition-all">{ButtonText}</button>
    </div>
  )
}

export default Button