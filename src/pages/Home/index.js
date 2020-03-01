import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CartActions from '../../store/modules/cart/actions';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import {
  Container,
  ProductImage,
  ListContainer,
  ProductContainer,
  ProductTitle,
  ProductPrice,
  SubmitButton,
  CartButtonContainer,
  CartCount,
  ButtonText,
} from './styles';

class Home extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(p => ({
      ...p,
      priceFormatted: formatPrice(p.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <Container>
        <ListContainer>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={products}
            keyExtractor={product => product.title}
            renderItem={({ item }) => (
              <ProductContainer>
                <ProductImage
                  source={{
                    uri: item.image,
                  }}
                />
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.priceFormatted}</ProductPrice>
                <SubmitButton onPress={() => this.handleAddProduct(item.id)}>
                  <CartButtonContainer>
                    <Icon name="add-shopping-cart" size={16} color="#fff" />
                    <CartCount>{amount[item.id] || 0}</CartCount>
                  </CartButtonContainer>
                  <ButtonText>Adicionar</ButtonText>
                </SubmitButton>
              </ProductContainer>
            )}
          />
        </ListContainer>
      </Container>
    );
  }
}

const mapStateToProps = ({ cart }) => ({
  amount: cart.reduce((amount, p) => {
    amount[p.id] = p.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
