import type { Enquiry } from '../types';

export const sortEnquiriesByDate = (
  enquiries: Enquiry[], 
  direction: 'asc' | 'desc'
): Enquiry[] => {
  return [...enquiries].sort((a, b) => {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();
    return direction === 'asc' ? dateA - dateB : dateB - dateA;
  });
};