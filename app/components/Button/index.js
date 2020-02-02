import React from 'react';

import {Container, Label} from './styled';

function Button({isOutline, children, ...rest}) {
  return (
    <Container isOutline={isOutline} {...rest}>
      <Label isOutline={isOutline}>{children}</Label>
    </Container>
  );
}

export default Button;
