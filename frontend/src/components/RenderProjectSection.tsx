import RenderProjects from "./RenderProjects"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";


export default function RenderProjectSection() {
  return(
    <div className="bg-[#f6f6f6] text-black w-full">
      <div className="flex mt-56 mx-24 justify-between w-3/4">
        <div>
          <p className="text-green-600 font-bold mb-4">Staffing Recent Closed Projects</p>
          <h2 className="text-5xl font-bold leading-16 tracking-tight mb-8">Latest From Our Project</h2>
        </div>

        <div>
          <button className="bg-white p-6 mr-2 rounded-full text-xl"><FaArrowLeft /></button>
          <button className="bg-white p-6 rounded-full text-xl"><FaArrowRight /></button>
        </div>
      </div>

      <RenderProjects />

      <div className="flex flex-col items-center mt-24">
        <p className="text-green-600 font-bold mb-4">Staffing Recent Closed Projects</p>
        <h2 className="text-5xl font-bold leading-16 tracking-tight mb-8">We Choose a Recvite</h2>

        <div className="grid grid-cols-3 w-3/4">
          <div className="flex flex-col items-center text-center space-y-3">
            <img className="w-[222px] h-[192px]" src="/shape-4.png" alt="A round shape" />
            <h4 className="text-xl font-bold">Consult with Team</h4>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-3">
            <img className="w-[222px] h-[192px]" src="/shape-4.png" alt="A round shape" />
            <h4 className="text-xl font-bold">Make a Schedule</h4>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-3">
            <img className="w-[222px] h-[192px]" src="/shape-4.png" alt="A round shape" />
            <h4 className="text-xl font-bold">Hire & Enjoy</h4>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between bg-green-600 w-full p-28 text-white mt-24">
        <h2 className="text-5xl font-bold leading-16 tracking-tight mb-8">Hire Your Next Candidate On Recvite</h2>
        <button className="px-16 h-[70px] text-sm font-bold bg-black">
          DISCOVER MORE
        </button>
      </div>
    </div>
  )
}