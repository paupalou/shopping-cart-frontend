import React from 'react';
import ReactDOM from 'react-dom';

import { Overlay, Wrapper, Content, CloseButton } from './styles';

interface IModalProps {
  isShowing: boolean;
  hide: () => void;
  header?: string;
}

const Modal: React.FC<IModalProps> = ({ children, isShowing, header, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <Overlay />
          <Wrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
            <Content>
              <div className="header">
                <span className="title">{header}</span>
                <CloseButton type="button" aria-label="Close" onClick={hide}>
                  <span aria-hidden="true">&times;</span>
                </CloseButton>
              </div>
              {children}
            </Content>
          </Wrapper>
        </>,
        document.body
      )
    : null;

export default Modal;
