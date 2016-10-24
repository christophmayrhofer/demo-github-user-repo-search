import { watchFetchRepositoriesSaga } from './fetchRepositoriesSaga';

export default function* rootSaga() {
  yield [
    watchFetchRepositoriesSaga(),
  ];
}
