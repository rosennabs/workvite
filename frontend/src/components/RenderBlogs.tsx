import { FaArrowLeft, FaArrowRight, FaRegComments } from "react-icons/fa6";
import { AiOutlineFolderOpen } from "react-icons/ai";

interface BlogItems {
  image: string,
  day: number,
  header: string,
  headshot: string,
  name: string
} 

const blogItem: BlogItems[] = [
  {
    image: "news-1.jpg",
    day: 23,
    header: "Hire easily HR candidates in few seconds",
    headshot: "testimonial-1.png",
    name: "Haris Gulati"
  },
  {
    image: "news-2.jpg",
    day: 24,
    header: "Get few solutions to hire a best candidate",
    headshot: "testimonial-2.png",
    name: "John Mike"
  },
  {
    image: "news-3.jpg",
    day: 25,
    header: "We're building a new business world",
    headshot: "testimonial-3.png",
    name: "Christine Eve"
  },
]


export default function RenderBlogs() {
  return (
    <div className="flex bg-[#f6f6f6] h-[1000px] w-full py-24 pl-32">
      <div className="flex flex-col text-black w-1/4 mr-4">
        <p className="text-green-600 font-bold mb-4">Our Blog Posts</p>
        <h2 className="text-5xl font-bold leading-16 tracking-tight mb-8">Latest News & Articles</h2>
        <p className="text-xl text-gray-500">Lorem ipsum onts perspicia unde omnis iste natus errluptatem acc usan- tium demque laudantium totam.</p>

        <div className="mt-24">
          <button className="bg-white p-6 mr-2 rounded-full text-xl"><FaArrowLeft /></button>
          <button className="bg-white p-6 rounded-full text-xl"><FaArrowRight /></button>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 text-black">
        {blogItem.map((item, index) => (
          <div key={index} className="relative bg-white h-[494px]">
            <img src={item.image} />
            <div className="absolute top-48 left-8 flex flex-col text-lg p-3 bg-white text-white">
              <span className="bg-green-600 text-center font-bold text-2xl w-[60px]">{item.day}</span>
              <span className="bg-green-600 text-center w-[60px]">AUG</span>
            </div>

            <div className="flex flex-col p-8 text-sm mt-4">
              <div className="flex items-center gap-2 text-green-600"><AiOutlineFolderOpen />
                <span>Human Resource</span>
                <span className="ml-4"><FaRegComments /></span>
                <span>05 Comments</span>
              </div>
              <h2 className="text-2xl font-bold mt-2">{item.header}</h2>

              <div className="flex  items-center  gap-3 mt-6">
                <img className="h-[33px] w-[33px]" src={item.headshot} />
                <span>by {item.name}</span>
              </div>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
}