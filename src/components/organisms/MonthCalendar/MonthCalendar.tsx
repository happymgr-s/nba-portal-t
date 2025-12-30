'use client';
import { Button } from '@/components/ui/button';
import { addYears, subYears } from 'date-fns';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

type MonthCalendarProps = {};

/**
 * コンポーネント
 * @param props
 */
const MonthCalendar: React.FC<MonthCalendarProps> = (props) => {
  const {} = props;

  const [date, setDate] = useState<Date>(new Date());

  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const months = [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
  ];

  const handleYearChange = (increment: number) => {
    setDate((prevDate) => (increment > 0 ? addYears(prevDate, 1) : subYears(prevDate, 1)));
  };

  const handleMonthSelect = (monthIndex: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    const newDate = new Date(date.getFullYear(), monthIndex, 1);
    setDate(newDate);

    newSearchParams.set(
      'month',
      newDate.toLocaleDateString().split('/')[0] +
        '-' +
        newDate.toLocaleDateString().split('/')[1].padStart(2, '0')
    );
    router.replace(`${pathName}?${newSearchParams.toString()}`);
  };

  return (
    <>
      <div className="bg-white text-black p-4 rounded-lg shadow-lg w-[300px]">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => handleYearChange(-1)}
            className="p-1 rounded-full hover:bg-zinc-700"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <span className="text-xl font-semibold">{date.getFullYear()}年</span>
          <button
            onClick={() => handleYearChange(1)}
            className="p-1 rounded-full hover:bg-zinc-700"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {months.map((month, index) => (
            <button
              key={month}
              onClick={() => handleMonthSelect(index)}
              className={`p-2 rounded ${
                date.getMonth() === index ? 'bg-zinc-700' : 'hover:bg-zinc-800'
              }`}
            >
              {month}
            </button>
          ))}
        </div>
        <Button
          variant="outline"
          className="w-full mt-4 text-black border-gray-400 hover:bg-zinc-800"
          onClick={() => handleMonthSelect(new Date().getMonth())}
        >
          今月を表示
        </Button>
      </div>
    </>
  );
};

export default MonthCalendar;
