import * as XLSX from 'xlsx';
import { formatDate } from '../../../../utils/formatters';
import type { Enquiry } from '../types';

export const exportToExcel = (selectedData: Enquiry[]) => {
  const exportData = selectedData.map(({ id, created_at, ...rest }) => ({
    ...rest,
    Date: formatDate(created_at)
  }));

  const ws = XLSX.utils.json_to_sheet(exportData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Enquiries');
  
  const fileName = `enquiries_${new Date().toISOString().split('T')[0]}.xlsx`;
  XLSX.writeFile(wb, fileName);
};