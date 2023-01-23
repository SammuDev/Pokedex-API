import styled, { css } from "styled-components";

type Props = {
  val?: boolean;
}

const Logo = styled.img.attrs({
  src:"https://cdn.riderize.com/miscellaneous/logo-pokedex.png",
  alt:"Logo"
})<Props>`
  width: 200px;
  margin-left: 40px;
  ${props => props.val && css`
    margin-top: 40px;
    margin-left: 0;
  `};
`;

export default Logo;
