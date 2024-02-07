import styled from 'styled-components'

export const Main = styled.main`
  position: relative;
  display: grid;
  place-items: center;
  grid-template-rows: 144px 1fr;

  > div {
    display: flex;
    grid-column: 1/3;
    grid-row: 1/2;

    button {
      width: fit-content;
    }
  }

  img {
    width: 186px;
    border-radius: 50%;
  }

  > form div:first-child {
    width: fit-content;
    position: relative;
    margin-bottom: 64px;
  }

  img + button {
    width: fit-content;
    border-radius: 50%;
    padding: 14px;
    position: absolute;
    top: 140px;
    left: 130px;
  }

  fieldset + button {
    margin-top: 24px;
  }

  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 8px;
  }

  fieldset + fieldset {
    margin-top: 24px;
  }

  form {
    max-width: 340px;
    display: grid;
    justify-items: center;
    grid-column: 1/3;
    grid-row: 1/3;
    margin-top: 50px;

    &::before {
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.COLORS.BRAND_5};
      width: 100%;
      height: 100%;
      grid-row: 1/2;
      grid-column: 1/3;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
`

export const Container = styled.div`
  ${({ theme }) => theme.UTILS.CONTAINER};
  align-items: start;
  justify-content: start;
`
