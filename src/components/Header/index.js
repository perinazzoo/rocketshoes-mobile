import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import logo from '../../assets/images/logo.png';

import {
  Container,
  Logo,
  CartContainer,
  CartCount,
  CartCountText,
} from './styles';

function Header({ cartAmount }) {
  return (
    <Container>
      <TouchableOpacity activeOpacity={0.6}>
        <Logo source={logo} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6}>
        <CartContainer>
          <Icon name="shopping-cart" size={20} color="#efefef" />
          <CartCount>
            <CartCountText>{cartAmount}</CartCountText>
          </CartCount>
        </CartContainer>
      </TouchableOpacity>
    </Container>
  );
}

export default connect(state => ({
  cartAmount: state.cart.length,
}))(Header);
