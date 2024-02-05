import styled from 'styled-components'

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  padding: 32px;
  border-radius: 16px;
  gap: 26px;
  background-color: ${({ theme }) => theme.COLORS.BRAND_5};

  h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > div {
    gap: 8px;
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  p {
    max-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.COLORS.ZINC};
  }
`
