import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  padding: 2rem 10rem;
  background-color: ${(props) => props.theme['base/background']};

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      justify-content: center;
    }

    .div-logo {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .div-info {
      display: flex;
      justify-content: center;
      gap: 0.75rem;
      height: 2.375rem;
      font-family: Roboto, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;
    }

    .div-btn {
      border: none;
      padding: 0.5rem;
      font-size: 0.777rem;
      font-weight: 400;
      line-height: 130%;
      border-radius: 6px;
    }

    .btn-localizacao {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      background-color: ${(props) => props.theme['product/purple-light']};
      color: ${(props) => props.theme['product/purple-dark']};
    }

    .btn-cart {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.theme['product/yellow-light']};
      color: ${(props) => props.theme['product/yellow-dark']};
      width: 2.375rem;
    }
  }
`
