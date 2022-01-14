import './Services.css'

const Services = () => {
  return(
    <section className="services">
      <h2>
        How ThyFlow On-Demand Services Work
      </h2>
      <div className="cards">
        <div className="card">
          <h1>1</h1>
          <h3>Download App</h3>
          <p>Sign up to view list of mobile services in your city.</p>
        </div>
        <div className="card">
          <h1>2</h1>
          <h3>Choose your On-demand</h3>
          <p>service, location, time for service & book!</p>
        </div>
        <div className="card">
          <h1>3</h1>
          <h3>Get matched</h3>
          <p>with our verified mobile service provider well experience to perform service</p>
        </div>
        <div className="card">
          <h1>4</h1>
          <h3>Friendly, professional vetted</h3>
          <p>service provider will arrival at your location to perform service.</p>
        </div>
      </div>
    </section>
  )
}

export default Services;