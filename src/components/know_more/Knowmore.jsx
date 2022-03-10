import React, { useState, useRef} from 'react';
import styled from 'styled-components';
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import { FaWhatsapp } from 'react-icons/fa';


function KnowMore() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [captchaValid, setCaptchaValid] = useState(false);

    const captcha = useRef(null);

    const onRecaptcha = () => {      
        if (captcha.current.getValue()){
            setCaptchaValid(!captchaValid);
        };
    }

    const addStorage = (object) => {
        let storage = JSON.parse(localStorage.getItem('clients'));
        if (storage === null){
            localStorage.setItem('clients', JSON.stringify([object]));  
          }
          else {
             storage.push(object);
             localStorage.setItem('clients', JSON.stringify(storage));  
          }   
    }

    function onChange () {
        //validationCaptcha();
        if (name.split('').length < 5){
            window.alert('Digite seu nome e sobrenome');
        }else if (phone.split('').length < 9){
            window.alert('Digite um telefone valido');
        }else if (email.indexOf('@') === -1){
            window.alert('Digite um email valido');         
        }else if (captchaValid === false) {
            window.alert('Aceite o recaptcha para continuar')
        }   
        else {
            let object = {name:name, phone: phone, email: email};
            addStorage(object); 
            setName('');
            setEmail('');
            setPhone('');              
        }
    }

    return (
        <Know>
            <p id="text"> Quer saber mais? </p>
            <div id='line'></div>
            <img id='call' src="imgs/phone-call.png" />
            <p id='textcall'> Ainda sobrou alguma dúvida sobre qual o melhor Plano para sua empresa? Envie seus dados e deixe que a NS Benefícios entrará em contato assim que possível. </p>
            <p id='name'> <strong>NOME:</strong> </p>
            <input id='inputname' placeholder='Insira aqui seu nome' onChange={((e)=> setName(e.currentTarget.value))} value={name} />
            <p id='phone'> <strong>TELEFONE:</strong></p>
            <input id='inputphone' type='number' placeholder='Insira aqui seu telefone' onChange={((e)=> setPhone(e.currentTarget.value))} value={phone}/>
            <p id='email'> <strong> E-MAIL:</strong></p>
            <input id='inputemail' placeholder='Insira aqui seu e-mail' onChange={((e)=> setEmail(e.currentTarget.value))} value={email}/>             
            <div id='recaptcha'>
            <ReCAPTCHA 
                ref={captcha}
               sitekey="6LfROsgeAAAAAFX7L0voYgJBApHdcsHP-ynHpjob"
               onChange={onRecaptcha}
               /> 
            </div> 
            <button id='contact' onClick={(() =>onChange())}> <p id='contacttxt'> ENVIAR CONTATO </p></button> 
            <p id='talkus'> FALE CONOSCO AGORA MESMO</p> 
            <p id='number'> 4020-6440 </p>  
            <button id='whatsapp'> <FaWhatsapp id='iconwhats'/>
            <p id='whatstxt'> CLIQUE AQUI PARA ENVIAR UMA MENSAGEM </p></button> 
            <button id='callus'><IconPhone icon={faPhone}/> <p id='callustxt'>CLIQUE AQUI PARA LIGAR</p></button>
            <p id='operation'> Horário de Atendimento de 8h às 17h </p>
        </Know>
    )
}
export default KnowMore;

