import styled from 'styled-components'
import background from './assets/background.svg'

export const HeroContainer = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-between;
  align-items: space-between;
  gap: 5%;
  padding: 6.25rem 10%;
  background: url(${background});
  background-size: cover;
  background-repeat: no-repeat;

  .hero-right-section {
    display: flex;
    flex-basis: 42.5%;
    flex-grow: 1;
    justify-content: center;
  }

  .hero-left-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-basis: 52.5%;
    flex-grow: 1;
    flex-wrap: wrap;

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
      grid-template-columns: repeat(auto-fill, minmax(15.625rem, 1fr));
      grid-row-gap: 1.25rem;
      align-content: center;
    }
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

  @media (max-width: 600px) {
    max-width: 80%;
    margin-bottom: 2rem;
  }
}
`
