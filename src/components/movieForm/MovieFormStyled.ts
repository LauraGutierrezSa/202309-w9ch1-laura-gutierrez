import styled from "styled-components";

const MovieFormStyled = styled.form`
  background-color: ${({ theme }) => theme.colors.dark};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: 5px 10px 10px 0px;
  border-radius: 35px;
  width: 400px;
  padding: 30px;
`;

export default MovieFormStyled;
