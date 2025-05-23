
import { GiCheckMark } from "react-icons/gi";
import { CgQuote } from "react-icons/cg";

interface Testimonial {
  name: string,
  image: string
}

const RenderTestimonial: Testimonial[] = [
  {
    name: "Rogers White",
    image: "/testimonial-1.png"
  },
  {
    name: "Mike Hardson",
    image: "/testimonial-3.png"
  },
  {
    name: "Christine Eve",
    image: "/testimonial-2.png"
  },

]

export default function RenderTestimonials() {
  return (

    <div className="relative flex items-center justify-between p-32 mb-28">
      <div className="w-1/2 -mr-32">
        <p className="text-green-600 font-bold mb-4">Staffing Partners</p>
        <h2 className="text-5xl font-bold leading-16 tracking-tight mb-8">We’re Here to Solve Recruitment Using Technology</h2>
      </div>

      <div className="flex flex-col items-center justify-center space-y-4 w-[215px] h-[245px] border-2 border-gray-400/20">
        <span className="text-green-600 text-5xl"><GiCheckMark /></span>
        <span className="text-5xl">2887</span>
        <span className="text-gray-500">Happy Customers</span>
      </div>

      <div className="flex flex-col w-1/3">
        <p className="text-gray-500">There are many variations passages of lorem ipsum but the maj alteration in some form, by rando mis words is noted.</p>
        <span className="mt-8 mb-2">Stuffing</span>
        <div className="bg-green-600 h-2 mb-6"></div>
        <span>Recruitment</span>
        <div className="bg-green-600 h-2 mt-2"></div>
      </div>


      <div className="absolute -bottom-95 grid grid-cols-3 gap-6 justify-items-center w-5/6">
        {RenderTestimonial.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center shadow-lg bg-white text-center border-t-10 border-green-600 space-y-8 px-12 h-[404px] text-black">
            <span className="text-white bg-green-600 p-2 text-5xl"><CgQuote /></span>
            <p className="text-xl italic text-gray-500 leading-9">This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.</p>
            <span className="font-bold">{item.name}</span>
            <img className="absolute -bottom-12" src={item.image} alt="headshot" />
          </div>
        ))}
  
      </div>

    </div>

  )
}