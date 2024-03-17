import {BsFillCollectionPlayFill} from 'react-icons/bs'
const Hero=()=>{
      return(
            <div className="hero">
                  <section className="bg-primary rounded-b-2xl text-white py-8 ">
                        <div className="flex gap-10 flex-col px-5  container lg:flex-row">
                              <div className="flex flex-col   space-y-5 w-full lg:w-1/2">
                                    <p className="text-3xl lg:text-5xl leading-[35px] text-center leading lg:text-left font-semibold">
                                         <span className="text-green-800 ">Discover</span>  Thrilling Movies With us
                                    </p>
                                    <p className="opacity-75 lg:text-left text-center">
Embark on exhilarating adventures and pulse-pounding suspense as we uncover the most thrilling movies for your viewing pleasure. Join us and immerse yourself in a world where excitement knows no bounds.🔥</p>
                              </div>
                              <div className="w-24 h-24 mx-auto ld:w-1/2 lg:h-auto">
                              <p className=" text-8xl lg:text-[120px]  opacity-60"><BsFillCollectionPlayFill/></p>
                        </div>
                        </div>
                        
                  </section>
            </div>
      )
}
export default Hero;