
const renderLogo: number[] = Array.from({ length: 5 }, (_, index) => index);

export default function RenderLogo() {
  return (
    <div className="flex items-center justify-center w-full bg-[#f6f6f6] h-[700px]">
      <div className="flex justify-between border-t w-5/6 border-t-gray-300 mt-56 pt-32">
        {renderLogo.map((_, index) => (
          <img
            key={index}
            className="opacity-30"
            src="/clients-logo-3.png"
            alt="logo" />
        ))}

      </div>
    </div>
  )
}