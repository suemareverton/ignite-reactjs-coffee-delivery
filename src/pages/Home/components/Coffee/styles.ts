import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base/card']};
  border-radius: 6px 36px;

  .div-tags {
    display: flex;
    justify-content: center;
    gap: 0.25rem;
    margin-bottom: 2rem;

    span {
      background-color: ${(props) => props.theme['product/yellow-light']};
      color: ${(props) => props.theme['product/yellow-dark']};
      border-radius: 100px;
      padding: 0.25rem 0.5rem;
      font-family: Roboto, sans-serif;
      font-weight: 700;
      font-size: 0.625rem;
      line-height: 130%;
      text-transform: uppercase;
    }
  }

  .title {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base/subtitle']};
    margin: 0 1.25rem;
    margin-bottom: 0.5rem;
  }

  .description {
    font-family: Roboto, sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    text-align: center;
    color: ${(props) => props.theme['base/label']};
    margin: 0 1.25rem;
  }
`
