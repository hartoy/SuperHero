import {  Row,  Container } from 'react-bootstrap';
import './sinPermiso.css'



function SinPermiso (){

   



return (
  <Container>
    <Row className="sinPermiso">   

          <h2 className="sorry"> Sorry, you don't have permissions to access this page</h2>
          <img className="gandalfImg" src="https://i.kym-cdn.com/entries/icons/original/000/002/144/You_Shall_Not_Pass!_0-1_screenshot.jpg" alt="" />

     </Row>
  </Container>
)
}

export default SinPermiso;




