import React from 'react';

import { Input } from './Input';

import { ReactComponent as SearchIcon } from './assets/search.svg';
import { ReactComponent as WarningIcon } from './assets/warning.svg';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Input',
  component: Input,
  tags: ['autodocs']
};

export const Default = {
  args: {
    label: 'Input',
    optionalText: 'Optional',
    placeholder: 'Placeholder'
  }
};

export const Large = {
  args: {
    label: 'Input',
    optionalText: 'Optional',
    placeholder: 'Placeholder',
    inputSize: 'large',
    icon: <SearchIcon />,
    iconPosition: 'right'
  }
};

export const Small = {
  args: {
    label: 'Input',
    optionalText: 'Optional',
    placeholder: 'Placeholder',
    inputSize: 'small',
    icon: <SearchIcon />,
    iconPosition: 'right'
  }
};

export const Mandatory = {
  args: {
    label: 'Input',
    placeholder: 'Placeholder',
    required: true
  }
};

export const WithDescription = {
  args: {
    label: 'Input',
    optionalText: 'Optional',
    description: 'Description for input',
    placeholder: 'Placeholder'
  }
};

export const WithIcon = {
  args: {
    label: 'Input',
    optionalText: 'Optional',
    placeholder: 'Placeholder',
    icon: <SearchIcon />
  }
};

export const WithIconOnRight = {
  args: {
    label: 'Input',
    optionalText: 'Optional',
    placeholder: 'Placeholder',
    icon: <SearchIcon />,
    iconPosition: 'right'
  }
};

export const WithScreenReaderLabel = {
  name: 'Accessible input with hidden label',
  args: {
    label: 'Input',
    labelSrOnly: true,
    optionalText: 'Optional',
    placeholder: 'Placeholder'
  }
};

export const WithError = {
  args: {
    label: 'Input',
    required: true,
    error: true,
    errorMessage: 'There was an error in your input',
    icon: <WarningIcon />,
    iconPosition: 'right'
  }
};

export const Disabled = {
  args: {
    label: 'Input',
    optionalText: 'Optional',
    disabled: true
  }
};
