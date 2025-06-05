import React from "react";
import "./Pagination.css";
import { Box } from "../primitives/Box";
import { Text } from "../primitives/Text";
import { Stack } from "../primitives/Stack";

export const Pagination = ({
  totalPages = 5,
  currentPage = 1,
  onPageChange,
  disabled = false,
}) => {
  const handleChange = (page) => {
    if (!disabled && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handleChange(i)}
          className={`pagination-button ${
            currentPage === i ? "focused" : ""
          } ${disabled ? "disabled" : ""}`}
        >
          <Text>{i}</Text>
        </button>
      );
    }
    return pages;
  };

  return (
    <Box className="pagination-container">
      <Stack direction="row" gap="8" align="center">
        <button
          onClick={() => handleChange(1)}
          className={`pagination-button ${disabled ? "disabled" : ""}`}
        >
          <Text>&laquo; First</Text>
        </button>
        <button
          onClick={() => handleChange(currentPage - 1)}
          className={`pagination-button ${disabled ? "disabled" : ""}`}
        >
          <Text>&lsaquo; Prev</Text>
        </button>
        {renderPageNumbers()}
        <button
          onClick={() => handleChange(currentPage + 1)}
          className={`pagination-button ${disabled ? "disabled" : ""}`}
        >
          <Text>Next &rsaquo;</Text>
        </button>
        <button
          onClick={() => handleChange(totalPages)}
          className={`pagination-button ${disabled ? "disabled" : ""}`}
        >
          <Text>Last &raquo;</Text>
        </button>
      </Stack>
    </Box>
  );
};
