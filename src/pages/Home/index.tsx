import { HomeContainer } from './styles'
import { Hero } from './components/Hero'
import { Coffees } from './components/Coffees'

export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <Coffees />
    </HomeContainer>
  )
}
