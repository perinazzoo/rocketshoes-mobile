import React, { Component } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

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
  SubmitButtonLoading,
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

  handleAddProduct = (id, index) => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id, index);
  };

  render() {
    const { products } = this.state;
    const { amount, isloading } = this.props;

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
                  isloading={isloading.state}
                  onPress={() => this.handleAddProduct(item.id, index)}
                >
                  {isloading.index === index && isloading.state === true ? (
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
}

Home.propTypes = {
  addToCartRequest: PropTypes.func.isRequired,
  amount: PropTypes.objectOf(Number).isRequired,
  isloading: PropTypes.shape({
    index: PropTypes.number,
    state: PropTypes.bool,
  }).isRequired,
};

const mapStateToProps = ({ cart, loading }) => ({
  amount: cart.reduce((amount, p) => {
    amount[p.id] = p.amount;

    return amount;
  }, {}),
  isloading: loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
