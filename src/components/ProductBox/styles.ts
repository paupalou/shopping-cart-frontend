import styled from 'styled-components';

export const breakpoints = {
  sm: 20,
  md: 30,
  lg: 45,
  xl: 60
};

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) =>
    `@media (min-width: ${breakpoints[key]}em) { ${style} }`;
};

export const BoxStyled = styled.article`
  display: flex;
  flex-direction: row-reverse;

  background-color: #faebd7;
  border-bottom: 5px solid #c6d5c9;
  border-radius: 0.25em;
  margin-bottom: 0.5em;
  padding: 0.5em;
  text-align: right;
  align-items: baseline;
  font-weight: bold;

  > span.name {
    color: #306571;
    text-align: left;
    flex-grow: 1;
    font-size: 1.5rem;
  }

  > span.quantity {
    font-size: 0.75rem;
    margin-right: 0.5em;
  }

  > span.price {
    color: #306571;
  }

  > span.actions {
    button {
      width: 1.5em;
      outline: none;
      background-color: #E3FAEC;
      border: 2px solid #c6d5c9;
      font-size: 1.5rem;
      color: #c6d5c9;
      margin-left: 0.25em;
      &:disabled {
          background-color: #faebd7;
      }
      &:not([disabled]) {
        cursor: pointer;
        &:hover {
          background-color: #c6d5c9;
          color: #fe0647;
        }
      }
    }
  }
`;
