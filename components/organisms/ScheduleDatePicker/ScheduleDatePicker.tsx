'use client';
import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { toJapaneseISOString } from '@/lib/convert';
import { ja } from 'date-fns/locale';
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

  return (
    <>
      <div className="flex justify-center items-center gap-4">
        <Popover>
          <PopoverTrigger>
            <div className="flex justify-center items-center w-10 h-10 rounded-full bg-gray-300 hover:bg-gray-400 duration-200">
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
          <ChevronLeftCircle />
          <p className="font-bold text-3xl">
            {isMonthDisplay
              ? displayDate.toLocaleDateString().split('/')[0] +
                '/' +
                displayDate.toLocaleDateString().split('/')[1].padStart(2, '0')
              : displayDate.toLocaleDateString()}
          </p>
          <ChevronRightCircle />
        </div>
      </div>
    </>
  );
};

export default ScheduleDatePicker;
