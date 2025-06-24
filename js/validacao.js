function validacao(){
    
    //testar se o campo nome encontra-se vazio
    var nome = document.querySelector('#exampleInputName1').value;
    if(nome==''||nome==null){ 
        document.querySelector(".nome").classList.add("nomeinvalido");
        document.querySelector(".nomeform").style.border="2px solid #B50000";     
        event.preventDefault();   
    }
     
    //testar se o campo email encontra-se vazio
    var email = document.querySelector('#exampleInputEmail1').value;
    var validaremail =/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if((email==''|| email==null)){
        document.querySelector(".email").classList.add("emailinvalido");
        document.querySelector(".emailform").style.border="2px solid #B50000";
        event.preventDefault(); 
    }else if(!validaremail.test(email) && (email!='')){ 
        document.querySelector(".correctemail").style.display="block";
        document.querySelector(".emailform").style.border="2px solid #B50000"; 
        event.preventDefault(); 
    }else{
        document.querySelector(".correctemail").style.display="none";
    }       

    //testar se o campo assunto encontra-se vazio
    var assunto = document.querySelector('#exampleInputSubject1').value;
    if(assunto==''|| assunto==null){
        document.querySelector(".subject").classList.add("subjectinvalido");
        document.querySelector(".subjectform").style.border="2px solid #B50000";
        event.preventDefault(); 
    }
    
    //testar se o campo mensagem encontra-se vazio
    var mensagem = document.querySelector('#exampleFormControlTextarea1').value;
    if (mensagem==''|| mensagem==null){
        document.querySelector(".msg").classList.add("msginvalido");
        document.querySelector(".msgform").style.border="2px solid #B50000";
        event.preventDefault(); 
    }
    
    return true;
}

function reinicionome(){

    //retirar a cor do alerta e reiniciar o campo nome
    document.querySelector(".nome").classList.remove("nomeinvalido");
    document.querySelector(".nomeform").style.border="1px solid #0e0e0e";
}

function reinicioemail(){

    //retirar a cor do alerta e reiniciar o campo e-mail
    document.querySelector(".email").classList.remove("emailinvalido");
    document.querySelector(".emailform").style.border="1px solid #0e0e0e";
    document.querySelector(".correctemail").style.display="none";  
}

function reinicioassunto(){

    //retirar a cor do alerta e reiniciar o campo assunto
    document.querySelector(".subject").classList.remove("subjectinvalido");
    document.querySelector(".subjectform").style.border="1px solid #0e0e0e";
    
}

function reiniciomensagem(){

    //retirar a cor do alerta e reiniciar o campo mensagem
    document.querySelector(".msg").classList.remove("msginvalido");
    document.querySelector(".msgform").style.border="1px solid #0e0e0e";
    
}


