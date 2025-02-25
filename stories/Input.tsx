import React, { ReactElement, SVGProps } from 'react';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import './input.scss';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  labelSrOnly?: boolean;
  optionalText?: string;
  description?: string;
  error?: boolean;
  errorMessage?: string;
  errorMessageId?: string;
  icon?: ReactElement<SVGProps<SVGSVGElement>>;
  iconPosition?: 'left' | 'right';
  inputSize?: 'large' | 'medium' | 'small';
}

export const Input = ({
  className,
  label,
  labelSrOnly = false,
  optionalText,
  description,
  error = false,
  errorMessage,
  errorMessageId,
  icon,
  iconPosition = 'left',
  inputSize = 'medium',
  ...props
}: InputProps) => {
  const inputClasses: string = classNames('o2-input', {
    'o2-input--large': inputSize === 'large',
    'o2-input--medium': inputSize === 'medium',
    'o2-input--small': inputSize === 'small',
    'o2-input--icon-left': !!icon && iconPosition === 'left',
    'o2-input--icon-right': !!icon && iconPosition === 'right',
    'o2-input--error': error
  });

  const iconElement = icon
    ? React.cloneElement(icon, {
        className: classNames('o2-input__icon', {
          'o2-input__icon--large': inputSize === 'large',
          'o2-input__icon--medium': inputSize === 'medium',
          'o2-input__icon--small': inputSize === 'small',
          'o2-input__icon--left': iconPosition === 'left',
          'o2-input__icon--right': iconPosition === 'right',
          'o2-input__icon--error': error
        })
      })
    : undefined;

  const idInput: string = props.id || 'input-' + uuidv4();
  const idDescription: string = description ? idInput + '-description' : '';
  const idErrorMessage: string = errorMessageId || idInput + '-error';

  return (
    <div className={classNames('o2-input__wrapper', className)}>
      {!!label && (
        <label
          className={classNames('o2-input__label', { 'sr-only': labelSrOnly })}
          htmlFor={idInput}
        >
          {label}
          {optionalText && <span className="o2-input__label--optional"> {optionalText}</span>}
          {props.required && <span className="o2-input__label--mandatory"> *</span>}
        </label>
      )}

      {!!description && (
        <p id={idDescription} className="o2-input__description">
          {description}
        </p>
      )}

      <div className="o2-input__wrapper-inner">
        <input
          className={inputClasses}
          aria-describedby={idDescription}
          aria-invalid={error}
          aria-disabled={props.disabled}
          aria-errormessage={idErrorMessage}
          {...props}
          id={idInput}
        />
        {iconElement}
      </div>

      {error && !!errorMessage && !props.disabled && (
        <p className="o2-input__error-message" id={idErrorMessage} role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
};
