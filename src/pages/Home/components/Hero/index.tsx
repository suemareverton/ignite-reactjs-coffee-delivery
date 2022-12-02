import { useTheme } from 'styled-components'
import { HeroContainer, HeroItem, HeroImage } from './styles'
import CoffeeCup from './assets/coffee-cup.svg'

import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export function Hero() {
  const theme = useTheme()

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
        <div className="div-items">
          <HeroItem color={theme['product/yellow-dark']}>
            <span className="item-icon">
              <ShoppingCart
                size={16}
                weight="fill"
                color={theme['base/background']}
              />
            </span>
            <span className="item-text">Compra simples e segura</span>
          </HeroItem>
          <HeroItem color={theme['base/text']}>
            <span className="item-icon" color="red">
              <Package
                size={16}
                weight="fill"
                color={theme['base/background']}
              />
            </span>
            <span className="item-text">Embalagem mantém o café intacto</span>
          </HeroItem>
          <HeroItem color={theme['product/yellow']}>
            <span className="item-icon" color="yellow">
              <Timer size={16} weight="fill" color={theme['base/background']} />
            </span>
            <span className="item-text">Entrega rápida e rastreada</span>
          </HeroItem>
          <HeroItem color={theme['product/purple']}>
            <span className="item-icon" color="green">
              <Coffee
                size={16}
                weight="fill"
                color={theme['base/background']}
              />
            </span>
            <span className="item-text">O café chega fresquinho até você</span>
          </HeroItem>
        </div>
      </div>
      <div className="hero-right-section">
        <HeroImage src={CoffeeCup} alt="Copo de Café" />
      </div>
    </HeroContainer>
  )
}
