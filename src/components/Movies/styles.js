import styled from 'styled-components'

export const Movies = styled.section`
  display: flex;
  flex-direction: column;

  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  button {
    max-width: 200px;
  }
`
