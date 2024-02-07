import styled from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => theme.UTILS.CONTAINER};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-block: 30px;
  gap: 64px;

  > button {
    width: fit-content;
  }

  section div {
    &:nth-of-type(2) {
      display: flex;
      gap: 24px;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.COLORS.BLACK};
      padding: 16px;

      button {
        width: fit-content;
      }
    }
  }

  section > div:nth-of-type(1) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    > label:last-child {
      grid-column: 1/3;
    }
  }

  section > div:nth-of-type(3) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  h1 {
    font-size: 36px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 8px;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.ZINC};
    font-size: 20px;
  }

  > div:nth-child(2) {
    background-color: ${({ theme }) => theme.COLORS.BLACK};
  }
`
