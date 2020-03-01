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
  EmptyCart,
  EmptyCartText,
} from './styles';

function Cart({
  cart,
  removeFromCart,
  updateAmountRequest,
  total,
  cartAmount,
}) {
  function increment(item) {
    updateAmountRequest(item.id, item.amount + 1);
  }

  function decrement(item) {
    updateAmountRequest(item.id, item.amount - 1);
  }

  return (
    <Container>
      <CartContainer>
        {cartAmount > 0 ? (
          <>
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
                    <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                      <Icon name="delete-forever" size={24} color="#27ae60" />
                    </TouchableOpacity>
                  </ProductInfo>
                  <ProductCount>
                    <CountBox>
                      <TouchableOpacity onPress={() => decrement(item)}>
                        <AmountButtons>
                          <Icon
                            name="remove-circle-outline"
                            size={24}
                            color="#27ae60"
                          />
                        </AmountButtons>
                      </TouchableOpacity>
                      <InputCount
                        editable={false}
                        value={String(item.amount)}
                      />
                      <TouchableOpacity onPress={() => increment(item)}>
                        <AmountButtons>
                          <Icon
                            name="add-circle-outline"
                            size={24}
                            color="#27ae60"
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
          </>
        ) : (
            <EmptyCart>
              <EmptyCartText>Seu carrinho está vazio :(</EmptyCartText>
              <Icon name="remove-shopping-cart" size={50} color="#ddd" />
            </EmptyCart>
          )}
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
  cartAmount: state.cart.length,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
