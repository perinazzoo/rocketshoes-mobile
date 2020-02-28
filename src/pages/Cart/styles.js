import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 20px;
  background-color: black;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const CartContainer = styled.View`
  background-color: #fff;
  width: 335px;
  height: 95%;
  border-radius: 5px;
  padding: 22px 15px 10px;
  align-items: center;
`;

export const List = styled.FlatList`
  margin-bottom: 30px;
`;

export const Item = styled.View`
  width: 305px;
  min-height: 130px;
  margin-bottom: 20px;
`;

export const ProductInfo = styled.View`
  width: 100%;
  height: 90px;
  flex-direction: row;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductTexts = styled.View`
  margin-top: 10px;
  margin-left: 10px;
  width: 163px;
  margin-right: 28px;
`;

export const ProductTitle = styled.Text`
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 18px;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ProductCount = styled.View`
  width: 100%;
  height: 40px;
  background-color: #eee;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CountBox = styled.View`
  width: 101px;

  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;

export const InputCount = styled.TextInput`
  width: 51px;
  height: 30px;
  background-color: #fff;
  padding: 5px;
  text-align: center;
  color: #666;
  margin: 0 5px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const SubtotalPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

export const TotalBox = styled.View`
  align-items: center;
`;

export const TotalLabel = styled.Text`
  font-size: 16px;
  color: #999;
`;

export const TotalPrice = styled.Text`
  font-size: 30px;
  margin-top: 5px;
  letter-spacing: -1.6px;
  margin-bottom: 30px;
`;

export const SubmitButton = styled(RectButton)`
  width: 100%;
  height: 42px;
  background-color: #27ae60;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export const SubmitButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
