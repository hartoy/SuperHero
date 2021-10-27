import React, { useState } from 'react';
import { Form, Row,  Col, Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './login.css'





function Login (){
   
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(true);
  const [empty, setEmpty] = useState(false);
  const history = useHistory();






  let validationHandler = (e) => {
    e.preventDefault();
    if (email === 'challenge@alkemy.org' && password === 'react'){
      localStorage.setItem("token",JSON.stringify(10224590504484555));
      localStorage.setItem("email",JSON.stringify('challenge@alkemy.org'));
      localStorage.setItem("pass",JSON.stringify('react'));
      history.push('/home');
    }else if(password.length === 0 && email.length === 0) {
      setEmpty(true);
    }else{
      setLogin(false);
    }
  }


 return (
  <Container>  
  <Row>
    <h1 className="logTitle">SUPERHERO WAR</h1>
    <h2 className="subText">WELCOME TO THE BATTLE !</h2>
     
    <Col>
    <div className="form" >
    <Form>
    <Form.Group as={Row} className="mb-3 " controlId="formPlaintextEmail">
      <Form.Label column sm="2">
        Email
      </Form.Label>
      <Col sm="10">
        <Form.Control 
        className="email" 
        type="email" 
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)} />
      </Col>
    </Form.Group>
  
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
      <Form.Label column sm="2">
        Password
      </Form.Label>
      <Col sm="10">
        <Form.Control 
        value ={password}
        className="password" 
        type="password" 
        placeholder="Password"
        value ={password} onChange={(e) => setPassword(e.target.value)} />
      </Col>
    </Form.Group>
  </Form>
    
  <Button className="boton" variant="primary" onClick={validationHandler}>Login</Button>

  </div>
  { empty && 
            <div className= "cargando">
              <p className="loading">❌ Los campos no pueden estar vacios</p>  
              
          
           </div>
  }

  { !login && 
            <div className= "cargando">
              <p className="loading"> ❌ Email o contraseña incorrecta</p>  
              
          
           </div>
          
  }
  </Col>
  </Row>
  </Container> 
 )

}

export default Login;