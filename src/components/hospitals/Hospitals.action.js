// Abrir a div oculta/fechar a div visivel;
export function OpenDiv (open){
    let api = document.querySelector('#api');
    let div = document.querySelector('#div');
    if (open === false){
        api.style.display = 'flex';
        div.style.height = '2055px';
    } else {
        api.style.display = 'none';
        div.style.height = '1135px';
    }
}

// Pegar apenas os dados dos três "hospitais" da api;
export const threeHospitals = (list) => {
    let newList = [];
        for (let i = 0; i < 3; i++) {
            newList.push(list[i]);
        }     
    return newList ;
}

//Hospitais destaque;
export const hospitaisEmDestaque = [{
    name: 'Hospital Vitória Barra', foto:'imgs/grupo de máscara 2.png'}, 
    {name: 'Hospital Perinatal Laranjeiras', foto:'imgs/grupo de máscara 7.png'},
    {name: 'Hospital Copa D Or', foto: 'imgs/grupo de máscara 6.png'}]   