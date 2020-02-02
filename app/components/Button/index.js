import React from 'react';

import {Container, Label} from './styled';

function Button({isOutline, isNaked, children, ...rest}) {
  return (
    <Container isOutline={isOutline} isNaked={isNaked} {...rest}>
      <Label isOutline={isOutline} isNaked={isNaked}>
        {children}
      </Label>
    </Container>
  );
}

export default Button;
