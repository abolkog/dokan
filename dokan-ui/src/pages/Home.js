import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../services/api';

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <Grid container spacing={2}>
      {products.map(product => (
        <Grid key={product.id} xs={12} md={4} item>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

Home.propTypes = {};

export default Home;
