import PropTypes from "prop-types";
import React, { useState } from "react";
import { Form, Button, Dropdown } from "react-bootstrap";

const Search = ({ category, categories, handleCategory, handleSearch }) => {
  const [search, setSearch] = useState("");

  const updateCategories = ["all", ...categories];

  return (
    <Form className="d-flex my-4">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          handleSearch(search);
        }}
        variant="outline-success"
      >
        Search
      </Button>
      <Dropdown className="ms-1">
        <Dropdown.Toggle
          className="text-capitalize"
          variant="outline-success"
          id="dropdown-basic"
        >
          Filter - Category: {category}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {updateCategories.map((cat, index) => (
            <Dropdown.Item
              key={index}
              as="button"
              onClick={(e) => {
                e.preventDefault();
                handleCategory(cat);
              }}
              className="text-capitalize"
            >
              {cat}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </Form>
  );
};

Search.propTypes = {
  categories: PropTypes.array,
  handleCategory: PropTypes.func,
  handleSearch: PropTypes.func,
  category: PropTypes.string,
};

export default Search;
