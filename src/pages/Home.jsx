import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { FaCamera, FaMagic, FaChartLine } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <section className="hero-section text-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="hero-card text-center">
                <p className="text-uppercase fw-semibold mb-2">Seamless Virtual Try-On</p>
                <h1 className="display-5 fw-bold mb-3">
                  Redefine Dressing Rooms with AI-Fueled Personalization
                </h1>
                <p className="fs-5 mb-4">
                  Bring every collection to life with realistic 3D garment fitting, adaptive size guidance, and
                  interactive styling that keeps shoppers engaged longer.
                </p>
                <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                  <Button as={Link} to="/virtual-fitting" size="lg" variant="light">
                    Start Your Virtual Try-On
                  </Button>
                  <Button as={Link} to="/pricing" size="lg" variant="outline-light">
                    View Plans
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <div className="section-heading">
            <h2>Why VirtuFit Studio</h2>
            <p>
              Amplify conversion rates, reduce returns, and give your audience a personalized fashion journey using
              adaptive rendering and body-matching intelligence.
            </p>
          </div>
          <Row className="g-4">
            <Col lg={4} md={6}>
              <Card className="gradient-card h-100 p-4">
                <div className="feature-icon">
                  <FaCamera />
                </div>
                <h5 className="fw-semibold">Photo Accurate Visuals</h5>
                <p className="text-muted">
                  Render garments on real models with precision color, drape, and lighting to build immediate trust.
                </p>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="gradient-card h-100 p-4">
                <div className="feature-icon">
                  <FaMagic />
                </div>
                <h5 className="fw-semibold">AI Styling Assistant</h5>
                <p className="text-muted">
                  Suggest outfits, coordinate accessories, and deliver curated looks aligned with shopper preferences.
                </p>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card className="gradient-card h-100 p-4">
                <div className="feature-icon">
                  <FaChartLine />
                </div>
                <h5 className="fw-semibold">Insightful Analytics</h5>
                <p className="text-muted">
                  Track engagement hotspots, favored silhouettes, and purchase intent with real-time dashboards.
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <Container>
          <Row className="split-section">
            <Col>
              <img
                src="https://images.pexels.com/photos/5705641/pexels-photo-5705641.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="User interacting with virtual fitting room interface"
              />
            </Col>
            <Col>
              <h2 className="fw-bold mb-3">Design the Future of Retail</h2>
              <p className="text-muted mb-4">
                Our virtual fitting environment adapts to your brand voice, integrates with leading commerce platforms,
                and personalizes the shopper journey for ready-to-wear, couture, or activewear lines.
              </p>
              <ul className="list-unstyled fs-5 text-muted d-grid gap-3">
                <li>• Adaptive body mapping with size precision across diverse demographics.</li>
                <li>• Real-time layering to showcase fabrics, fit, and motion from any angle.</li>
                <li>• Embedded purchase flows to convert engagement into instant revenue.</li>
              </ul>
              <Button as={Link} to="/contact" size="lg" variant="primary">
                Book a Strategy Call
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <div className="cta-banner">
            <h3 className="fw-bold mb-3">Launch a signature try-on in just two weeks</h3>
            <p className="mb-4 fs-5">
              Our onboarding team handles 3D garment scans, asset optimization, and deployment so you can focus on
              delivering immersive fashion experiences.
            </p>
            <Button as={Link} to="/virtual-fitting" size="lg" variant="light">
              Explore the Virtual Fitting Suite
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Home
