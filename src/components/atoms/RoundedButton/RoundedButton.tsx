import React from 'react';

type RoundedButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode;
};

/**
 * 角丸ボタンコンポーネント
 * @param props
 */
const RoundedButton: React.FC<RoundedButtonProps> = (props) => {
  const { children, ...rest } = props;

  return (
    <>
      <button
        className={`w-full h-6 rounded-full text-xs border-2  bg-white text-black hover:opacity-80`}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

export default RoundedButton;
