import React from "react";
import styles from "./Header.module.css";

function Navigation() {
  return (
    <React.Fragment>
      <section className={styles.header}>
        <a href="/" className={styles.logo}>
          <h2 className={styles.logo}>Today</h2>
        </a>
        <div className={styles.toggle}>
          <ion-icon
            className={styles.burger}
            name="reorder-three-outline"
            size="large"
          ></ion-icon>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Navigation;

// import { Container, Navbar, Nav, Row } from "react-bootstrap";

// function Header() {
//   return (

//     // <header>
//     //   <Navbar bg="light" expand="lg">
//     //     <Container>
//     //       <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//     //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     //       <Navbar.Collapse id="basic-navbar-nav">
//     //         <Nav className="me-auto">
//     //           <Nav.Link href="#home">Home</Nav.Link>
//     //           <Nav.Link href="#link">Link</Nav.Link>
//     //         </Nav>
//     //       </Navbar.Collapse>
//     //     </Container>
//     //   </Navbar>
//     // </header>
//   );
// }
// export default Header;
