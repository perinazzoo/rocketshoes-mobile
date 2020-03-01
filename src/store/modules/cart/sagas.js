import { call, put, all, takeLeading, select } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';
import { addToCartSuccess, updateAmountSuccess } from './actions';
import { formatPrice } from '../../../util/format';

function* addToCart({ id }) {
  const productExists = yield select(({ cart }) => cart.find(p => p.id === id));

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    Alert.alert('Oops!', 'Estoque esgotado 😔', [{ text: 'OK' }], {
      cancelable: true,
    });
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, productExists.amount + 1));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Oops!', 'Estoque esgotado 😔', [{ text: 'OK' }], {
      cancelable: true,
    });
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLeading('@cart/ADD_REQUEST', addToCart),
  takeLeading('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
