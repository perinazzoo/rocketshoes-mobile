import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

import logo from '../../assets/images/logo.png';

import {
  Container,
  Logo,
  CartContainer,
  CartCount,
  CartCountText,
} from './styles';

export default function Header() {
  return (
    <Container>
      <TouchableOpacity activeOpacity={0.6}>
        <Logo source={logo} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6}>
        <CartContainer>
          <Icon name="shopping-cart" size={20} color="#efefef" />
          <CartCount>
            <CartCountText>3</CartCountText>
          </CartCount>
        </CartContainer>
      </TouchableOpacity>
    </Container>
  );
}
