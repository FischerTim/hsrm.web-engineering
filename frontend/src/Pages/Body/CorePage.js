
import React, { useContext , useState} from 'react'


import { useHistory } from 'react-router-dom'
import { Jumbotron, Button, Container, Row, Col, Image } from 'react-bootstrap';

import { PointsContext } from '../../Context/Statistics/PointsContext';
import { GPPSContext } from '../../Context/Statistics/GPPSContext';
import { GeneratorsContext } from '../../Context/Lists/GeneratorsContext';
import { UpdatesContext } from '../../Context/Lists/UpdatesContext';
import { UserContext } from '../../Context/UserContext';
import { RessourcesContext } from '../../Context/Ressource/RessourcesContext';

import GeneratorList from '../../Components/Generator/GeneratorList';
import UpdateList from '../../Components/Update/UpdateList';

import { UserService } from '../../Services/UserService';

import { SlideAnimation } from '../../Components/Animation/SlideAnimation';





export function CorePage() {

    const pathHistory = useHistory()

    const { generators, setGenerators } = useContext(GeneratorsContext)
    const { updates, setUpdates } = useContext(UpdatesContext)
    const { user } = useContext(UserContext)
    const { points } = useContext(PointsContext)
    const { gPPS } = useContext(GPPSContext)
    const { ressources } = useContext(RessourcesContext)
    const [disableClick, setDisableClick] = useState(true)
    const [animationList, setAnimationList] = useState([])

  

    
    // Prohibit page for users not logged in
    if (!user.LogedIn) {
        pathHistory.push(ressources.Path.Login)
    }
    const isClickConnected = (con)=> {
        if(con != null){
            if ( con.readyState === 1){
                if(disableClick === true){
                    setDisableClick(false)
                }
                return true
            }
        }
        if(disableClick === false){
            setDisableClick(true)
        }
        return false
    
    }
    isClickConnected(user.Connections.Click)

    const updateGenerators = async () => {
        try {

            const newGeneratorList = await UserService.getGenerators(user.Token)
            setGenerators(await newGeneratorList)

            //update upgrades 
            updateUpgrades()

        } catch (error) {
            //TODO error handling
        }
    }

    const updateUpgrades = async () => {
        try {

            const newupgradeList = await UserService.getUpgrades(user.Token)
            setUpdates(await newupgradeList)

        } catch (error) {
            //TODO error handling
        }

    }
  
  const animationKill=()=>{
      test()
  }

  const test=()=>{
    animationList.shift()
    var newAnimationList=[...animationList]
    setAnimationList(newAnimationList)
  }

    const pointclick = () => {

        if (isClickConnected(user.Connections.Click)) {
            user.Connections.Click.send("")


            animationList.push(<SlideAnimation path={ressources.Game.ImagePath.UpdatePath  + updates.SelectImage + ".png"} animationKill={animationKill} key={Date.now()}></SlideAnimation>)
            var newAnimationList=[...animationList]
            setAnimationList(newAnimationList)
            console.log(animationList)
            
          

            // TODO KLICKT!!!!!!!!!
        } 
    }
    


  

    return (
        <div>
            <br /><br />
            <Container>
                <Row>
                    <Col>
                        <GeneratorList points={points} onBuyHook={updateGenerators} generatorsList={generators} gameRessources={ressources.Game} />
                    </Col>
                    <Col xs={5}>
                        <Jumbotron className="text-center">
                            <h1>{points}</h1>
                            {ressources.Core.Points}<br />
                        </Jumbotron><br />
                        {animationList}
                       
                        <Image src={ressources.Game.ImagePath.GeneratorPath + generators.SelectImage-2 + ".png"}fluid/>
                        
                    </Col>
                    <Col>
                        <UpdateList points={points} onBuyHook={updateUpgrades} updatesList={updates} gameRessources={ressources.Game} />
                    </Col>
                </Row>
                <br /><br />
                <p>
                    <Button variant="secondary" size="lg" block disabled={disableClick} onClick={pointclick}>{ressources.Core.ClickButton}</Button>
                </p>
                <h6 className="text-center">{ressources.Core.PointsPC} {gPPS}</h6>
            </Container>
{animationList}
        </div>
    )
}