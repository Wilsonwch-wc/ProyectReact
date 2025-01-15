 
import { useSelector } from 'react-redux';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable() {
  const { dataProduct, filterText, inStockOnly } = useSelector((state) => state.product);

  const rows = [];
  let lastCategory = null;

  dataProduct.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
