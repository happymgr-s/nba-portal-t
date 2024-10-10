import React from 'react';
import { Tabs as ShadcnTabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';

type TabItem = {
  label: string;
  value: string;
  href: string;
};

type TabsProps = {
  tabList: TabItem[];
  defaultSelected: string;
};

/**
 * コンポーネント
 * @param props
 */
const Tabs: React.FC<TabsProps> = (props) => {
  const { tabList, defaultSelected } = props;

  return (
    <>
      <ShadcnTabs defaultValue={defaultSelected}>
        <TabsList>
          {tabList.map((tab) => (
            <Link href={tab.href} key={tab.value}>
              <TabsTrigger value={tab.value}>{tab.label}</TabsTrigger>
            </Link>
          ))}
        </TabsList>
      </ShadcnTabs>
    </>
  );
};

export default Tabs;
