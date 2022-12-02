import styled from 'styled-components'
import background from './assets/background.svg'

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  gap: 3.5rem;
  padding: 6.25rem 10rem;
  background: url(${background});

  .hero-left-section {
    display: flex;
    flex-basis: 55%;
    flex-direction: column;
    justify-content: space-between;

    .div-call {
      display: flex;
      flex-direction: column;
      gap: 1rem;
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
        margin-bottom: 4.125rem;
      }
    }

    .div-items {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-content: space-between;
      grid-row-gap: 1.25rem;
      grid-column-gap: 1.25rem;
    }
  }
  .hero-right-section {
    display: flex;
    flex-basis: 45%;
  }
`

export const HeroItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .item-icon {
    display: flex;
    align-items: center;
    border-radius: 50%;
    background-color: ${(props) =>
      props.color ? props.color : props.theme['base/background']};
    padding: 0.5rem;
  }

  .item-text {
    color: ${(props) => props.theme['base/text']};
    font-family: Roboto, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 100%;
  }
`

export const HeroImage = styled.img`
  opacity: 0.88;
  max-width: 100%;
  height: auto;
`
