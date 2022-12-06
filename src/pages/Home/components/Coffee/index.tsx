import { CoffeeContainer } from './styles'

export function Coffee() {
  return (
    <CoffeeContainer>
      <div className="div-tags">
        <span>Tradicional</span>
        <span>Leite</span>
      </div>
      <p className="title">Nome do Café</p>
      <p className="description">Descrição do café</p>
    </CoffeeContainer>
  )
}
