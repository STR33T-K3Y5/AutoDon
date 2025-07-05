import '../App.css';
import Navbar from '../components/Navbar';

import autoPartsImage from '../images/autoparts-image.webp';
import carIcon from '../images/car.png';
import numberPlateIcon from '../images/number-plate.png';
import numbersIcon from '../images/numbers.png';
import spannerIcon from '../images/spanner.png';

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="image-container">
        <img src={autoPartsImage} className="image" alt="AutoParts Image" />
        <h1 className="header">AUTODON</h1>
        <p className="header-motto">Your Trusted Service Partner</p>
      </div>

      {/* Main Content */}
      <div className="landing-content">
        <h2 className="section-header">Our Range</h2>

        <div className="icon-grid">
          <div className="icon-card">
            <span className="icon">
              <img src={carIcon} alt="car icon" className="div-icon" />
            </span>
            <h3>Parts By Car Model</h3>
          </div>

          <div className="icon-card">
            <span className="icon">
              <img src={numberPlateIcon} alt="number plate icon" className="div-icon" />
            </span>
            <h3>Parts By VIN</h3>
          </div>

          <div className="icon-card">
            <span className="icon">
              <img src={numbersIcon} alt="numbers icon" className="div-icon" />
            </span>
            <h3>Parts By Model Number</h3>
          </div>

          <div className="icon-card">
            <span className="icon">
              <img src={spannerIcon} alt="spanner icon" className="div-icon" />
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