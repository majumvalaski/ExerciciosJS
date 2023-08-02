
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    if (hora>=0 && hora<12){
        //Bom dia
        msg.innerHTML = `Bom dia! Agora são ${hora} horas` 
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora>=12 && hora<18){
        //Boa tarde
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas`
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        //Boa noite
        msg.innerHTML = `Boa noite! Agora são ${hora} horas`
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}