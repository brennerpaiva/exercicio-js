function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora < 12) {
        //Bom dia
        img.src = "imagens/manhã-pq.png"
        document.body.style.background = "rgb(202, 172, 127)"
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = "imagens/tarde-pq.png"
        
    } else {
        //Boa noite
        img.src = "imagens/noite-pq.png"
        document.body.style.background = "#515154"
    }
}
