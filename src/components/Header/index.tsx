import { HeaderContainer } from './styles'

import { NavLink } from 'react-router-dom'
import appLogo from '../../assets/app-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <div className="div-logo">
          <NavLink to="/" title="Home">
            <img src={appLogo} alt="" />
          </NavLink>
        </div>
        <div className="div-info">
          <div className="div-btn btn-localizacao">
            <MapPin size={18} weight="fill" /> Porto Alegre, RS
          </div>
          <NavLink to="/checkout" title="Checkout">
            <div className="div-btn btn-cart">
              <ShoppingCart size={18} weight="fill" />
            </div>
          </NavLink>
        </div>
      </nav>
    </HeaderContainer>
  )
}
