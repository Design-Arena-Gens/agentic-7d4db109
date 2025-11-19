import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap'
import { FaCheck } from 'react-icons/fa'

const plans = [
  {
    title: 'Starter',
    price: '$149',
    cadence: 'per month',
    description: 'Perfect for emerging fashion labels building their first virtual fitting flow.',
    features: ['Up to 150 virtual try-ons', '2 branded fitting templates', 'Analytics overview', 'Email support']
  },
  {
    title: 'Growth',
    price: '$399',
    cadence: 'per month',
    badge: 'Popular',
    description: 'Scale engagement with advanced styling and mid-volume retail operations.',
    features: [
      'Unlimited try-ons',
      'AI styling assistant',
      'Shopify & Magento apps',
      'Dedicated onboarding',
      'Conversion dashboard'
    ],
    highlighted: true
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    cadence: 'tailored plan',
    description: 'Global retailers and marketplaces seeking multi-brand deployments and SLAs.',
    features: [
      'Multi-store rollouts',
      'Headless API toolkit',
      'Private CDN & SSO',
      '24/7 support concierge',
      'Quarterly innovation labs'
    ]
  }
]

const Pricing = () => {
  return (
    <section className="py-5">
      <Container>
        <div className="section-heading">
          <h2>Flexible Pricing for Ambitious Teams</h2>
          <p>
            Choose a plan that fits your growth stage. Upgrade anytime as your community of digital shoppers expands.
          </p>
        </div>
        <Row className="g-4">
          {plans.map((plan) => (
            <Col key={plan.title} xl={4} md={6}>
              <Card className={`pricing-card h-100 ${plan.highlighted ? 'border-2 border-primary' : ''}`}>
                <Card.Body className="p-4 d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <Card.Title className="fw-bold fs-3 mb-0">{plan.title}</Card.Title>
                      <Card.Subtitle className="text-muted">{plan.cadence}</Card.Subtitle>
                    </div>
                    {plan.badge && (
                      <Badge pill className="pricing-badge">
                        {plan.badge}
                      </Badge>
                    )}
                  </div>
                  <h3 className="display-6 fw-semibold mb-3">{plan.price}</h3>
                  <p className="text-muted mb-4">{plan.description}</p>
                  <ul className="list-unstyled d-grid gap-2 mb-4 text-muted flex-grow-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="d-flex align-items-start gap-2">
                        <span className="text-primary mt-1">
                          <FaCheck />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant={plan.highlighted ? 'primary' : 'outline-primary'}>
                    {plan.highlighted ? 'Get Started' : 'Talk to Sales'}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Pricing
