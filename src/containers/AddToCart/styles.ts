import styled from 'styled-components';

export const AddToCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3rem;
  outline: none;
  background-color: #c6d5c9;
  border: 2px solid #faebd7;
  border-radius: 0.25em;
  font: inherit;
  font-size: 1.25rem;
  font-weight: bold;
  color: #306571;
  &:disabled {
    background-color: #306571;
    color: #c6d5c9;
  }
  &:not([disabled]) {
    cursor: pointer;
    &:hover {
      background-color: #E3FAEC;
      border: 2px solid #c6d5c9;
    }
  }

  svg {
    width: 2em;
    height: 2em;
    fill: #A53A4C;
    margin-right: 0.5em;
  }
`;
