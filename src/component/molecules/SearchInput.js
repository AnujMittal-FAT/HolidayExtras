import React, { useState, useEffect } from "react";
import {
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, InputGroup, Input } from "reactstrap";

const SearchInput = ({
  disabled,
  inputClass,
  name,
  type,
  placeholder,
  value,
  clear,
}) => {
  const [searchValue, setsearchValue] = useState("");

  const searchTerm = (e) => {
    value(e.target.value);
    setsearchValue(e.target.value);
  };

  useEffect(() => {
    if (clear) setsearchValue("");

    return () => {};
  }, [clear]);

  return (
    <>
      <div className={`${inputClass} ${disabled ? 'disabled' : ''}`}>
        <InputGroup>
          <Input
            className="search-input shadow"
            type={type}
            name={name}
            placeholder={placeholder}
            value={searchValue}
            onChange={searchTerm}
            disabled={disabled}
          />
          <Button className="search-button" color="primary">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroup>
      </div>
    </>
  );
};

export default SearchInput;
