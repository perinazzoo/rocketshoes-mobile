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

function Header({ cartAmount, navigation }) {
  handleNavigate = page => {
    navigation.navigate(page);
  };

  return (
    <Container>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => handleNavigate('home')}
      >
        <Logo source={logo} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => handleNavigate('cart')}
      >
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
