import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'
import { FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <div className="section-heading">
          <h2>Let&apos;s Build Your Virtual Try-On Roadmap</h2>
          <p>
            Share your goals and we&apos;ll craft a tailored pilot, from garment digitization to launch marketing.
          </p>
        </div>
        <Row className="g-4">
          <Col lg={7}>
            <div className="contact-card">
              <Form>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group controlId="name">
                      <Form.Label>Full name</Form.Label>
                      <Form.Control type="text" placeholder="Alex Taylor" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Label>Work email</Form.Label>
                      <Form.Control type="email" placeholder="team@brand.com" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="company">
                      <Form.Label>Brand / Company</Form.Label>
                      <Form.Control type="text" placeholder="Virtuoso Apparel" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="volume">
                      <Form.Label>Monthly shoppers</Form.Label>
                      <Form.Select defaultValue="">
                        <option value="" disabled>
                          Select traffic range
                        </option>
                        <option value="under-10k">Under 10k</option>
                        <option value="10k-50k">10k - 50k</option>
                        <option value="50k-200k">50k - 200k</option>
                        <option value="200k-plus">200k+</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group controlId="message">
                      <Form.Label>Project goals</Form.Label>
                      <Form.Control as="textarea" rows={4} placeholder="Tell us about your timeline and priorities." />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="primary" size="lg" className="mt-4">
                  Submit Inquiry
                </Button>
              </Form>
            </div>
          </Col>
          <Col lg={5}>
            <Card className="h-100 p-4">
              <h5 className="fw-semibold mb-3">Fast-track your launch</h5>
              <p className="text-muted mb-4">
                Our specialists reply within one business day with curated resources, demo slots, and integration
                checklists matched to your platform.
              </p>
              <div className="d-grid gap-3 text-muted">
                <div className="d-flex gap-3 align-items-start">
                  <FaEnvelope className="text-primary mt-1" />
                  <div>
                    <span className="fw-semibold text-dark d-block">Email</span>
                    <small>hello@virtufitstudio.com</small>
                  </div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <FaPhoneAlt className="text-primary mt-1" />
                  <div>
                    <span className="fw-semibold text-dark d-block">Phone</span>
                    <small>+1 (415) 390-1200</small>
                  </div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <FaClock className="text-primary mt-1" />
                  <div>
                    <span className="fw-semibold text-dark d-block">Hours</span>
                    <small>Monday – Friday, 9:00 am – 6:00 pm PST</small>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
