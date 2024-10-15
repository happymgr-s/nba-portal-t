import React from 'react';

type ScoreTextProps = {
  children: string | number | null;
};

/**
 * 点数表示テキスト
 * @param props
 */
const ScoreText: React.FC<ScoreTextProps> = (props) => {
  const { children } = props;

  return (
    <>
      <p className="font-actionNBAMedium min-w-6 lg:min-w-11 text-center text-4xl lg:text-6xl">
        {children}
      </p>
    </>
  );
};

export default ScoreText;
