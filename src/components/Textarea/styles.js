import styled from 'styled-components'

export const Label = styled.label`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND[800]};
  width: fit-content;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 16px;
  color: ${({ theme }) => theme.COLORS.ZINC};

  span {
    ${({ theme }) => theme.UTILS.SRONLY}
  }

  textarea {
    background-color: transparent;
    border: 0;
    color: ${({ theme }) => theme.COLORS.ZINC};
    resize: none;
    min-height: 200px;
  }
`
