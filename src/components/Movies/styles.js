import styled from 'styled-components'

export const Movies = styled.section`
  display: flex;
  flex-direction: column;

  > div > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  div + div {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  button {
    max-width: 200px;
  }
`

export const Container = styled.div`
  ${({ theme }) => theme.UTILS.CONTAINER};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-block: 30px;
  gap: 64px;
`
