function calcularCursos(){
const cn = document.getElementById('natureza').value;
const ch = document.getElementById('humanas').value;
const cl = document.getElementById('linguagens').value;
const m = document.getElementById('matematica').value;
const r = document.getElementById('redacao').value;

const media=(parseInt(cn)+parseInt(cn)+parseInt(ch)+parseInt(cl)+parseInt(m)+parseInt(r))/5;

    if(media>=750){
        alert("Você passaria em MEDICINA,ENGENHARIA AERONÁUTCA,DIREITO");
    }
    else if(media>=600 && media<750){
        alert("Você passaria em ENGENHARIA CIVIL,ADMNISTRAÇÃO,PSICOLOGIA");
    }
    else if(media>=450 && media<600){
        alert("Você passaria em PEDAGOGIA,LETRAS,CIÊNCIAS SOCIAIS");
    }
    else if(media<450){
        alert("Infelizmente sua nota está abaixo da nota de corte mínima");
    }
    else{
        alert("Inválido");
    }
}