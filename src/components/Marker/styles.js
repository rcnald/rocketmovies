import styled from 'styled-components'

export const Marker = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${(props) =>
    props.$isTransparent ? 'transparent' : props.theme.COLORS.BACKGROUND[700]};
  padding: 16px;
  border-radius: 10px;
  border: none;
  width: 100%;
  font-weight: 500;
  border: 2px
    ${(props) =>
      props.$isTransparent ? props.theme.COLORS.GRAY : 'transparent'}
    dashed;
  justify-content: center;
  white-space: nowrap;
  color: ${(props) =>
    props.$isTransparent ? props.theme.COLORS.GRAY : 'white'};

  > * {
    color: ${(props) => props.theme.COLORS.BRAND};
  }

  span {
    ${({ theme }) => theme.UTILS.SRONLY}
  }

  input {
    display: ${(props) => (props.$isTransparent ? 'flex' : 'none')};
    background: transparent;
    border: none;
    color: ${(props) =>
      props.$isTransparent ? props.theme.COLORS.GRAY : 'white'};
  }
`
