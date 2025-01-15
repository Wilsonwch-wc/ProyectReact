 
import { useSelector, useDispatch } from 'react-redux';
import { setFilterText, setInStockOnly } from '../../store/features/products/productSlice.js';

function SearchBar() {
  const filterText = useSelector((state) => state.product.filterText);
  const inStockOnly = useSelector((state) => state.product.inStockOnly);
  const dispatch = useDispatch();

  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Buscar..."
        onChange={(e) => dispatch(setFilterText(e.target.value))}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => dispatch(setInStockOnly(e.target.checked))}
        />
        {' '}
        Mostrar solo productos en stock
      </label>
    </form>
  );
}

export default SearchBar;
