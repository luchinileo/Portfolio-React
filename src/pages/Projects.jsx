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
          demo="https://tienda-ropa-react.netlify.app"
        />
        <ProjectCard
          title="Guitarla"
          description="Sitio de guitarras hecho en React con TypeScript y deploy profesional."
          github="https://github.com/luchinileo/guitarra-2025-js"
          demo="https://venta-guitarra-react.netlify.app"
        />
        <ProjectCard
          title="Calculadora de Propinas"
          description="Calculadora hecha con React y desplegada en Netlify."
          github="https://github.com/luchinileo/Calculadora-Propinas.git"
          demo="https://react-propinas.netlify.app"
/>
      </div>
    </main>
  )
}

export default Projects
