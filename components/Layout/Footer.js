import { Col, Container, Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const Footer = () => {
  const [quote, setQuote] = useState('')
  useEffect(() => {
    const getRandomQuote = async () => {
      let randomQuote = await fetch('/api/quotes', {
        method: 'GET',
      })
      randomQuote = await randomQuote.json()
      setQuote(randomQuote.quote)
    }
    getRandomQuote()
  }, [quote])
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={6}>
            Starter Pack provided by{' '}
            <a href="https://github.com/barudo" target="_blank" rel="noreferrer">
              barudo
            </a>
          </Col>
          <Col md={6} className="text-md-end">
            {quote}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
