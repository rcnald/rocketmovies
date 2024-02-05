import styled from 'styled-components'

export const Li = styled.li`
  display: flex;
  padding: 5px 16px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND[700]};
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: fit-content;
  border-radius: 8px;
`
