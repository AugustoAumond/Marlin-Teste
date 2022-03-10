import {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown, faAngleUp, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';

function Hospitais (props) {
    const [open, setOpen] = useState(false);

    const hospitaisEmDestaque = [{
        name: 'Hospital Vitória Barra', foto:'imgs/grupo de máscara 2.png'}, 
        {name: 'Hospital Perinatal Laranjeiras', foto:'imgs/grupo de máscara 7.png'},
        {name: 'Hospital Copa D Or', foto: 'imgs/grupo de máscara 6.png'}]
    

    console.log(props.list);

    const threeHospitals = (list) => {
        let newList = [];
            for (let i = 0; i < 3; i++) {
                newList.push(list[i]);
                console.log(newList);
            }     
        return newList ;
    }

    const openWindow = () => {
        let api = document.querySelector('#api');
        if (open === false){
            api.style.display = 'flex';
            setOpen(!open);
        } else {
            api.style.display = '';
            setOpen(!open);
        }
    }

    return (
        <Hospitals>
            <div id="hospitals"><p id="hospitalstxt">Hospitais em destaque</p></div>
            <div id="line"></div>
            <div id="description"> 
                <p id="descriptiontxt">Contando com os melhores hospitais do Rio de Janeiro, o plano Ouro dispõe para você as redes mais referenciadas com diversos benefícios para que você tenha um atendimento totalmente personalizado.</p>     
            </div>
            {hospitaisEmDestaque.map((list, index)=>(
                <Photos key={index}>
                    <img id={`hosp${index}`} src={list.foto}></img>  
                    <p id={`div${index}`}> {list.name} <br /> <IconArrown icon={open ? faAngleDown : faAngleUp} onClick={(()=> openWindow())} /> </p> 
                </Photos>
            ))} 
            {(threeHospitals(props.list)[0] === undefined) ? 
                <Api> Carregando ...</Api> : 
                
                <Api id="api">
                {threeHospitals(props.list).map((list, index)=>(    
                    <div id='colunm' key={index}>
                        <div id='open'>
                            <img id='image' src={list.image} alt="" />
                            <h2 id='name'> {(list.name !== undefined) ? list.name : 'Carregando...'} </h2>
                            <div id='detail'><p id='detailtxt'>{list.detail}</p></div>
                        </div>
                        <div id='infos'>
                            <div id='adress'>
                              <IconLocation icon={faLocationDot}/> <strong>Endereço: </strong> {list.address ? list.address : 'Carregando...'}
                            </div>
                            <div id='contact'>
                                <IconPhone icon={faPhone} />
                            <strong>Telefone: </strong>{list.phone ? list.phone : 'Carregando...'}
                            </div>
                        </div>
                    </div>
                    ))}  

                </Api> }               
            
        </Hospitals>
    )
}

export default Hospitais;

const Hospitals = styled.div`
    position: relative;

    #hospitals{
        position: relative;
        top: 95px;
        left: 104px;
        width: 330px;
        height: 39px;
    }

    #hospitalstxt{  
        text-align: left;
        font: normal normal bold 29px/39px Open Sans;
        letter-spacing: 0px;
        color: #171717;
    }

    #line {
        position: relative;
        top: 96px;
        left: 103px;
        width: 177px;
        border-bottom: solid 1px #F7B53D;
    }

    #description{
        position: relative;
        top: 98px;
        left: 103px;
        width: 1160px;
        height: 54px;

    }

    #descriptiontxt{
        text-align: left;
        font: normal normal normal 23px/27px Open Sans;
        letter-spacing: 0px;
        color: #4B4B4B;
    }

`

const IconArrown = styled(FontAwesomeIcon)`
    position: relative;
    left: 1px;
    top: -5px;
    width: 22px;
    height: 20px;
    z-index: 1;
    color: gray;
`

const Photos = styled.div`
    #hosp0{
        position: relative;
        top: 130px;
        left: 95px;
        width: 376px;
        height: 230px;
        
    }

    #div0 {
        position: relative;
        background: white;
        top: 107px;
        left: 95px;
        width: 376px;
        height: 47px;
        text-align: center;
        font: normal normal bold 20px/27px Open Sans;
        letter-spacing: 0px;
        color: #E8BB15;   
        z-index: 1;
    }

    #hosp1{
        position: relative;
        top: -192px;
        left: 495px;
        width: 376px;
        height: 230px;
    }

    #div1 {
        position: relative;
        top: -213px;
        left: 495px;
        width: 376px;
        height: 47px;
        backgroun: white;
        text-align: center;
        background: white;
        font: normal normal bold 20px/27px Open Sans;
        letter-spacing: 0px;
        color: #E8BB15;
        z-index: 1;

    }

    #hosp2{
        position: relative;
        top: -514px;
        left: 887px;
        width: 376px;
        height: 230px;

    }

    #div2 {
        position: relative;
        top: -534px;
        left: 887px;
        width: 376px;
        height: 47px;
        background: white;
        text-align: center;
        font: normal normal bold 20px/27px Open Sans;
        letter-spacing: 0px;
        color: #E8BB15;
        z-index: 1;
    }

`

const Api = styled.div `
    display: none;
    flex-direction: column;
    margin-top: 10px;
    position: relative;
    top: -534px;
    border-bottom: solid 1px #9e9e9e70;
    width: 1162px;
    margin-left: 87px;

    #colunm {
        height: 300px;
    }

    #image {
        position: relative;
        width: 276px;
        top: 69px;
        left: 50px;
    }

    #name{
        position: relative;
        left: 360px;
        top: -213px;
    }

    #detail {
        box-sizing: border-box;
        width: 491px;
        top: -221px;
        height: 281px;
        left: 364px;
        position: relative;
    }

    #detailtxt {
        text-align: left;
        margin-left: 10px;
        font: normal normal normal 23px/27px Open Sans;
        letter-spacing: 0px;
        color: #4B4B4B;
    }

    #infos{
        position: relative;
        top: -7px;
    }

    #adress{
        position: relative;
        top: -495px;
        left: 960px;
        width: 263px;
        height: 78px;
        text-align: left;
        letter-spacing: 0px;
        color: #000000;
    }

    #contact{
        position: relative;
        top: -495px;
        left: 960px;
        width: 265px;
        height: 60px;
        text-align: left;
        letter-spacing: 0px;
        color: #000000;
    }

`

const IconLocation = styled(FontAwesomeIcon)`
    position: relative;
    color: #F7B53D;
    right: 5px;
  `

const IconPhone = styled(FontAwesomeIcon)`
    position: relative;
    color: #F7B53D;
    right: 5px;
`





