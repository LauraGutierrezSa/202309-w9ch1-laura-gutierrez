import styled from "styled-components";

const AppStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #b6cdbd;

  .container {
    &-navigation-bar {
      display: flex;
      justify-content: center;
      gap: 30px;
      font-size: 18px;
      color: #fff;
      text-transform: uppercase;
      padding: 30px;
    }
  }
`;

export default AppStyled;
