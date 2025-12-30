import { ReloadIcon } from '@radix-ui/react-icons';
import React from 'react';

type ParamsClearButtonProps = {
  handleClickReset: () => void;
};

/**
 * コンポーネント
 * @param props
 */
const ParamsClearButton: React.FC<ParamsClearButtonProps> = (props) => {
  const { handleClickReset } = props;

  return (
    <>
      <button
        className="flex items-center gap-2 hover:opacity-80 active:scale-95"
        onClick={handleClickReset}
      >
        <span className="text-sm font-roboto font-bold text-gray-500">検索条件をクリア</span>
        <ReloadIcon className="text-gray-500 w-4 h-4" />
      </button>
    </>
  );
};

export default ParamsClearButton;
