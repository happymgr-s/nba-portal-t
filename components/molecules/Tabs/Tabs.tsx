import React from 'react';
import { Button } from '@/components/ui/button';

type TabItem = {
  label: string;
  value: string;
};

type TabsProps = {
  tabList: TabItem[];
  handleClickTabs: (value: string) => void;
};

/**
 * コンポーネント
 * @param props
 */
const Tabs: React.FC<TabsProps> = (props) => {
  const { tabList, handleClickTabs } = props;

  return (
    <>
      <div className="flex">
        {tabList.map((tab) => (
          <Button
            key={tab.value}
            variant="ghost"
            className="border-b-blue-700"
            onClick={() => handleClickTabs(tab.value)}
          >
            {tab.label}
          </Button>
        ))}
      </div>
    </>
  );
};

export default Tabs;
