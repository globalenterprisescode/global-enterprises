import type { Enquiry, DateRange } from '../types';

export const filterEnquiriesByDateRange = (
  enquiries: Enquiry[], 
  dateRange: DateRange
): Enquiry[] => {
  if (!dateRange.startDate || !dateRange.endDate) {
    return enquiries;
  }

  const start = new Date(dateRange.startDate).getTime();
  // Add 24 hours (in milliseconds) to include the entire end date
  const end = new Date(dateRange.endDate).getTime() + 24 * 60 * 60 * 1000;

  return enquiries.filter(enquiry => {
    const date = new Date(enquiry.created_at).getTime();
    return date >= start && date < end;
  });
};