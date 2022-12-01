import styled from 'styled-components'
import background from './assets/background.svg'

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  gap: 3.5rem;
  height: 34rem;
  padding: 6.25rem 10rem;
  background: url(${background});

  .hero-left-section {
    display: flex;
    flex-basis: 55%;
    flex-direction: column;
    justify-content: space-between;
    background-color: cyan;

    .div-call {
      .text-title {
        font-family: 'Baloo 2', cursive;
        font-size: 3rem;
        font-weight: 800;
        line-height: 3.9rem;
        color: ${(props) => props.theme['base/title']};
      }
      .text-subtitle {
        font-family: Roboto, sans-serif;
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.625rem;
        color: ${(props) => props.theme['base/subtitle']};
      }
    }

    .div-items {
      color: blue;
    }
  }
  .hero-right-section {
    display: flex;
    flex-basis: 45%;
    background-color: red;
  }
`
