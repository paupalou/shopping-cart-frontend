import styled from 'styled-components';

export const Price = styled.span`
  flex-grow: 1;
  text-align: right;
`;

export const BeforePrice = styled.span`
  text-decoration: line-through;
  color: #c6d5c9;
  margin-right: 0.5em;
`;

export const Item = styled.span<{ total?: boolean }>`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  color: #306571;
  border-bottom: ${(props) => (props.total ? '0px' : '2px dashed #c6d5c9')};
  margin-top: ${(props) => (props.total ? '1em' : '0')};
  font-weight: ${(props) => (props.total ? 'bold' : 'normal')};
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;

export const Quantity = styled.span`
  font-size: 1rem;
  margin-right: 0.5em;
`;

export const Offer = styled.span`
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  text-align: right;
  font-size: 0.75rem;
  font-style: italic;
  margin-top: 0.25em;

  span {
    flex-basis: 100%;
  }

  .name {
    text-decoration: underline;
  }

  .desc {
    font-size: 0.65rem;
  }
`;
