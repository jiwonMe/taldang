import React, { useContext } from 'react';
import styled from 'styled-components';

export const ChipSelectContext = React.createContext<{
  value: string[];
  onChange: (value: string[]) => void;
  multi: boolean;
}>({ value: [], onChange: () => {}, multi: false });

export interface ChipSelectProps {
  children: React.ReactNode;
  value: string[];
  onChange: (value: string[]) => void;
  multi?: boolean;
}

export const SelectChipContainer: React.FC<ChipSelectProps> = ({ children, value, onChange, multi = false }) => {
  return (
    <ChipSelectContext.Provider value={{ value, onChange, multi }}>
      <SelectChipContainerLayout>
        {children}
      </SelectChipContainerLayout>
    </ChipSelectContext.Provider>
  );
};

const SelectChipContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export interface SelectChipProps {
  value: string;
  children: React.ReactNode;
}

export const SelectChip: React.FC<SelectChipProps> = ({ value, children }) => {
  const { value: selectedValues, onChange, multi } = useContext(ChipSelectContext);

  const isSelected = selectedValues.includes(value);

  const handleClick = () => {
    if (isSelected) {
      onChange(selectedValues.filter((v) => v !== value));
    } else {
      if (multi) {
        onChange([...selectedValues, value]);
      } else {
        onChange([value]);
      }
    }
  };

  return (
    <SelectChipLayout onClick={handleClick} selected={isSelected}>
      {children}
    </SelectChipLayout>
  );
};

const SelectChipLayout = styled.div<{
  selected?: boolean;
}>`
  background-color: #fff;
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  gap: 8px;
  padding: 8px;
  border: ${(props) => (props.selected ? "2px solid black" : "1px solid #CACACA")};
  border-radius: 8px;

  cursor: pointer;
  height: 90px;

  opacity: ${(props) => (props.selected ? 1 : 0.4)};
`;