import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 64px;
  border-bottom: 1px gray solid;

  > span {
    color: ${({ theme }) => theme.COLORS.BRAND};
    font-size: 1.5rem;
    font-weight: bold;
  }
`
