import React from "react";
import "./Pagination.css";
import { Box } from "../primitives/Box";
import { Text } from "../primitives/Text";
import { Stack } from "../primitives/Stack";

/**
 * **Do:**
 * 
 * - Use pagination when content is broken into pages (e.g., tables, search results, listings).
 * - Use the following navigation labels:
 *   - **First**, **Prev**, **Next**, **Last** for quick access
 *   - Numeric indicators for direct page selection
 * - Highlight the current page (e.g., 3) with distinct styling.
 * - Enable keyboard focus styling for accessibility.
 * - Use hover effects to indicate interactive pagination items.
 * - Include disabled states for inactive controls (e.g., "Prev" on first page).
 * 
 * **Don’t:**
 * 
 * - Don’t use pagination for short lists — prefer infinite scroll or "load more".
 * - Don’t show pagination controls if there's only one page of content.
 * - Don’t allow interaction with disabled items.
 * - Don’t omit feedback (e.g., focused or active styles) — it helps guide users.
 */

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
