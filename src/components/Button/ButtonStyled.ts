import styled from "styled-components";

const ButtonStyled = styled.button`
  border: ${({ theme }) => theme.colors.light};
  border-radius: 15px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.accent};
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
  padding: 15px;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: 19px;
`;

export default ButtonStyled;
