import styled, { keyframes } from 'styled-components';

export interface DarkProp {
  dark?: boolean
}

export const Container = styled.div<DarkProp>`
  position: relative;
  display: flex;
  box-sizing: border-box;
  padding: 30px;
  height: 140px;
  justify-content: center;
`;

const pulse = keyframes`
  50% { 
    border-width: 30px;
  } 
`;

const spin = keyframes`
  100% { 
    transform: rotate(360deg); 
  } 
`;

export const Box = styled.div<DarkProp>`
  position: relative;
  box-sizing: border-box;
  border: 4px solid ${props => props.dark ? '#306571' : '#faebd7'};
  width: 80px;
  height: 80px;
  animation: ${spin} 2s infinite linear;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    border: 4px solid ${props => props.dark ? '#306571' : '#c6d5c9'};
    width: 60px;
    height: 60px;
    animation: ${pulse} 1.5s infinite ease;
  }
`;
