import styled from 'styled-components/native';

import { darken } from 'polished';

import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 20px;
  background-color: black;
  width: 100%;
  height: 100%;
`;

export const ListContainer = styled.View`
  min-height: 358px;
`;

export const ProductContainer = styled.View`
  width: 220px;
  padding: 10px;
  background-color: #fff;
  margin-left: 15px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  color: #222;
  font-size: 16px;
  line-height: 21px;
  margin: 10px 4px auto 10px;
`;

export const ProductPrice = styled.Text`
  color: #222;
  font-size: 21px;
  font-weight: bold;
  margin-left: 10px;
`;

export const SubmitButton = styled(RectButton)`
  flex-direction: row;
  width: 200px;
  height: 42px;
  margin-top: 10px;
  background-color: #27ae60;
  border-radius: 4px;
  align-items: center;
`;

export const CartButtonContainer = styled.View`
  height: 100%;
  width: 53px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${darken(0.05, '#27ae60')};
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
`;

export const CartCount = styled.Text`
  color: #fff;
  font-size: 14px;
  text-align: center;
  margin-left: 5px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  margin-left: 36px;
  text-transform: uppercase;
`;
