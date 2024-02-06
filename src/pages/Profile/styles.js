import styled from 'styled-components'

export const Main = styled.main`
  display: grid;
  place-content: center;

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
    gap: 8px;
  }

  fieldset + fieldset {
    margin-top: 24px;
  }

  form {
    max-width: 340px;
    display: grid;
    justify-items: center;
  }
`
