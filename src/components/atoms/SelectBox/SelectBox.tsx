import React from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SelectProps } from '@radix-ui/react-select';

type selectItem = {
  label: string;
  value: string;
};

type SelectBoxProps = SelectProps & {
  selectOptions: selectItem[];
};

/**
 * セレクトボックスコンポーネント
 * @param props
 */
const SelectBox: React.FC<SelectBoxProps> = (props) => {
  const { selectOptions, ...rest } = props;

  return (
    <>
      <Select {...rest}>
        <SelectTrigger className="w-full md:w-60 rounded-full bg-white">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {selectOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default SelectBox;
