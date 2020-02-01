import React from 'react';

import {Container, Label} from './styled';

function Button({isOutline, children}) {
  return (
    <Container isOutline={isOutline}>
      <Label isOutline={isOutline}>{children}</Label>
    </Container>
  );
}

export default Button;
