import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import axe from '../lib/axe-helper';

import { Input } from './Input';

describe('Input - Functionality', () => {
  test('Renders component', () => {
    render(<Input placeholder="Hello world!" />);
    expect(screen.getByPlaceholderText('Hello world!')).toBeDefined();
  });

  test('Passes the required property to the input element', () => {
    render(<Input required />);
    expect(screen.getByRole('textbox').hasAttribute('required')).toBeTruthy();
  });

  test('Passes the disabled property to the input element', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox').hasAttribute('disabled')).toBeTruthy();
  });

  test('onChange function on the input element', () => {
    let testValue;
    render(<Input onChange={(e) => (testValue = e.target.value)} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Good Day' } });
    expect(testValue).toBe('Good Day');
  });
});

describe('Input - Accessibility', () => {
  test('Axe scan', async () => {
    const { container } = render(<Input label="Input" />);
    const results = await axe(container);
    expect(results.violations.length).toBe(0);
  });

  test('Accessible description', async () => {
    const { container } = render(<Input label="Input" description="Described input" />);
    /* eslint-disable-next-line @typescript-eslint/no-unused-expressions */
    expect(await axe(container)).toHaveAccessibleDescription;
  });

  test('Accessible error message', async () => {
    const { container } = render(<Input label="Input" error errorMessage="Oh no" />);
    /* eslint-disable-next-line @typescript-eslint/no-unused-expressions */
    expect(await axe(container)).toHaveAccessibleErrorMessage;
  });
});
