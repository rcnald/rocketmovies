import styled from 'styled-components'

export const Section = styled.section`
  flex-direction: column;
  display: flex;
  gap: 48px;

  > div {
    display: flex;
    align-items: center;
    gap: 18px;
  }

  h1 {
    font-size: 2.25rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  img {
    width: 16px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${({ theme }) => theme.COLORS.GRAY};
    > * {
      color: ${({ theme }) => theme.COLORS.BRAND};
    }
  }

  p {
    color: ${({ theme }) => theme.COLORS.ZINC};
    text-align: justify;
  }
`