const Know = styled.div`
    position: relative;
    top: 1px;
    width: 1366px;
    top: -532px;

    #text {
        position: relative;
        top: 10px;
        left: 103px;
        width: 251px;
        height: 39px;
        text-align: left;
        font: normal normal bold 29px/39px Open Sans;
        color: #171717;
    }

    #line{
        position: relative;
        top: -15px;
        left: 103px;
        border: solid 1px #F7B53D;
        width: 171px;
    }

    #call{
        position: relative;
        left: 103px;
        top: 50px;
        width: 138px;
        height: 138px;
    }
    
    #textcall {
        position: relative;
        top: -108px;
        left: 283px;
        width: 807px;
        height: 59px;
        text-align: left;
        font: normal normal normal 21px/27px Open Sans;
        letter-spacing: 0px;
        color: #404040;
    }

    #name{
        position: relative;
        top: 38px;
        left: 104px;
        width: 61px;
        height: 24px;
        text-align: left;
        font: normal normal bold 21px/24px Open Sans;
        letter-spacing: 0px;
        color: #ECC63C;
    }

    #inputname{
        position: relative;
        top: 26px;
        left: 104px;
        width: 544px;
        height: 54px;
        border: 1px solid #D0BC90;
    }

    #phone{
        position: relative;
        top: 28px;
        left: 104px;
        width: 84px;
        height: 22px;
        text-align: left;
        font: normal normal bold 21px/22px Open Sans;
        letter-spacing: 0px;
        color: #ECC63C;
    }

    #inputphone{
        position: relative;
        top: 13px;
        left: 104px;
        width: 544px;
        height: 54px;
        border: 1px solid #D0BC90;
    }

    #email{
        position: relative;
        top: 14px;
        left: 104px;
        width: 100px;
        height: 22px;
        text-align: left;
        font: normal normal bold 21px/22px Open Sans;
        letter-spacing: 0px;
        color: #ECC63C;
    }

    #inputemail {
        position: relative;
        top: 0px;
        left: 104px;
        width: 544px;
        height: 54px;
        border: 1px solid #D0BC90;
    }

    #recaptcha{
        position: relative;
        top: 27px;
        left: 328px;
        width: 214px;
        height: 63px;
    }

    #contact{
        position: relative;
        top: 65px;
        left: 245px;
        width: 289px;
        height: 43px;
        background: #F7B53D 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 25px;
        border: white;
        cursor: pointer;
    }

    #contacttxt{
        position: relative;
        text-align: center;
        width: 289px;
        height: 43px;
        font: normal normal 600 19px/20px Open Sans;
        letter-spacing: 3px;
        color: #FFFFFF;
        margin-top: 11px;
    }

    #talkus{
        position: relative;
        left: 806px;
        top: -357px;
        width: 300px;
        height: 23px;
        text-align: center;
        font: normal normal bold 18px/23px Open Sans;
        letter-spacing: 0px;
        color: #4B4B4B;
    }
    

    #number{
        position: relative;
        top: -387px;
        left: 889px;
        width: 142px;
        height: 39px;
        text-align: center;
        font: normal normal bold 29px/39px Open Sans;
        letter-spacing: 0px;
        color: #E8BB15;
    }

    #whatsapp{
        position: relative;
        top: -422px;
        left: 770px;
        width: 407px;
        height: 90px;
        background: #F7B53D 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 12px;
        border: white;
        #iconwhats {
            width: 53px;
            height: 58px;
            background: #F7B53D 0% 0% no-repeat padding-box;
            position: relative;
            right: 121px;
            top: 14px;
            color: white;
        }
    }

    #whatstxt{
        margin-top: -39px;
        margin-left: 137px;
        width: 240px;
        height: 44px;
        color: var(--unnamed-color-ffffff);
        text-align: left;
        font: normal normal bold 18px/22px Open Sans;
        letter-spacing: 0px;
        color: #ffffff;
    }

    #callus{    
        position: relative;
        top: -269px;
        left: 363px;
        width: 407px;
        height: 90px;
        background: #F7B53D 0% 0% no-repeat padding-box;
        box-shadow: 0px 3px 6px #00000029;
        border-radius: 12px;
        border: white;
    }

    #callustxt{
        width: 247px;
        margin-left: 127px;
        margin-top: -38px;
        height: 22px;
        text-align: center;
        font: normal normal bold 18px/22px Open Sans;
        letter-spacing: 0px;
        color: #FFFFFF;
    }

    #operation{
        position: relative;
        top: -318px;
        left: 856px;
        width: 248px;
        height: 18px;
        text-align: center;
        font: normal normal normal 13px/18px Open Sans;
        letter-spacing: 0px;
        color: #A7A7A7;
    }
`

const IconPhone = styled(FontAwesomeIcon)`
    margin-top: 16px;
    margin-left: -255px;
    color: white;
    width: 48px;
    height: 48px;   
`
