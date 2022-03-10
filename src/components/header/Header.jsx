import styled from 'styled-components';
import Menu from "../menu/Menu";

function Header () {
    
    return (
      <Head>  
        <Menu/>
          <img src='imgs/painel.png'></img>
          <div id='text'> <p id='txtconfort'>Conforto e qualidade para levar bem-estar com alto padrão de atendimento a seus funcionários.</p></div>
          <div id="line"></div>            
          <p id='planoouro'>Conheça o plano Ouro da Porto Seguro Saúde.</p>
          <div id='apartir'> <p id='de'> A partir de </p></div> 
          <div id='reais'> <p id='real'> R$ </p> </div>  
          <div id='duzentos'> <p id='cinquenta'> 255 </p> </div> 
          <div id='sesenta'> <p id='cinco'> ,65* </p> </div>   
          <button id='buttonver'><strong> VER MAIS</strong></button>
          <div id='littleletters'>*Valor referente ao plano Ouro Copar Q (ANS: 481.277/18-8) de 3 à 9 vidas, com 20% de copart. com faixa etária entre 0 e 18 anos. Sem IOF. Promoção válida até 30 de abril de 2021.</div>
      </Head>

    )
}

export default Header;

const Head = styled.div`
  position: relative;
  border: solid 1px #00000030;
  width: 1366px;
  height: 676px;

#text{
  position: absolute;
  top: 206px;
  width: 438px;
  height: 275px;
  left: 32px;
}

#txtconfort {
  color: white;
  text-align: left;
  font: normal normal bold 44px/55px Open Sans;
  text-shadow: 0px 3px 6px #00000017;
}

#line {
  position: absolute;
  top: 531px;
  left: 35px;
  width: 163px;
  border-bottom: solid 1px white;
}

#planoouro {
  position: absolute;
  top: 521px;
  left: 32px;
  width: 327px;
  height: 68px;
}

p{
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-25)/var(--unnamed-line-spacing-34) var(--unnamed-font-family-open-sans);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-ffffff);
  text-align: left;
  font: normal normal normal 28px/37px Open Sans;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
}


#de {
  position: absolute;
  top: 609px;
  left: 33px;
  width: 102px;
  height: 30px;
  color: var(--unnamed-color-ffffff);
  text-align: left;
  font: italic normal normal 22px/34px Open Sans;
  letter-spacing: 0px;
  color: #FFFFFF;
}

#reais {
  position: absolute;
  top: 607px;
  left: 152px;
  width: 43px;
  height: 47px;
}

#R$ {
  text-align: left;
  font: normal normal bold 35px/54px Open Sans;
  letter-spacing: 0px;
  color: #FFFFFF;
}

#duzentos {
  position: absolute;
  top: 598px;
  left: 199px;
  width: 92px;
  height: 74px;
}

#cinquenta {
  text-align: left;
  font: normal normal bold 54px/43px Open Sans;
  letter-spacing: 0px;
  color: #FFFFFF;
}

#sesenta {
  position: absolute;
  top: 609px;
  left: 291px;
  width: 59px;
  height: 41px;
}

#cinco {
  text-align: left;
  font: normal normal bold 30px/43px Open Sans;
  letter-spacing: 0px;
  color: #FFFFFF;
}

#buttonver{
  position: absolute;
  color: white;
  font-size: 18px;
  top: 607px;
  left: 378px;
  width: 183px;
  height: 62px;
  background: #F7B53D 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000008A;
  border-radius: 31px;
  border: white;
  opacity: 1;
}

#littleletters{
  position: absolute;
  top: 712px;
  left: 32px;
  width: 476px;
  height: 47px;
  text-align: left;
  font: normal normal normal 12px/15px Open Sans;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 0.5;
}
`