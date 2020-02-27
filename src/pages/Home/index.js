import React, { Component } from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

export default class Home extends Component {
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

  render() {
    const { products } = this.state;

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
                <SubmitButton>
                  <CartButtonContainer>
                    <Icon name="add-shopping-cart" size={16} color="#fff" />
                    <CartCount>1</CartCount>
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
