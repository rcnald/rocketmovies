import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${(props) =>
    props.$isTransparent ? 'transparent' : props.theme.COLORS.BRAND};
  padding: 16px;
  border-radius: 10px;
  border: none;
  width: 100%;
  font-weight: 500;
  justify-content: center;
  white-space: nowrap;
  color: ${(props) =>
    props.$isTransparent ? props.theme.COLORS.BRAND : 'currentcolor'};
`
