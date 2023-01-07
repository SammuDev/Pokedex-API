import styled, { withTheme } from 'styled-components';

const Bolas = styled.div`
  border: 1px solid #000;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  transition: .5s;
  &:hover {
    color: #fff;
    background: #2e2e2e;
  }
`;
export default withTheme(Bolas);
