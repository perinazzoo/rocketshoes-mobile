import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

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
  const handleNavigate = page => {
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

Header.propTypes = {
  cartAmount: PropTypes.number.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default connect(state => ({
  cartAmount: state.cart.length,
}))(Header);
