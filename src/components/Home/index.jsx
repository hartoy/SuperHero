import React, { useState, useEffect } from 'react';
import { Col, Card ,Row ,Button, Container } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './home.css'

import imgLoading from "../../img/imgLoading.png";


function Home (props){

    const [ isLoading, setIsLoading ] = useState(true);
    const [ team, setTeam ] = useState([]);
    const [ teamStatus, setTeamStatus ] = useState(true);
    const [ heroesIDs, setHeroesIDs ] = useState(["346", "332", "274", "287", "208", "225"]);
    const [ totalStats, setTotalStats] = useState({
      tCombat: 0,
      tDurability: 0,
      tIntelligence: 0,
      tPower: 0,
      tSpeed: 0,
      tStrength: 0
    });


    let history = useHistory();

    const id = props.match.params.id;
    
  
    const getData = async (oneID) => {
      const response = await fetch(
        `https://www.superheroapi.com/api.php/10224590504484555/${oneID}`
      ).then((response) => response.json());
      return response;
    };
    
//component did mount

useEffect(() => {
  //heroesIDs.push(id);
  if(localStorage.email === '"challenge@alkemy.org"' && localStorage.pass === '"react"'){
    if(heroesIDs.length !== 6){
      setTeamStatus(false);
    }
    
    setIsLoading(true);
    setTeam([]);
    
  
    heroesIDs.forEach(async (oneHeroeId) => {
      const heroe = await getData(oneHeroeId).then((data) => data);
      setTeam(oldState => {
        const oldHeroes = [...oldState];
        oldHeroes.push(heroe);
        setIsLoading(false);
       
        return oldHeroes;
      });
    });


    const totalCombat = team.reduce((acum, heroe) => {
      return acum + Number(heroe.powerstats.combat);
    }, 0);
    

    const totalDurability = team.reduce((acum, heroe) => {
      return acum + Number(heroe.powerstats.durability);
    }, 0);
    

    const totalIntelligence = team.reduce((acum, heroe) => {
      return acum + Number(heroe.powerstats.intelligence);
    }, 0);
    

    const totalPower = team.reduce((acum, heroe) => {
     return acum + Number(heroe.powerstats.power);
    }, 0);
    

    const totalSpeed = team.reduce((acum, heroe) => {
     return acum + Number(heroe.powerstats.speed);
    }, 0);
    

    const totalStrength = team.reduce((acum, heroe) => {
     return acum + Number(heroe.powerstats.strength);
    }, 0);
  
    setTotalStats({...totalStats, 
      tCombat: totalCombat, 
      tDurability: totalDurability, 
      tIntelligence: totalIntelligence, 
      tPower: totalPower, 
      tSpeed: totalSpeed, 
      tStrength: totalStrength});

  }else{
    history.push("/sinPermiso");

  }
}, [heroesIDs]);



const RemoveHandler = (e) => {
  const elementoPadre = e.currentTarget.parentElement;
  const lopo = elementoPadre.querySelector(".myHeroId").innerText;
  const newIDs = heroesIDs.filter(id => id !== lopo);
  setHeroesIDs(newIDs);
}



return (
  <Container>
    <Row className="home">   
          
      { isLoading && 
            <div className= "cargando">
              <h3 className="loading"> Loading...</h3>  
              <img className="imgLoading" src={imgLoading} alt="" />
              
           </div>
          }


{team.length > 0 &&
       <Col className= "teamStats" lg={12} sm={6} xs ={12}>
       <p className="teamStatsTitle">Team Stats</p>
       <ul className="teamList">
         <li>Total Combat: {totalStats.tCombat}</li>
         <li>Total Durability: {totalStats.tDurability}</li>
         <li>Total Intelligence: {totalStats.tIntelligence}</li>
         <li>Total Power: {totalStats.tPower}</li>
         <li>Total Speed: {totalStats.tSpeed}</li>
         <li>Total Strenght: {totalStats.tStrength}</li>
       </ul>
     </Col>
     }
     
        
    
            
      <div className="teamStatus">
            {teamStatus ? <p className="teamReady"> Your team is ready for battle</p> 
            : <p className="teamIncomplete"> Your team must have 6 heroes</p>}
     </div>

       
{team.length > 0 &&
  
        team.map((oneHeroe, idx) => {
          return (
            <Col lg={4} sm={6} xs ={12} >
             <div key={idx}>
               <Card>
                 <Card.Img variant="top" src= {oneHeroe.image.url} alt=""  />
                 <Card.Body>
                  <Card.Title className="name">{oneHeroe.name}</Card.Title>
                  <Card.Title>{oneHeroe.biography.alignment}</Card.Title>
                  <Card.Text>
                   <ul className="heroeStats text-left">
                     <li>Combat:{oneHeroe.powerstats.combat}</li>
                     <li>Durability:{oneHeroe.powerstats.durability}</li>
                     <li>Intelligence:{oneHeroe.powerstats.intelligence}</li>
                     <li>Power:{oneHeroe.powerstats.power}</li>
                     <li>Speed:{oneHeroe.powerstats.speed}</li>
                     <li>Strenght:{oneHeroe.powerstats.strength}</li>
                   </ul>
                   <p className ="myHeroId">{oneHeroe.id}</p>
                   <Button className ="botoneta"  as={Link} to={`/heroe-details/${oneHeroe.id}`}>Details</Button>
                    <Button className ="botoneta" onClick={RemoveHandler}>Delete</Button>
                 </Card.Text>
                 
                </Card.Body>
               </Card>
              </div>
            </Col>
           
          );
        })}
   
    




</Row>
</Container>
)
}

export default Home;



