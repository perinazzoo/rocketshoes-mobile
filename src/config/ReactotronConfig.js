import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.0.112' })
    .use(reactotronRedux())
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
