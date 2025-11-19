import { Container, Row, Col } from 'react-bootstrap'
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <h5 className="fw-bold mb-3">VirtuFit Studio</h5>
            <p className="mb-0">
              Elevate your wardrobe with immersive, AI-powered virtual fitting experiences for every body type.
            </p>
          </Col>
          <Col md={4}>
            <h6 className="fw-semibold mb-3 text-uppercase">Explore</h6>
            <div className="d-flex flex-column gap-2">
              <Link to="/virtual-fitting">Virtual Fitting</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </Col>
          <Col md={4}>
            <h6 className="fw-semibold mb-3 text-uppercase">Connect</h6>
            <div className="social-links">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </Col>
        </Row>
        <hr className="border-secondary-subtle my-4" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <small>© {currentYear} VirtuFit Studio. All rights reserved.</small>
          <small>
            Crafted with precision for next-generation fashion retailers.
          </small>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
