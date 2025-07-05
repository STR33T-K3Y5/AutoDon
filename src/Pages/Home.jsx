import '../App.css';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="image-container">
        <img src="src/images/autoparts-image.webp" className="image" alt="AutoParts Image" />
        <h1 className="header">AUTODON</h1>
        <p className="header-motto">Your Trusted Service Partner</p>
      </div>

      {/* Main Content */}
      <div className="landing-content">
        <h2 className="section-header">Our Range</h2>

        <div className="icon-grid">
          <div className="icon-card">
            <span className="icon">
              <img src='src/images/car.png' alt='barcode icon' className='div-icon'/>
            </span>
            <h3>Parts By Car Model</h3>
          </div>

          <div className="icon-card">
            <span className="icon">
              <img src='src/images/number-plate.png' alt='number-plate icon' className='div-icon'/>
            </span>
            <h3>Parts By VIN</h3>
          </div>

          <div className="icon-card">
            <span className="icon">
              <img src='src/images/numbers.png' alt='barcode icon' className='div-icon'/>
            </span>
            <h3>Parts By Model Number</h3>
          </div>

          <div className="icon-card">
            <span className="icon">
              <img src='src/images/spanner.png' alt='barcode icon' className='div-icon'/>
            </span>
            <h3>Parts By Part Number</h3>
          </div>
        </div>
      </div>

      {/* Footer should be OUTSIDE landing-content */}
      <footer className="footer">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Your message" rows="4" required></textarea>
          <button type="submit">Send</button>
        </form>
        <p className="footer-note">© 2025 AutoDon. All rights reserved.</p>
      </footer>
    </>
  );
}


