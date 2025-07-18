function ProjectCard({ title, description, github, demo }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="buttons">
        <a href={github} target="_blank" rel="noopener noreferrer">Repositorio</a>
        <a href={demo} target="_blank" rel="noopener noreferrer">Demo Online</a>
      </div>
    </div>
  )
}

export default ProjectCard
