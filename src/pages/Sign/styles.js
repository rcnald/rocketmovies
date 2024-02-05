import styled from 'styled-components'
import backgroundImg from '../../assets/cinema.jpg'

export const Container = styled.div`
  width: 100vw;
  min-height: 100svh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  display: flex;
  max-width: 340px;
  width: 100%;
  justify-content: center;
  margin-inline: 8.375rem;
  gap: 3rem;
  flex-direction: column;

  h1 {
    color: ${({ theme }) => theme.COLORS.BRAND};
    font-size: 3rem;
    font-weight: bold;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.5rem;
    font-weight: 500;
  }

  span {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    > div {
      display: flex;
      flex-direction: column;
      margin-top: 8px;
    }
  }
`

export const Image = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`
