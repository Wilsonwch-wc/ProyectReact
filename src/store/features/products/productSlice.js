import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dataProduct: [
    { category: 'Frutas', price: '$1', stocked: true, name: 'Manzana' },
    { category: 'Frutas', price: '$1', stocked: true, name: 'Fruta del dragón' },
    { category: 'Frutas', price: '$2', stocked: false, name: 'Maracuyá' },
    { category: 'Verduras', price: '$2', stocked: true, name: 'Espinaca' },
    { category: 'Verduras', price: '$4', stocked: false, name: 'Calabaza' },
    { category: 'Verduras', price: '$1', stocked: true, name: 'Guisantes' },
  ],
  filterText: '',
  inStockOnly: false,
};

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setFilterText: (state, action) => {
      state.filterText = action.payload;
    },
    setInStockOnly: (state, action) => {
      state.inStockOnly = action.payload;
    },
  },
});

export const { setFilterText, setInStockOnly } = ProductSlice.actions;

export default ProductSlice.reducer;
