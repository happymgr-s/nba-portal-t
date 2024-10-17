'use client';
import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { toJapaneseISOString } from '@/lib/convert';
import { ja } from 'date-fns/locale';
import { CalendarIcon, ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import MonthCalendar from '../MonthCalendar/MonthCalendar';

type ScheduleDatePickerProps = {};

/**
 * 日付選択コンポーネント
 * @param props
 */
const ScheduleDatePicker: React.FC<ScheduleDatePickerProps> = (props) => {
  const {} = props;

  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const searchDate = searchParams.get('date') || new Date().toISOString().split('T')[0];
  const searchMonth = searchParams.get('month');
  const isMonthDisplay = searchParams.get('month_display') === 'true';

  const displayDate = new Date(isMonthDisplay ? searchMonth || '' : searchDate);

  const handleSelectDate = (date?: Date) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set('date', toJapaneseISOString(date).split('T')[0]);

    router.replace(`${pathName}?${newSearchParams.toString()}`);
  };

  const handleClickArrow = (number: 1 | -1) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    if (isMonthDisplay) {
      displayDate.setMonth(displayDate.getMonth() + number);
      newSearchParams.set(
        'month',
        displayDate.toLocaleDateString().split('/')[0] +
          '-' +
          displayDate.toLocaleDateString().split('/')[1].padStart(2, '0')
      );

      router.replace(`${pathName}?${newSearchParams.toString()}`);
      return;
    }

    displayDate.setDate(displayDate.getDate() + number);
    newSearchParams.set('date', toJapaneseISOString(displayDate).split('T')[0]);

    router.replace(`${pathName}?${newSearchParams.toString()}`);
  };

  return (
    <>
      <div className="flex justify-center items-center gap-4">
        <Popover>
          <PopoverTrigger>
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 active:opacity-75 duration-200">
              <CalendarIcon />
            </div>
          </PopoverTrigger>
          <PopoverContent>
            {isMonthDisplay ? (
              <MonthCalendar />
            ) : (
              <Calendar
                locale={ja}
                mode="single"
                selected={displayDate}
                onSelect={handleSelectDate}
              />
            )}
          </PopoverContent>
        </Popover>

        <div className="flex justify-center items-center gap-2">
          <div className="w-7 h-7 bg-gray-300 rounded-full flex justify-center items-center hover:bg-gray-400 duration-200 active:opacity-75 cursor-pointer">
            <ChevronLeftCircle onClick={() => handleClickArrow(-1)} />
          </div>
          <p className="font-bold text-3xl">
            {isMonthDisplay
              ? displayDate.toLocaleDateString().split('/')[0] +
                '/' +
                displayDate.toLocaleDateString().split('/')[1].padStart(2, '0')
              : displayDate.toLocaleDateString()}
          </p>
          <div className="w-7 h-7 bg-gray-300 rounded-full flex justify-center items-center hover:bg-gray-400 duration-200 active:opacity-75 cursor-pointer">
            <ChevronRightCircle onClick={() => handleClickArrow(1)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleDatePicker;
