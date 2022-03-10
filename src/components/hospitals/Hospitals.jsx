import {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleDown, faAngleUp, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';

function Hospitais (props) {
    const [open, setOpen] = useState(false);

    // Coloquei as imagens e o nome dos hospitais em um objeto pra fazer um map na div e evitar ter que adicionar mais divs;
    const hospitaisEmDestaque = [{
        name: 'Hospital Vitória Barra', foto:'imgs/grupo de máscara 2.png'}, 
        {name: 'Hospital Perinatal Laranjeiras', foto:'imgs/grupo de máscara 7.png'},
        {name: 'Hospital Copa D Or', foto: 'imgs/grupo de máscara 6.png'}]

    // Pegar apenas os dados dos três "hospitais" da api;
    const threeHospitals = (list) => {
        let newList = [];
            for (let i = 0; i < 3; i++) {
                newList.push(list[i]);
            }     
        return newList ;
    }

    // Abrir a div oculta/fechar a div visivel;
    const openWindow = () => {
        let api = document.querySelector('#api');
        if (open === false){
            api.style.display = 'flex';
            setOpen(!open);
        } else {
            api.style.display = 'none';
            setOpen(!open);
        }
    }

    return (
        <Hospitals>
            <p id="hospitals">Hospitais em destaque</p>
            <div id="line"></div>
            <p id="description">Contando com os melhores hospitais do Rio de Janeiro, o plano Ouro dispõe para você as redes mais referenciadas com diversos benefícios para que você tenha um atendimento totalmente personalizado.</p>     
           
            {hospitaisEmDestaque.map((list, index)=>(
                <Photos key={index}>
                    <img id={`hosp${index}`} src={list.foto}></img>  
                    <p id={`text${index}`}> {list.name} <br /> <IconArrown index={index} icon={open ? faAngleDown : faAngleUp} onClick={(()=> openWindow())} /></p> 
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
    

    @media(max-width: 666px){
        width: 380px;
        left: 130px;
    }

    #hospitals{
        position: relative;
        top: 95px;
        left: 104px;
        width: 330px;
        height: 39px;
        text-align: left;
        font: normal normal bold 29px/39px Open Sans;
        letter-spacing: 0px;
        color: #171717;

        @media(max-width: 666px) {
            top: 15px;
            left: 16px;
            width: 251px;
            height: 30px;
            text-align: left;
            font: normal normal bold 22px/30px Open Sans;
            letter-spacing: 0px;
            color: #171717;
        }
    }

    #line {
        position: relative;
        top: 68px;
        left: 103px;
        width: 177px;
        border-bottom: solid 2px #F7B53D;

        @media(max-width: 666px) {
            top: -30px;
            left: 16px;
            width: 158px;
            height: 30px;          
        }
    }

    #description{
        position: relative;
        top: 98px;
        left: 103px;
        width: 1160px;
        height: 54px;text-align: left;
        font: normal normal normal 23px/27px Open Sans;
        letter-spacing: 0px;
        color: #4B4B4B;

        @media(max-width: 666px) {
            top: -30px;
            left: 17px;
            width: 340px;
            height: 100px; 
            text-align: left;
            font: normal normal normal 15px/20px Open Sans;
            letter-spacing: 0px;
            color: #4B4B4B;
        }
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

    @media(max-width: 666px){
        display: ${props => (props.index == 2) ? '' : 'none'}
    }
`

const Photos = styled.div`
    @media(max-width: 666px){
        display: flex;
        flex-direction: column;
    }

    #hosp0{
        position: relative;
        top: 130px;
        left: 95px;
        width: 376px;
        height: 230px;

        @media(max-width: 666px){
            left: 22px;
            width: 340px;
            height: 208px;
            top: -26px;
        }
        
    }

    #text0 {
        position: relative;
        background: white;
        top: 100px;
        left: 95px;
        width: 376px;
        height: 47px;
        text-align: center;
        font: normal normal bold 20px/27px Open Sans;
        letter-spacing: 0px;
        color: #E8BB15;   
        z-index: 1;
        border: 1px solid #8080804a;


        @media(max-width: 666px){
            height: 35px;
            left: 22px;
            width: 340px;
            top: -52px;
            text-align: center;
            font: normal normal bold 15px/20px Open Sans;
            letter-spacing: 0px;
            color: #E8BB15;
        }
    }

    #hosp1{
        position: relative;
        top: -190px;
        left: 495px;
        width: 376px;
        height: 230px;

        @media(max-width: 666px){
            left: 22px;
            width: 340px;
            height: 208px;
            top: -26px;
        }
    }

    #text1 {
        position: relative;
        top: -224px;
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
        border: 1px solid #8080804a;

        @media(max-width: 666px){
            left: 22px;
            width: 340px;
            height: 35px;
            top: -47px;
            text-align: center;
            font: normal normal bold 15px/20px Open Sans;
            letter-spacing: 0px;
            color: #E8BB15;
        }
    }

    #hosp2{
        position: relative;
        top: -514px;
        left: 887px;
        width: 376px;
        height: 230px;

        @media(max-width: 666px){
            top: -33px;
            left: 22px;
            width: 340px;
            height: 208px;
        }
    }

    #text2 {
        position: relative;
        top: -546px;
        left: 886px;
        width: 376px;
        height: 47px;
        background: white;
        text-align: center;
        font: normal normal bold 20px/27px Open Sans;
        letter-spacing: 0px;
        color: #E8BB15;
        z-index: 1;
        border: 1px solid #8080804a;

        @media(max-width: 666px){
            top: -55px;
            left: 21px;
            width: 340px;
            height: 35px;
            text-align: center;
            font: normal normal bold 15px/20px Open Sans;
            letter-spacing: 0px;
            color: #E8BB15;
        }
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

    @media(max-width: 666px){
        width: 380px;
        top: 10px;
        display: flex;
        flex-direction: column;
        right: 430px;
    }

    #colunm {
        height: 380px;
        left: 81px;
    }

    #image {
        position: relative;
        width: 276px;
        top: 69px;
        left: 50px;

        @media(max-width: 666px){
            position: relative;
            width: 158px;
            top: 104px;
            left: 375px;
        }
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

        @media(max-width: 666px){
            width: 340px;
            font: normal normal normal 15px/22px Open Sans;
        }
    }

    #infos{
        position: relative;
        top: -7px;

        @media(max-width: 666px){
            position: relative;
            right: 407px;
            top: 139px;
        }
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

        @media(max-width: 666px){
            font-size: 12px;
        }
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

        @media(max-width: 666px){
            font-size: 12px;
        }
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





