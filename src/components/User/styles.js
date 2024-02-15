import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const User = styled(Link)`
  display: flex;
  gap: 8px;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-end;
  }

  span {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 0.875rem;
    white-space: nowrap;
  }

  button {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.ZINC};
  }

  img {
    width: 64px;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }
`
