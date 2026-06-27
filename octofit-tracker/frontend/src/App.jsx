import './App.css'

function App() {
  return (
    <main className="app-shell">
      <section className="hero-card">
        <p className="eyebrow">OctoFit Tracker</p>
        <h1>Stay active, compete kindly, and grow stronger.</h1>
        <p className="subtitle">
          A modern multi-tier fitness app for logging workouts, tracking teams,
          and cheering on progress.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="https://vite.dev/guide/" target="_blank" rel="noreferrer">
            Learn Vite
          </a>
          <a className="btn btn-outline-secondary" href="http://localhost:8000/api/health" target="_blank" rel="noreferrer">
            Check API health
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
