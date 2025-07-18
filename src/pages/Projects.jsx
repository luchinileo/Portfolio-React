import ProjectCard from "../components/ProjectCard"

function Projects() {
  return (
    <main className="projects">
      <h2>Proyectos destacados</h2>
      <div className="project-list">
        <ProjectCard
          title="Tienda de Ropa"
          description="Proyecto e-commerce en React con carrito funcional y deploy en Netlify."
          github="https://github.com/luchinileo/-Tienda-de-Ropa-React"
          demo="https://tiramisú-monumental-62a97d.netlify.app"
        />
        <ProjectCard
          title="Guitarla"
          description="Sitio de guitarras hecho en React con TypeScript y deploy profesional."
          github="(link a tu GitHub)"
          demo="(link a tu Netlify)"
        />
      </div>
    </main>
  )
}

export default Projects
