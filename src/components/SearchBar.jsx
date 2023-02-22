import { Divider, Input } from "antd";
import { useState } from "react";

const SearchBar = ({ setFoodsState, foods }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = e => {
    setSearchInput(e.target.value);
    setFoodsState(() => {
      if (e.target.value === "") {
        return foods;
      } else {
        return foods.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
      }
    });
  };

  return (
    <div>
      <Divider>Search</Divider>

      <label>Search for some food</label>
      <Input
        placeholder="search some food"
        value={searchInput}
        type="text"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
