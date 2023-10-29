export default function CapturaTela()
{
    var altura = window.innerHeight
    var largura = window.innerWidth

    console.log(altura, largura)

    var positionX = Math.floor(Math.random() * largura)
    var positionY = Math.floor(Math.random() * altura) 

    console.log(positionX, positionY)

    var mosca = document.createElement('img')
    mosca.src = './imagens/mosca.png'
    document.body.appendChild(mosca)


}


    
