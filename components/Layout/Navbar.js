import { Navbar as NavigationBar, Nav, Container } from 'react-bootstrap'

const Navbar = () => {
  return (
    <NavigationBar bg="dark" expand="lg" variant="dark">
      <Container>
        <NavigationBar.Brand href="/">Vebatech</NavigationBar.Brand>
        <NavigationBar.Toggle aria-controls="basic-navbar-nav" />
        <NavigationBar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="https://nextjs.org/">NextJS</Nav.Link>
            <Nav.Link href="https://react-bootstrap.github.io/">Twitter Bootstrap</Nav.Link>
            <Nav.Link href="https://www.prisma.io/">Prisma</Nav.Link>
          </Nav>
        </NavigationBar.Collapse>
      </Container>
    </NavigationBar>
  )
}

export default Navbar
