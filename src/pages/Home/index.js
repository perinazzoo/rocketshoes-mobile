import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';

import { addToCartRequest } from '../../store/modules/cart/actions';
import { isLoading } from '../../store/modules/loading/actions';
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
  SubmitButtonLoading,
  CartButtonContainer,
  CartCount,
  ButtonText,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(({ cart }) =>
    cart.reduce((a, p) => {
      a[p.id] = p.amount;

      return a;
    }, {})
  );

  const loadingStatus = useSelector(({ loading }) => loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLoading(true));
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(p => ({
        ...p,
        priceFormatted: formatPrice(p.price),
      }));
      setProducts(data);
      dispatch(isLoading(false));
    }
    loadProducts();
  }, []);

  const handleAddProduct = (id, index) => {
    dispatch(addToCartRequest(id, index));
  };

  return (
    <Container>
      <ListContainer>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={products}
          keyExtractor={product => product.title}
          renderItem={({ item, index }) => (
            <ProductContainer>
              <ProductImage
                source={{
                  uri: item.image,
                }}
              />
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.priceFormatted}</ProductPrice>
              <SubmitButton
                isloading={loadingStatus.state}
                onPress={() => handleAddProduct(item.id, index)}
              >
                {loadingStatus.index === index &&
                  loadingStatus.state === true ? (
                    <SubmitButtonLoading>
                      <ActivityIndicator color="#fff" size={30} />
                    </SubmitButtonLoading>
                  ) : (
                    <>
                      <CartButtonContainer>
                        <Icon name="add-shopping-cart" size={16} color="#fff" />
                        <CartCount>{amount[item.id] || 0}</CartCount>
                      </CartButtonContainer>
                      <ButtonText>Adicionar</ButtonText>
                    </>
                  )}
              </SubmitButton>
            </ProductContainer>
          )}
        />
      </ListContainer>
    </Container>
  );
}
