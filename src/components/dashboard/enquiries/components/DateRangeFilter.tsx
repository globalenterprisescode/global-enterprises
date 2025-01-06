import { DateRange } from '../types';
import { CalendarIcon } from 'lucide-react';

interface DateRangeFilterProps {
  dateRange: DateRange;
  onDateRangeChange: (range: DateRange) => void;
  onReset: () => void;
}

export const DateRangeFilter = ({ 
  dateRange, 
  onDateRangeChange, 
  onReset 
}: DateRangeFilterProps) => {
  const today = new Date().toISOString().split('T')[0];

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartDate = e.target.value;
    if (dateRange.endDate && dateRange.endDate < newStartDate) {
      onDateRangeChange({
        startDate: newStartDate,
        endDate: ''
      });
    } else {
      onDateRangeChange({
        ...dateRange,
        startDate: newStartDate
      });
    }
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEndDate = e.target.value;
    if (!dateRange.startDate || newEndDate >= dateRange.startDate) {
      onDateRangeChange({
        ...dateRange,
        endDate: newEndDate
      });
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-2">
        <div className="relative">
          <CalendarIcon className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input
            type="date"
            value={dateRange.startDate}
            onChange={handleStartDateChange}
            max={today}
            className="pl-8 pr-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            aria-label="Start Date"
          />
        </div>
        <span className="text-gray-600">to</span>
        <div className="relative">
          <CalendarIcon className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
          <input
            type="date"
            value={dateRange.endDate}
            onChange={handleEndDateChange}
            max={today}
            min={dateRange.startDate}
            disabled={!dateRange.startDate}
            className="pl-8 pr-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
            aria-label="End Date"
          />
        </div>
      </div>
      <button
        onClick={onReset}
        className="text-gray-600 hover:text-gray-900"
      >
        Reset
      </button>
    </div>
  );
};