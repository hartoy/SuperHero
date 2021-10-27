
import { Navbar , Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './navbar.css'

function NavbarComp (){
    
  let history = useHistory();
  

  let submitHandler = (e) => {
    e.preventDefault();
    let word =e.target.search.value;
     e.currentTarget.reset()
      history.push(`/search-results?search=${word}`)
      
  }
  
  
  
  
  return(
      
    <Navbar bg="red" variant="dark"  expand="lg">
        <Container>
      <Navbar.Brand className="superhero" as={Link} to={`/home`} >SuperHero</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          
          
         
        </Nav>
        <Form className="d-flex ms-auto" onSubmit={submitHandler}>
          <FormControl
             type="text"
             placeholder="Search your Hero"
             className="mr-2"
             aria-label="Search"
             name="search"
          />
          <Button className="searchButton" type="submit">Search</Button>

        </Form>
      </Navbar.Collapse>
      </Container> 
    </Navbar>
             
      
        
    );
}

export default NavbarComp;






