import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Button: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    {Icon &&
      <Icon size={20} />
    }
    <input {...rest} />
  </Container>
);

export default Button;
