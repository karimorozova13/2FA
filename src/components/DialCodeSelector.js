import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

import { countriesData } from "@/config/countries";
import { SVGFlag } from "./Flags/dist";
import useOnClickOutside from "@/utils/hooks/useOnClickOutside";
import { useWindowSize } from "@/utils/hooks/useWindowSize";

const Outer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 5px;
  background-color: #f1f2f4;
  cursor: pointer;
  border-radius: 5px;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 100%;
  padding: 0px 10px;
`;

const DropDown = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  min-height: 200px;
  max-height: 200px;
  height: 100%;
  padding: 0 5px;
  background-color: #f1f2f4;
  z-index: 5;
  overflow: auto;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
  & p {
    font-size: 12px;
  }
  & span {
    font-size: 12px;
  }

  &:hover {
    background-color: rgba(70, 90, 126, 0.4);
    transition: 0.3s all linear;
    cursor: pointer;
  }
`;

const DialCodeSelector = ({
  initialCode = "CY",
  onChange = () => {},
  hideFlags = false,
}) => {
  const [selectedCountry, setSelectedCountry] = useState(
    countriesData.find(({ iso2 }) => iso2 == initialCode)
  );
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();
  const ref = useRef();
  useOnClickOutside(ref, () => setIsOpen(false));

  useEffect(() => {
    onChange(selectedCountry);
  }, [selectedCountry]);

  return (
    <Outer ref={ref}>
      <Label
        onClick={() => setIsOpen(!isOpen)}
        style={{ padding: hideFlags ? "9px " : "0px 10px" }}
      >
        {!hideFlags && (
          <SVGFlag
            country={selectedCountry.iso2.toLowerCase()}
            flagWidth="40"
          />
        )}
        {width > 991 && <p>{selectedCountry.name}</p>}

        <span>
          +
          {
            countriesData.find(({ iso2 }) => iso2 == selectedCountry.iso2)
              ?.dialCode
          }
        </span>
      </Label>
      {isOpen && (
        <DropDown>
          {countriesData.map(({ name, iso2, dialCode }) => (
            <Item
              key={`${name}-${iso2}-${dialCode}`}
              onClick={() => setSelectedCountry({ name, iso2, dialCode })}
            >
              {!hideFlags && (
                <SVGFlag country={iso2.toLowerCase()} flagWidth="30" />
              )}
              {width > 991 && <p>{name}</p>}

              <span>+{dialCode}</span>
            </Item>
          ))}
        </DropDown>
      )}
    </Outer>
  );
};

export default DialCodeSelector;
