import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Box } from '../../Box';
import { Modal } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return <Modal.Backdrop {...modal}>Toggle</Modal.Backdrop>;
    }
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      function Component() {
        const modal = Modal.useState({ unstable_hiddenId: 'test' });
        return (
          <Modal.Backdrop use={Box} {...modal}>
            Toggle
          </Modal.Backdrop>
        );
      }
      const { container } = render(<Component />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Modal.Backdrop props', () => {
      const { result } = renderHook(() => {
        const modal = Modal.useState({ unstable_hiddenId: 'test' });
        return Modal.Backdrop.useProps(modal);
      });
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      function Component() {
        const modal = Modal.useState({ unstable_hiddenId: 'test' });
        return (
          <Modal.Backdrop {...modal}>
            {modalBackdropProps => <Box {...modalBackdropProps}>Hello world</Box>}
          </Modal.Backdrop>
        );
      }
      const { container } = render(<Component />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Modal.Backdrop.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return (
        <Modal.Backdrop overrides={{ Modal: { Backdrop: { base: { backgroundColor: 'red' } } } }} {...modal}>
          Toggle
        </Modal.Backdrop>
      );
    }
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Modal.Backdrop.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return <Modal.Backdrop {...modal}>Toggle</Modal.Backdrop>;
    }
    const { container } = render(<Component />, {
      theme: { Modal: { Backdrop: { base: { backgroundColor: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return <Modal.Backdrop {...modal}>Toggle</Modal.Backdrop>;
    }
    const { container } = render(<Component />, {
      theme: { Modal: { Backdrop: { defaultProps: { className: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});