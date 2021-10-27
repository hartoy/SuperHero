import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row,  Col, Container } from 'react-bootstrap';
import './heroedetails.css'


function HeroeDetails (props){

  const id = props.match.params.id;
 
  
  const [ heroes, setHeroes ] = useState(null);
  const [ ready, setReady ] = useState(false);


    useEffect(() => {
      
        const getData = async () =>{
            let endPoint =  `https://www.superheroapi.com/api.php/10224590504484555/${id}`; 
            let response = await fetch(endPoint);
            let data = await response.json();
            return data;  
           } 
            getData().then(data =>{
              setHeroes(data);
              setReady(true);
           });
           
    },[id]);

    return(
      <Container>
     
      <div>
        
      { ready  && 
         <Row className="detalleHeroe">
         
         <Col md={4} >
     <img className="imgHero" src= {heroes.image.url} alt=""  />
      </Col>
      <Col md={8} >
      <h2 className="titleHero" > {heroes.name} </h2>
       <ul className="detailseHero">
        <li>Peso: {heroes.appearance.weight[1]}</li>
        <li>Altura: {heroes.appearance.height[1]} </li>
        <li>Alias: {heroes.biography.aliases[0]}</li>
        <li>Color de ojos: {heroes.appearance['eye-color']} </li>
        <li>Color cabello: {heroes.appearance['hair-color']} </li>
        <li>Trabajo: {heroes.work.base} </li>
      </ul>
       
      <Button className ="botoneta" as={Link} to={`/home`} >Go Back</Button>
      </Col>
      
      </Row>
   
   
   
   
   }
       
   
   
   
   
       </div>
       </Container>
   )
}

export default HeroeDetails;


