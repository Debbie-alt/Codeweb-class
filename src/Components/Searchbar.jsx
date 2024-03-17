const Searchbar=({setQuery})=>{
      return(
            <>
            <section className="flex container mx-auto px-4 justify-center items-center mt-10">
                  <div className="w-11/12 md:w-8/12 lg:w-6/12 ">
                        <input type="text" className="w-full py-1.5 pr-32 text-black bg-white shadow-xl focus:outline-green-800  border-gray pl-6 rounded-lg " placeholder="Search Movie" onChange={(e)=>{
                              setQuery(e.target.value)
                        }} />
                        <button className="absolute px-6 py-1.5 mt[2.5px] text-white bg-green-700 rounded-lg -ml-[104.5px]">Search</button>
                  </div>
            </section>
            
            </>
      )
}
export default Searchbar;