import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 10%;
  background-color: ${(props) => props.theme['base/background']};

  nav {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 2rem;

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
      font-family: Roboto, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;
      margin: 1px 0px;
    }

    .div-btn {
      border: none;
      border-radius: 6px;
    }

    .btn-localizacao {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      background-color: ${(props) => props.theme['product/purple-light']};
      color: ${(props) => props.theme['product/purple-dark']};
      padding: 0px 10px;
    }

    .btn-cart {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.theme['product/yellow-light']};
      color: ${(props) => props.theme['product/yellow-dark']};
      padding: 0px 10px;
    }
  }
`
