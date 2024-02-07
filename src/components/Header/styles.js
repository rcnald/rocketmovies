import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 64px;
  border-bottom: 1px gray solid;

  > div > span:first-child {
    color: ${({ theme }) => theme.COLORS.BRAND};
    font-size: 1.5rem;
    font-weight: bold;
  }
`

export const Container = styled.div`
  ${({ theme }) => theme.UTILS.CONTAINER};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 30px;
  gap: 64px;
`
