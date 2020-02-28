import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

import {
  Container,
  CartContainer,
  List,
  Item,
  ProductInfo,
  ProductImage,
  ProductTexts,
  ProductTitle,
  ProductPrice,
  ProductCount,
  InputCount,
  CountBox,
  SubtotalPrice,
  TotalBox,
  TotalLabel,
  TotalPrice,
  SubmitButton,
  SubmitButtonText,
  AmountButtons,
} from './styles';

export default class Cart extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    cart: [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve Confortável 1',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
      {
        id: 2,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
        price: 139.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
      {
        id: 3,
        title: 'Tênis Adidas Duramo Lite 3.0',
        price: 219.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
      },
      {
        id: 5,
        title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino 1',
        price: 139.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
      },
      {
        id: 6,
        title: 'Tênis Adidas Duramo Lite 2.0',
        price: 219.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
      },
      {
        id: 4,
        title: 'Tênis de Caminhada Leve Confortável',
        price: 179.9,
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
      },
    ],
  };

  render() {
    return (
      <Container>
        <CartContainer>
          <List
            showsVerticalScrollIndicator={false}
            data={this.state.cart}
            keyExtractor={c => c.title}
            renderItem={({ item }) => (
              <Item>
                <ProductInfo>
                  <ProductImage source={{ uri: item.image }} />
                  <ProductTexts>
                    <ProductTitle>{item.title}</ProductTitle>
                    <ProductPrice>{item.price}</ProductPrice>
                  </ProductTexts>
                  <TouchableOpacity>
                    <Icon name="delete-forever" size={24} color="#27ae60" />
                  </TouchableOpacity>
                </ProductInfo>
                <ProductCount>
                  <CountBox>
                    <TouchableOpacity>
                      <AmountButtons>
                        <Icon
                          name="remove-circle-outline"
                          size={20}
                          color="#27ae60"
                        />
                      </AmountButtons>
                    </TouchableOpacity>
                    <InputCount editable={false} value="3" />
                    <TouchableOpacity>
                      <AmountButtons>
                        <Icon
                          name="add-circle-outline"
                          size={20}
                          color="#27ae60"
                        />
                      </AmountButtons>
                    </TouchableOpacity>
                  </CountBox>
                  <SubtotalPrice>R$539,70</SubtotalPrice>
                </ProductCount>
              </Item>
            )}
          />
          <TotalBox>
            <TotalLabel>TOTAL</TotalLabel>
            <TotalPrice>R$ 1619,10</TotalPrice>
          </TotalBox>
          <SubmitButton>
            <SubmitButtonText>FINALIZAR PEDIDO</SubmitButtonText>
          </SubmitButton>
        </CartContainer>
      </Container>
    );
  }
}
