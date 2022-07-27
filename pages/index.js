import Head from 'next/head'
import Layout from '../components/Layout'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vebatech - Software Development</title>
      </Head>
      <Layout>
        <div className="banner">
          <Container>
            <Row className="text-center">
              <Col>
                <h1>NextJS + React Bootstrap + Prisma Starter Pack</h1>
                <h4>
                  Easily Develop with NextJS + React Bootstrap + Prisma and deploy your app in No
                  Time
                </h4>
              </Col>
            </Row>
          </Container>
        </div>
        <Container style={{ marginTop: '30px' }}>
          <Row>
            <Col md={4}>
              <Card className="mt-2 mt-md-0">
                <Card.Header className="text-center">NextJS</Card.Header>
                <Card.Body>
                  Next.js gives you the best developer experience with all the features you need for
                  production: hybrid static & server rendering, TypeScript support, smart bundling,
                  route pre-fetching, and more.
                  <div className="text-center mt-2">
                    <a href="https://nextjs.org" target="_blank" rel="noreferrer">
                      <Button variant="success">Learn More</Button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mt-2 mt-md-0">
                <Card.Header className="text-center">React Bootstrap</Card.Header>
                <Card.Body>
                  Bootstrap, the world’s most popular framework for building responsive,
                  mobile-first sites, with jsDelivr and a template starter page. React Bootstrap is
                  an implementation of Bootstrap for React.
                  <div className="text-center mt-2">
                    <a href="https://react-bootstrap.github.io/" target="_blank" rel="noreferrer">
                      <Button variant="danger">Learn More</Button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mt-2 mt-md-0">
                <Card.Header className="text-center">Prisma</Card.Header>
                <Card.Body>
                  Prisma Client is a query builder that composes queries the way you think and is
                  auto-generated from the Prisma schema with types tailored to your app. It can be
                  used in mysql, postgres, mongodb and a lot more.
                  <div className="text-center mt-2">
                    <a href="https://prisma.io/" target="_blank" rel="noreferrer">
                      <Button variant="warning">Explore Prisma</Button>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container style={{ marginTop: '50px' }}>
          <Row>
            <Col className="text-center pt-md-5 pb-md-5">
              <h2>Provided by Vebatech</h2>
              <p className="mt-5">If its from Vebatech, it must be good.</p>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}
