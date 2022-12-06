import { CoffeesListContainer } from './styles'
import { Coffee } from '../Coffee'

export function CoffeesList() {
  return (
    <CoffeesListContainer>
      <p className="title">Nossos cafés</p>
      <div className="coffees-list">
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
        <Coffee />
      </div>
    </CoffeesListContainer>
  )
}
