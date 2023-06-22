import { styled } from "styled-components";
import { MdOutlineDone } from "react-icons/md";

import { colors } from "@/config/colors";

const CheckBoxWrap = styled.div`
  gap: 15px;
  position: relative;
  input {
    cursor: pointer;
    opacity: 0;
  }
  label {
    color: ${colors.text};
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    margin-left: 15px;
  }
`;
const CustomCheckBox = styled.div`
  position: absolute;
  top: 2px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  width: 20px;
  height: 20px;
  border: 1px solid ${colors.tetx};
  background-color: ${colors.mainWhite};
  border-radius: 6px;
`;

const Checkbox = ({ children, isChecked }) => {
  return (
    <CheckBoxWrap>
      {children}
      <CustomCheckBox className="checked">
        {isChecked && <MdOutlineDone color={`${colors.text}`} />}
      </CustomCheckBox>
    </CheckBoxWrap>
  );
};

export default Checkbox;
