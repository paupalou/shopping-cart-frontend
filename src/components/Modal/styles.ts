import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  box-sizing: border-box;
  padding: 1rem;
`;

export const Content = styled.div`
  z-index: 100;
  box-sizing: border-box;
  background: white;
  position: relative;
  margin: 0 auto;
  border-radius: 0.25em;
  max-width: 500px;
  padding: 2rem;
  min-height: 50%;

  > .header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 1em;
    .title {
      flex-grow: 1;
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
    }
  }
`;

export const CloseButton = styled.button`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  opacity: 0.3;
  cursor: pointer;
  border: none;
`;
