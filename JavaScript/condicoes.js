

function salvarIdade(){
    let idade = document.querySelector("#inputIdade").value
    idade = parseInt(idade)

    //condições
    if( idade > 17 ) { 
        alert("Você já pode tirar CNH")

    } else{
        alert("Você ainda não tem idade para tira CNH...")
    }

}

function salvarSenha(){
    let senha = document.querySelector("#inputSenha").value
    

    //condições
    if( senha == "admin" ) { 
        alert("Acesso concedido!")

    } else{
        alert("Senha incorreta!")
    }

}

function salvarTermos(){

    let termos = document.querySelector("#inputTermos").checked

    if( termos == false){
        document.querySelector("#textoStatus").innerHTML = "aceite o termo!"

    } else{
    
        document.querySelector("#textoStatus").innerHTML = "termo aceito com sucesso!"
    }
}
function