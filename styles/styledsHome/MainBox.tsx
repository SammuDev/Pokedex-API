import styled from "styled-components";

interface ButtonProps {
  space?: string;
};

const MainBox = styled.div<ButtonProps>`
  margin: 150px auto 0;
  width: 25%;
  height: 200px;
`;

export default MainBox;
