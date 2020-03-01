import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CartActions from '../../store/modules/cart/actions';

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

function Cart({ cart, removeFromCart }) {
  return (
    <Container>
      <CartContainer>
        <List
          showsVerticalScrollIndicator={false}
          data={cart}
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
                  <Icon
                    name="delete-forever"
                    size={24}
                    color="#27ae60"
                    onPress={() => removeFromCart(item.id)}
                  />
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
                  <InputCount editable={false} value={String(item.amount)} />
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

const mapStateToProps = ({ cart }) => ({
  cart,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
