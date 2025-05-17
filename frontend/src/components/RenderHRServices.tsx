import { ReactNode } from "react";
import { MdOutlinePeopleAlt, MdOutlineEngineering, MdOutlineEventNote } from "react-icons/md";

interface HRServiceItem {
  icon: ReactNode,
  heading: string,
  image: string,
  button: string,
}
const hrServiceItems: HRServiceItem[] = [
  {
    icon: <MdOutlineEngineering />,
    heading: "HR Consulting",
    image: "/service-1.jpg",
    button: "MANAGEMENT",
  },
  {
    icon: <MdOutlinePeopleAlt />,
    heading: "Technology Resource",
    image: "/service-2.jpg",
    button: "RESOURCES",
  },
  {
    icon: <MdOutlineEventNote />,
    heading: "Staffing Solutions",
    image: "/service-3.jpg",
    button: "SOLUTIONS",
  }
];

export default function RenderHRServices() {
  return (
    <div className="flex flex-col items-center bg-[#f6f6f6] text-black w-full p-24">
      <p className="text-green-600 font-bold mb-4">Our All Services List</p>
      <h2 className="text-5xl font-bold leading-16 tracking-tight mb-8">Outsourced HR Services</h2>

      <div className="grid grid-cols-3 gap-6 justify-items-center">
        {hrServiceItems.map((item, index) => (
          <div key={index}
            className="flex flex-col bg-white w-[370px] pb-8 space-y-8">

            <div className="relative">
              <button className="absolute right-4 top-4 bg-white p-2 text-sm font-bold z-10">{item.button}</button>
              <img src={item.image} alt="Image of employees" />
              <span className="absolute left-8 bottom-4 text-7xl text-green-600 z-10">{item.icon}</span>
              {/* gradient overlay: dark → transparent, bottom → top */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            </div>

            <div className="pl-8 pr-16">
              <h2 className="text-2xl mb-8 font-bold"> {item.heading} </h2>
              <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod.</p>
              <img className="mt-8 mb-3" src="/shape-2.png" alt="A down line arrow" />
              <span className="text-gray-500 font-semibold">Read More</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}