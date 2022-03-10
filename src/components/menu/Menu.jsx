import styled from 'styled-components'

function Menu () {
    return (
    <Options>
        
        <div id='imgtext'> 
            <img id='norte' src='imgs/norte_sul.png'></img>
            <img id='porto' src='imgs/porto_seguro.png' />
            <div id='sobre'><p id="txt">Sobre</p></div>
            <div id='hospitais'> <p id="txt">Hospitais </p></div>
            <div id='beneficios'> <p id="menu">Beneficios</p></div>
            <div id='servicos'><p id="menu">Serviços Especiais</p></div>
            <div id='contato'><p id="menu">Contato</p></div>
        </div> 
    </Options>
    )
}

export default Menu;

const Options = styled.div`
    position: fixed;
    z-index: 2;
    background: white;
    height: 94px;
    left: 9px;
    width: 1367px;

#text {
    
}

#norte{
    position: absolute;
    background: white;
    top: 24px;
    left: 50px;
    width: 60px;
    height: 43px;
    background: transparent url('img/logo-Norte-a-Sul.png') 0% 0% no-repeat padding-box;
    opacity: 1;
}

#porto {
    position: absolute;
    background: white;
    top: 30px;
    left: 165px;
    width: 98px;
    height: 31px;
}

#sobre {
    display: flex;
    align-items: center;
    position: absolute;
    top: 32px;
    left: 732px;
    width: 56px;
    height: 27px;
}

#hospitais {
    position: absolute;
    display: flex;
    align-items: center;
    margin-left: 10px;
    top: 32px;
    left: 812px;
    width: 90px;
    height: 27px;
}

#beneficios {
    position: absolute;
    display: flex;
    align-items: center;
    margin-left: 10px;
    top: 32px;
    left: 926px;
    width: 100px;
    height: 27px;
}

#servicos {
    position: absolute;
    display: flex;
    align-items: center;
    margin-left: 10px;
    top: 32px;
    left: 1050px;
    width: 172px;
    height: 27px;
}

#contato {
    display: flex;
    align-items: center;
    position: absolute;
    margin-left: 20px;
    top: 32px;
    left: 1246px;
    width: 78px;
    height: 27px;
}

#txt {
    text-align: left;
    font: normal normal 600 20px/27px Open Sans;
    letter-spacing: 0px;
    color: #D6A430;
    opacity: 1;
}

#menu {
    text-align: center;
    font: normal normal 600 20px/27px Open Sans;
    letter-spacing: 0px;
    color: #D6A430;
    opacity: 1; 
}


`