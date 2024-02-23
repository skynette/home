import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [isBuy, setIsBuy] = useState(true)

  const handleBuy = () => {
    setIsBuy(true)
  }
  const handleRent = () => {
    setIsBuy(false)

  }

    const navigate = useNavigate();
   

    const [title, setTitle] = useState("");

    const handleChange = (e)=>{
        setTitle(e.target.value);
    }

    const handleSearchClick = ()=>{
        if(title.length > 0){
          navigate(`/search/${title}`);
        }
    }

    
      
    

  return (
    <div className="h-[95vh] flex flex-col justify-center items-center text-white gap-4">
      <div className="">
        <h1 className="text-3xl lg:text-5xl font-bold">What are you looking for</h1>
        <p className="text-center mt-4">Explore whatever</p>
      </div>

      {/* buy or rent */}
      <div className="flex gap-4">
        <div onClick={handleBuy} className={`relative cursor-pointer z-[10] ${isBuy ? 'bg-cred-500 text-body-300' : 'bg-body-300 text-body-600'}  px-6 py-3 rounded-md`}>
          <p>Buy</p>
          {isBuy && <div className="absolute bg-cred-500 bottom-[-1] left-[-1] h-6 w-6 border-1 rotate-45"></div>}
        </div>
        <div onClick={handleRent} className={`relative cursor-pointer z-[10] ${!isBuy ? 'bg-cred-500 text-body-300' : 'bg-body-300 text-body-600'}  px-6 py-3 rounded-md`}>
          <p>Rent</p>
          {!isBuy && <div className="absolute bg-cred-500 bottom-[-1] left-[-1] h-6 w-6 border-1 rotate-45"></div>}
        </div>
      </div>

      {/* search and filter inputs */}
      <div className="flex flex-col md:flex-row gap-1 items-center bg-body-300 p-1 rounded-md text-body-600 w-5/6 md:w-[50%] md:h-16 my-4">
        <input onChange={handleChange} type="text" name="title" placeholder="Title" className="w-full md:w-1/4 px-4 py-2 outline-none border border-gray-300 rounded-md" value={title}/>
        <div className="relative w-full md:w-1/4">
          <select name="category" className="border border-gray-300 rounded-md w-full py-2 px-4 outline-none">
            <option value="">All Categories</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
        <div name="locations" className="relative w-full md:w-1/4">
          <input type="text" placeholder="Location" className="border border-gray-300 rounded-md w-full py-2 px-4 outline-none" />
            
        </div>
        <button onClick={handleSearchClick} type="button" className="bg-cred-500 text-body-300 px-4 py-2 w-full md:w-1/4 hover:bg-opacity-80 rounded-lg">Apply</button>
      </div>


      <div className="flex flex-wrap md:flex-row gap-4 justify-center items-center w-5/6">
        <p className="text-sm font-semibold">Most searches</p>
        <p className="text-sm font-semibold border hover:cursor-pointer hover:text-body-600 hover:bg-body-300 border-white rounded-sm p-1">Beautiful</p>
        <p className="text-sm font-semibold border hover:cursor-pointer hover:text-body-600 hover:bg-body-300 border-white rounded-sm p-1">bars n Pubs</p>
        <p className="text-sm font-semibold border hover:cursor-pointer hover:text-body-600 hover:bg-body-300 border-white rounded-sm p-1">Hotels</p>
        <p className="text-sm font-semibold border hover:cursor-pointer hover:text-body-600 hover:bg-body-300 border-white rounded-sm p-1">Shopping</p>
      </div>

    </div>
  )
}

export default Hero