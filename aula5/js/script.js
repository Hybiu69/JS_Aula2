function ternario(){
    const valor=document.getElementById('ternario').value;
    (valor==="1")?alert('o valor é igual a 01'):alert('o valor é igual a 02');
}

function pesquisar(){
    const nome =document.getElementById('nome').value;
    const img =document.getElementById('imagem');

    if(nome==="Digimon"||nome==="digimon"){
        img.setAttribute('src','img/digimon.png');
        window.location.href="http://google.com.br"
    }
    else if(nome==="dragon ball"||nome==="Dragon ball"||nome==="Dragon Ball"){
        img.setAttribute('src','img/dragonballgt.png');
    }
    else{
        img.setAttribute('src','img/duvida.png');
    }
}