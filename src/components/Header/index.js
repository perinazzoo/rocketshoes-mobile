import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
      <Logo source={logo} />
      <CartContainer>
        <Icon name="shopping-cart" size={20} color="#efefef" />
        <CartCount>
          <CartCountText>3</CartCountText>
        </CartCount>
      </CartContainer>
    </Container>
  );
}
