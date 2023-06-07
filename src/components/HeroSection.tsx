import '../assets/css/App.css'
function HeroSection() {
  return (
    <div className="Hero dposr doverh">
      <div className="dposa bg1 rounded-circle "
        style={{
          height: "clamp(120px, 20vw, 300px)",
          width: "clamp(120px, 20vw, 300px)",
          top: "-100px",
          left: "-100px",
        }}
      ></div>
      <div className="dposa bg1 rounded-circle dopa2"
        style={{
          height: "clamp(120px, 20vw, 300px)",
          width: "clamp(120px, 20vw, 300px)",
          bottom: "-50px",
          left: "-20px",
        }}
      ></div>
      <div className="container h-100">
        <div className="row dalc h-100">
          <div className="col-11 col-md-6">
            <h1 className="fw-bold">
              Hello React
            </h1>
            <p>
              just trying out stuff yunno...
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis obcaecati eum adipisci dolore. Repellendus deleniti magnam facilis consequatur quasi dolore.
            </p>
            <button className="dbtn1 btn btn-primary">
              Let's Go
            </button>
          </div>
          <div className="col-md-6">
            <img src="../../public/images/hero-img.png" alt="mhmm" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
