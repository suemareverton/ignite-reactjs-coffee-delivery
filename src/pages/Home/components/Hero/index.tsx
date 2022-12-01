import { HeroContainer } from './styles'
import CoffeeCup from './assets/coffee-cup.svg'

export function Hero() {
  return (
    <HeroContainer>
      <div className="hero-left-section">
        <div className="div-call">
          <p className="text-title">
            Encontre o café perfeito para qualquer hora do dia
          </p>
          <p className="text-subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <div className="div-items">Item 1 Item 2 Item 3 Item 4</div>
      </div>
      <div className="hero-right-section">
        {/* <img src={CoffeeCup} alt="Copo de Café" /> */}
        <text>Imagem do Copo de Café</text>
      </div>
    </HeroContainer>
  )
}
