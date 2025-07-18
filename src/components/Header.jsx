function Header({ setPage }) {
  return (
    <header className="header">
      <h1>Leonardo Luchini  Full Stack Developer</h1>
      <nav>
        <button onClick={() => setPage('home')}>Inicio</button>
        <button onClick={() => setPage('about')}>Sobre mí</button>
        <button onClick={() => setPage('education')}>Educación</button>
        <button onClick={() => setPage('projects')}>Proyectos</button>
        <button onClick={() => setPage('contact')}>Contacto</button>
      </nav>
    </header>
  )
}

export default Header
