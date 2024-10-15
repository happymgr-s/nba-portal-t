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
      <p className="font-actionNBAMedium text-3xl">{children}</p>
    </>
  );
};

export default ScoreText;
