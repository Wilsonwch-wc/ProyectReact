 ;
import { Provider } from 'react-redux';
import { store } from '../store/store2.js';
import FilterableProductTable from '../components/Products/FilterableProductTable.jsx';

function App() {
  return (
    <Provider store={store}>
      <FilterableProductTable />
    </Provider>
  );
}

export default App;
