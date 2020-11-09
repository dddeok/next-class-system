import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  padding: 12px 0px;
  border-bottom: 1px solid #e5e5e7;

  .label-checkbox-title {
    font-size: 14px;
    color: #535562;
    margin-left: 8px;
  }
  .label-checkbox-option {
    font-size: 14px;
    color: #535562;
    margin-left: auto;
  }
`;

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  width: 14px;
  height: 14px;
`;
interface Props {
  title: string;
  option?: string;
  checked: boolean;
  onChange?: (checked: boolean) => void;
}
const LabelCheckbox = ({ title, option, checked, onChange }: Props) => {
  return (
    <Container>
      <Checkbox checked={checked} onChange={e => onChange(e.target.checked)} />
      <span className="label-checkbox-title">{title}</span>
      {option && <span className="label-checkbox-option">{option}</span>}
    </Container>
  );
};

export default LabelCheckbox;
