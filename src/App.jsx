import './App.css';
import Mosca from './imagens/mosca.png';

function App() {
  var altura = window.innerHeight
  var largura = window.innerWidth

  console.log(altura, largura)

  var positionX = Math.floor(Math.random() * largura)
  var positionY = Math.floor(Math.random() * altura) 

  var mosca = document.createElement('img')
  mosca.src = Mosca
  mosca.className = 'mosca1'
  document.body.appendChild(mosca)

  mosca.style.left = positionX + 'px'
  mosca.style.top = positionY + 'px'
  mosca.style.position = 'absolute'
}

export default App
