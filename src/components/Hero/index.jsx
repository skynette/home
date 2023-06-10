import DropdownSearch from "./DropDown"

const Hero = () => {
  return (
    <div className="h-[95vh] flex flex-col justify-center items-center text-white gap-4">
      <div className="">
        <h1 className="text-3xl lg:text-5xl font-bold">What are you looking for</h1>
        <p className="text-center mt-4">Explore whatever</p>
      </div>

      <div className="bg-body-500">
        {/* search n filter inputs */}
        <DropdownSearch />

      </div>

      <div className="flex gap-4 items-center">
        <p className="text-sm font-semibold">Most searches</p>
        <p className="text-sm font-semibold border border-white rounded-sm p-1">Beautiful</p>
        <p className="text-sm font-semibold border border-white rounded-sm p-1">bars n Pubs</p>
        <p className="text-sm font-semibold border border-white rounded-sm p-1">Shopping</p>
        <p className="text-sm font-semibold border border-white rounded-sm p-1">Hotels</p>
      </div>

    </div>
  )
}

export default Hero