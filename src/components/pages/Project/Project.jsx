import projectsData from "../../../assets/js/projects";
import "./Project.css"

export default function Project() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="cards-container">
        {projectsData.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.name}</h3>
            <img src={project.image} className="projectImg" alt={project.name} />
            <a href={project.path} target="_blank" rel="noopener noreferrer">
              <button>View More</button>
            </a>       
          </div>
        ))}
      </div>
    </div>
  );
}
