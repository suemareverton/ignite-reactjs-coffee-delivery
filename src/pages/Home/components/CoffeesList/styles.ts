import styled from 'styled-components'

export const CoffeesListContainer = styled.div`
  padding: 2rem 10%;
  background-color: ${(props) => props.theme['base/background']};

  .title {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    font-weight: 130%;
    color: ${(props) => props.theme['base/subtitle']};
    margin-bottom: 3.375rem;
  }

  .coffees-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`
