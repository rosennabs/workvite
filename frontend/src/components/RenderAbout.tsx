import { AiOutlineFileSearch } from "react-icons/ai";


export default function RenderAbout() {
  return (
    <div className="flex py-[180px] bg-white w-full">

      {/* Icon */}
      <div className="flex flex-col items-center justify-center h-[200px] w-[180px] ml-2 space-y-4 text-6xl bg-green-600">
        <AiOutlineFileSearch />
        <span className="text-center font-semibold text-lg">Find Perfect Candidate</span>
      </div>

      {/* Images */}
      <div className="relative">
        <img className="h-[584px]" src="/about-1.jpg" alt="Image of workers" />
        <img className="absolute -right-4 -bottom-12 bg-white pt-4 pl-4 z-10 w-[350px] h-[331px]" src="/about-2.jpg" alt="Image of workers" />
        <div className="h-3 mt-6 bg-green-600"></div>

      </div>

      {/* Welcome to Agency paragraph */}
      <div className="text-black w-2/5 ml-14">
        <p className="text-green-600 font-bold mb-4">Welcome to Agency</p>
        <h2 className="text-5xl font-bold leading-16 tracking-tight mb-8">Best Quality Recruitment Staffing Agency</h2>
        <p className="text-gray-500 text-xl">Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lonm andhn.</p>

        <div className="flex mt-12 pb-12 border-b-[0.5px] border-gray-300/70">
          <div className="flex flex-col">
            <div className="font-bold mb-4">
              <span className="text-green-600">01 – </span>
              <span>Strategic Partners</span>
            </div>
            <p>Lorem ipsum dolor sited is amet consectetur notted.</p>
          </div>

          <div className="flex flex-col">
            <div className="font-bold mb-4">
              <span className="text-green-600">02 – </span>
              <span>Sourcing the Best</span>
            </div>
            <p>Lorem ipsum dolor sited is amet consectetur notted.</p>
          </div>

        </div>

        <div className="flex items-center justify-between mt-14">
          <img className="border-2 rounded-full border-green-600  p-2" src="/author-1.png" alt="Headshot of a man in suit" />
          <div className="flex flex-col">
            <img src="/signature-1.png" alt="signature" />
            <span>CEO & CO Founder</span>
          </div>
          <div className="flex items-center justify-center bg-white border-2 border-green-600 w-[230px] h-[128px] py-4 px-2">
            <div className="flex items-center justify-center space-x-4 w-[206px] h-[104px] bg-gray-100">
              <span className="text-5xl font-semi-bold">38</span>
              <span className="w-1/2 leading-5">Years of Experience</span>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}