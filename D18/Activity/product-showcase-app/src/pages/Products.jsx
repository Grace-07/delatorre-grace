import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Row, Col, Spinner } from "react-bootstrap";
import Search from "../components/Search";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [query, setQuery] = useState(null);

  const fetchProductsByCategory = async () => {
    setIsLoading(true);

    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();

    setProducts(data);
    setIsLoading(false);
  };

  const fetchProducts = async () => {
    setIsLoading(true);

    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    setProducts(data);
    setIsLoading(false);
  };

  const fetchCategories = async () => {
    setIsLoading(true);

    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();

    setCategories(data);
    setIsLoading(false);
  };

  const fetchProductsBySearch = async () => {
    setIsLoading(true);

    const filteredProducts = products.filter((product) =>
      product.title.includes(query)
    );

    console.log("filteredProducts", filteredProducts);

    setProducts(filteredProducts);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  useEffect(() => {
    if (category && category !== "all") {
      fetchProductsByCategory();
    } else {
      fetchProducts();
    }
  }, [category]);

  useEffect(() => {
    if (query) {
      fetchProductsBySearch();
    } else {
      fetchProducts();
    }
  }, [query]);

  return (
    <div className="container my-5">
      <h1 className="mb-3">Products</h1>

      <Search
        categories={categories}
        handleCategory={setCategory}
        handleSearch={setQuery}
        category={category}
      />

      {isLoading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="success" />
        </div>
      ) : products.length ? (
        <Row xs={1} md={2} lg={4} className="g-4">
          {products.map((product) => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      ) : (
        <h3 className="text-center my-5">No product found</h3>
      )}
    </div>
  );
};

export default Products;
