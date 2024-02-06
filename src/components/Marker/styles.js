import styled from 'styled-components'

export const Marker = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${(props) =>
    props.$isTransparent ? 'transparent' : props.theme.COLORS.BACKGROUND[700]};
  padding-block: 16px;
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
`
