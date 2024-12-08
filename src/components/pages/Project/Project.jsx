import projectsData from "../../../assets/js/projects";

export default function Project() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="cards-container">
        {projectsData.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <img src={project.image} alt={project.name} />
            <a href={project.path} target="_blank" rel="noopener noreferrer">
              <button>View More</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
