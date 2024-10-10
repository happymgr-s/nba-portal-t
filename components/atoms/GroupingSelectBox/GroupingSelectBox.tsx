import React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SelectProps } from '@radix-ui/react-select';

type SelectOption = {
  label: string;
  value: string;
  group: string;
};

type GroupingSelectBoxProps = SelectProps & {
  selectOptions: SelectOption[];
  groups: string[];
};

/**
 * セレクトボックスコンポーネント（グルーピングつき）
 * @param props
 */
const GroupingSelectBox: React.FC<GroupingSelectBoxProps> = (props) => {
  const { selectOptions, groups, ...rest } = props;

  return (
    <>
      <Select {...rest}>
        <SelectTrigger className="w-full md:w-60 rounded-full bg-white">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          {groups.map((group) => {
            const filteredOptions = selectOptions.filter((option) => option.group === group);

            return (
              <SelectGroup key={group}>
                <SelectLabel>{group}</SelectLabel>
                {filteredOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            );
          })}
        </SelectContent>
      </Select>
    </>
  );
};

export default GroupingSelectBox;
