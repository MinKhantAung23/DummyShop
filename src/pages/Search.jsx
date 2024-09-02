/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { TextInput } from "flowbite-react";
import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";

const Search = ({ search, handleSearch }) => {
  return (
    <div>
      <TextInput
        id="email4"
        type="email"
        icon={HiSearch}
        placeholder="search..."
        value={search}
        onChange={handleSearch}
        className="mb-4"
      />
    </div>
  );
};

export default Search;
