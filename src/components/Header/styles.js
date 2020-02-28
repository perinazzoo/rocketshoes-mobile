import styled from 'styled-components/native';

export const Container = styled.View`
  height: 64px;
  width: 100%;
  background-color: black;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const Logo = styled.Image`
  width: 185px;
  height: 24px;
  margin-left: 20px;
`;

export const CartContainer = styled.View`
  margin-right: 20px;
  flex-direction: row;
  padding: 5px 10px 0 0;
`;

export const CartCount = styled.View`
  background-color: #27ae60;
  width: 18px;
  height: 18px;
  border-radius: 9px;

  text-align: center;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  right: 0;
`;

export const CartCountText = styled.Text`
  font-size: 12px;
  color: #fff;
`;
