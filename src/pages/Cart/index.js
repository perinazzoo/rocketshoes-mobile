import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

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

function Cart({ cart, removeFromCart, updateAmountRequest, total }) {
  function increment(item) {
    updateAmountRequest(item.id, item.amount + 1);
  }

  function decrement(item) {
    updateAmountRequest(item.id, item.amount - 1);
  }

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
                  <ProductPrice>{item.priceFormatted}</ProductPrice>
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
                        size={24}
                        color="#27ae60"
                        onPress={() => decrement(item)}
                      />
                    </AmountButtons>
                  </TouchableOpacity>
                  <InputCount editable={false} value={String(item.amount)} />
                  <TouchableOpacity>
                    <AmountButtons>
                      <Icon
                        name="add-circle-outline"
                        size={24}
                        color="#27ae60"
                        onPress={() => increment(item)}
                      />
                    </AmountButtons>
                  </TouchableOpacity>
                </CountBox>
                <SubtotalPrice>{item.subTotal}</SubtotalPrice>
              </ProductCount>
            </Item>
          )}
        />
        <TotalBox>
          <TotalLabel>TOTAL</TotalLabel>
          <TotalPrice>{total}</TotalPrice>
        </TotalBox>
        <SubmitButton>
          <SubmitButtonText>FINALIZAR PEDIDO</SubmitButtonText>
        </SubmitButton>
      </CartContainer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(p => ({
    ...p,
    subTotal: formatPrice(p.price * p.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, p) => {
      return total + p.price * p.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
