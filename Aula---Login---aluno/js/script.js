function login(){
    const user=document.getElementById('username').value;
    const pass=document.getElementById('password').value;

    if(user ==="" || pass===""){
        alert("Algum campo não foi preenchido");
    }
    else if(user==="adm" && pass==="123456"){
        window.location.href="pages/adm.html";
    }
    else{
        alert("Login ou Senha incorretos");
    }

}