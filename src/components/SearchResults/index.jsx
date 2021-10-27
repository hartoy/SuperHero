import { useLocation, Link, useHistory  } from "react-router-dom";
import { Card, Button, Row,  Col, Container} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import imgLoading from "../../img/imgLoading.png";
import './searchresults.css'



function SearchResults (){

    const [ validator, setValidator ] = useState(true);
    const [ heroes, setHeroes ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ results, setResults ] = useState(true);

    let history = useHistory();

    const location = useLocation();
    const query = location.search;
    
    let name= query.substring(8);
    console.log(name);


    useEffect(() => {
     
     if(localStorage.email === '"challenge@alkemy.org"' && localStorage.pass === '"react"'){
       if (name.length<=2) {
         setValidator(false)
         setIsLoading(false)
       }else {
          const getData = async () =>{
          let endPoint =  `https://www.superheroapi.com/api.php/10224590504484555/search/${name}`; 
          let response = await fetch(endPoint);
          let data = await response.json();
          return data;  
       }
       getData().then(data =>{
          if (data.results ===  undefined){
              setResults(false)
              setIsLoading(false)
          }else{
              setHeroes(data.results);
              setIsLoading(false);
              setValidator(true);
              setResults(true);
          }
      });
     }
    }else{
     history.push("/sinPermiso");
   }  
    },[name]);

     

    return (
    <Container>     
     <Row className = "searchResults">
      { isLoading && 
            <div className= "cargando">
              <h3 className="loading"> Loading...</h3>  
              <img className="imgLoading" src={imgLoading} alt="" />
              
           </div>
          }

      {!validator && <h3 className="validator"> ❌ At least 3 characters are required for your search ❌</h3>} 
   

      {results? heroes.map( heroe =>{
       return(
      <Col lg={3} sm={6} xs ={12} >   
         <div key= {heroe.id}>
          <Card>
            <Card.Img variant="top" src= {heroe.image.url} alt="" />
            <Card.Body className="cardBodySresults">
              <Card.Title>{heroe.name}</Card.Title>
              <Button className= "botonetaSearch"as={Link} to={`/home/${heroe.id}`} >Add team ⚔️</Button>
            </Card.Body>
         </Card>
         </div>
      </Col>
       )   
    }
    ):
    <div className="noResults">
    <h1 className="validator">It looks like there aren't any  matches for your search</h1>

    </div>
    }
  
     


    </Row>
</Container> 
    )
}

export default SearchResults;

