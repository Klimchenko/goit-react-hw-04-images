import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Overlay, ModalImage } from './Modal.styled';

const rootModal = document.querySelector('#root-modal');

function Modal({ onClose, children }) {
  const handleClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return createPortal(
    <Overlay onClick={handleClick}>
      <ModalImage>{children}</ModalImage>
    </Overlay>,
    rootModal,
  );
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};

//-------class---------

/* class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    onClose: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleClick}>
        <ModalImage>{this.props.children}</ModalImage>
      </Overlay>,
      rootModal,
    );
  }
}

export default Modal;
 */
