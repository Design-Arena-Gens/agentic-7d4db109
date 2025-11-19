import { Container, Row, Col, Card, Accordion, Button, Badge } from 'react-bootstrap'
import { FaUserFriends, FaLaptopCode, FaCloudUploadAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const VirtualFitting = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="section-heading">
          <h2>Virtual Fitting Experience</h2>
          <p>
            Deliver a hyper-realistic fitting room that adapts to every shopper. Our pipeline blends body scanning,
            garment retouching, and AI style suggestions to keep guests immersed.
          </p>
        </div>
        <Row className="g-4 align-items-center">
          <Col lg={5}>
            <Card className="gradient-card h-100 p-4">
              <Badge bg="primary" className="mb-3 align-self-start">
                End-to-End
              </Badge>
              <h5 className="fw-semibold mb-3">How It Works</h5>
              <ul className="list-unstyled text-muted d-grid gap-3">
                <li>
                  <strong>1. Profile & Scan:</strong> Shopper uploads a selfie or selects a base model that mirrors their
                  proportions.
                </li>
                <li>
                  <strong>2. AI Fit Mapping:</strong> Our engine aligns garment grade rules to the shopper silhouette
                  instantly.
                </li>
                <li>
                  <strong>3. Immersive Preview:</strong> View fabrics in motion, switch colorways, and compare sizes with
                  confidence scores.
                </li>
              </ul>
              <Button as={Link} to="/contact" variant="primary">
                Request a Live Demo
              </Button>
            </Card>
          </Col>
          <Col lg={7}>
            <Row className="g-4">
              <Col md={6}>
                <Card className="h-100 p-4">
                  <div className="feature-icon">
                    <FaUserFriends />
                  </div>
                  <h6 className="fw-semibold">Inclusive Body Library</h6>
                  <p className="text-muted mb-0">
                    Offer body profiles across 120+ measurements so every shopper sees garments draped accurately.
                  </p>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="h-100 p-4">
                  <div className="feature-icon">
                    <FaLaptopCode />
                  </div>
                  <h6 className="fw-semibold">Seamless Integration</h6>
                  <p className="text-muted mb-0">
                    Plug into Shopify, Magento, or custom headless stacks with lightweight JavaScript and REST APIs.
                  </p>
                </Card>
              </Col>
              <Col md={12}>
                <Card className="h-100 p-4">
                  <div className="feature-icon">
                    <FaCloudUploadAlt />
                  </div>
                  <h6 className="fw-semibold">Creator Toolkit</h6>
                  <p className="text-muted mb-4">
                    Upload CAD files or flat patterns to auto-generate photorealistic 3D assets ready for the virtual
                    studio.
                  </p>
                  <Accordion flush>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Performance & Reporting</Accordion.Header>
                      <Accordion.Body>
                        Monitor try-on frequency, average session duration, share rates, and add-to-bag conversions via
                        an analytics cockpit purpose-built for merchandising teams.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Security & Privacy</Accordion.Header>
                      <Accordion.Body>
                        Every asset is encrypted at rest, PII is anonymized, and optional face-blur keeps virtual
                        fitting accessible for privacy-conscious shoppers.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default VirtualFitting
