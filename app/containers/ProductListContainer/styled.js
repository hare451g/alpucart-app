import styled from 'styled-components/native';

const ListContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  align-content: space-around;
`;

const ListItemWrapper = styled.View`
  width: 50%;
`;

export {ListContainer, ListItemWrapper};
