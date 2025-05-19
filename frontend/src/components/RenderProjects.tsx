


const projectPhotos: string[] = ["project-1.jpg", "project-2.jpg", "project-3.jpg", "project-4.jpg", "project-5.jpg"];

export default function RenderProjects() {
  return (
    <div className="grid grid-cols-5 gap-6 mx-12">
      {projectPhotos.map((item, index) => (
        <img key={index} src={item} alt="Photo of employees" />
      ))}
    </div>
  );
}