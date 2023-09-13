import React, { useState, useEffect } from 'react'
import Style from './Products.module.css'
import Card from '../../Components/Card/Card'

const Products = () => {

  // state that contain all the data 
  const [productsData, setProductsData] = useState([]);

  // state that contain the value of price filter 
  const [filters, setFilters] = useState({
    priceRange: { min: '', max: '' },
  });

  // function for handling the price 
  const handlePriceRangeChange = (min, max) => {
    setFilters({ ...filters, priceRange: { min, max } });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();

        // Applying filteration 
        const filteredData = data.products.filter((product) => {

          // taking only price from the product data for filteration 
          const { price } = product;

          // converting min and max price value from the filter state into an integer
          const minPrice = parseInt(filters.priceRange.min);
          const maxPrice = parseInt(filters.priceRange.max);

          // checking if the filter contain the value or not of min and max and the price is small than maxPrice and greater than minPrice  
          const priceCriteria = (isNaN(minPrice) || price >= minPrice) && (isNaN(maxPrice) || price <= maxPrice);

          return  priceCriteria;
        });
        setProductsData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [filters]);


  return (
    <div className={Style.product}>

      {/* Product Page Section  */}
      <div className={Style.productPage}>
        <div className={Style.productBar_price}>
          <p>Sort By Price</p>
          <div className={Style.productBar_priceInput}>
            <input type="text" placeholder='from' value={filters.priceRange.min} onChange={(e) => handlePriceRangeChange(e.target.value, filters.priceRange.max)} />
            <input type="text" placeholder='to' value={filters.priceRange.max} onChange={(e) => handlePriceRangeChange(filters.priceRange.min, e.target.value)} />
          </div>
        </div>
        <div className={Style.productPage_cards}>
          {
            productsData.map((data) => {
              return <>
                <Card key={data.id} img={data.images} rating={data.rating} title={data.title} brand={data.brand} price={data.price} discount={data.discountPercentage} />
              </>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Products