import React from 'react';

type ConferenceTitleProps = {
  conference: 'Eastern' | 'Western';
};

/**
 * コンポーネント
 * @param props
 */
const ConferenceTitle: React.FC<ConferenceTitleProps> = (props) => {
  const { conference } = props;

  const textColor = conference === 'Eastern' ? '#4B64E5' : '#DB544C';
  const title = conference === 'Eastern' ? 'EASTERN CONFERENCE' : 'WESTERN CONFERENCE';

  return (
    <>
      <h1 className={`text-center text-4xl text-[${textColor}] font-actionNBABold`}>{title}</h1>
    </>
  );
};

export default ConferenceTitle;
