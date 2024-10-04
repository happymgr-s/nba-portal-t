'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

type SearchBarProps = {};

/**
 * コンポーネント
 * @param props
 */
const SearchBar: React.FC<SearchBarProps> = (props) => {
  const {} = props;
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleChangeInput = (value: string) => {
    // router.replace('/')
    console.log(pathName);
    console.log(searchParams);
    console.log(value);
  };

  return (
    <>
      <input className="border" type="text" onChange={(e) => handleChangeInput(e.target.value)} />
    </>
  );
};

export default SearchBar;
