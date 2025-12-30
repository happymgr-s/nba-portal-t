import { Schedule } from '@/types/schedule';
import { JapaneseDate } from './japaneseDate';

export const groupSchedulesByDate = (schedules: Schedule[]) => {
  return schedules.reduce((acc, schedule) => {
    const scheduleDate = (() => {
      if (schedule.DateTimeUTC === null) return schedule.Day;
      return schedule.DateTimeUTC;
    })();
    const japaneseDate = new JapaneseDate(scheduleDate || '', 'UTC');
    const date = japaneseDate.toDateTimeString().split('T')[0]; // 日付部分だけ取得
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(schedule);
    return acc;
  }, {} as Record<string, Schedule[]>);
};
