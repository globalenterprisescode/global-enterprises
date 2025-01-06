import { useState, useEffect } from 'react';
import { useEnquiries } from './enquiries/hooks/useEnquiries';
import { DateRangeFilter } from './enquiries/components/DateRangeFilter';
import { EnquiriesTableHeader } from './enquiries/components/EnquiriesTableHeader';
import { ExportButton } from './enquiries/components/ExportButton';
import { exportToExcel } from './enquiries/utils/exportUtils';
import { filterEnquiriesByDateRange } from './enquiries/utils/filterUtils';
import { sortEnquiriesByDate } from './enquiries/utils/sortUtils';
import { formatDate } from '../../utils/formatters';
import type { DateRange, Enquiry } from './enquiries/types';

const EnquiriesTable = () => {
  const { enquiries, loading, error } = useEnquiries();
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: '',
    endDate: ''
  });
  const [filteredEnquiries, setFilteredEnquiries] = useState<Enquiry[]>([]);

  useEffect(() => {
    if (enquiries) {
      const filtered = filterEnquiriesByDateRange(enquiries, dateRange);
      const sorted = sortEnquiriesByDate(filtered, sortDirection);
      setSelectedRows(new Set() );
      setFilteredEnquiries(sorted);
    }
  }, [enquiries, dateRange, sortDirection]);

  const handleToggleSort = () => {
    setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
  };

  const handleDateRangeChange = (newRange: DateRange) => {
    setDateRange(newRange);
  };

  const handleResetFilters = () => {
    setDateRange({ startDate: '', endDate: '' });
  };

  const handleToggleSelectAll = () => {
    setSelectedRows(prev => 
      prev.size === filteredEnquiries.length 
        ? new Set() 
        : new Set(filteredEnquiries.map(e => e.id))
    );
  };

  const handleToggleRow = (id: string) => {
    setSelectedRows(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleExport = () => {
    if (selectedRows.size === 0) return;
    const selectedData = filteredEnquiries.filter(e => selectedRows.has(e.id));
    exportToExcel(selectedData);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 p-4">
        Error loading enquiries: {error}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Enquiries</h2>
          <DateRangeFilter
            dateRange={dateRange}
            onDateRangeChange={handleDateRangeChange}
            onReset={handleResetFilters}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <EnquiriesTableHeader
              onToggleSort={handleToggleSort}
              sortDirection={sortDirection}
              onToggleSelectAll={handleToggleSelectAll}
              allSelected={filteredEnquiries.length != 0 && selectedRows.size === filteredEnquiries.length}
            />
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredEnquiries.map((enquiry) => (
                <tr key={enquiry.id}>
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedRows.has(enquiry.id)}
                      onChange={() => handleToggleRow(enquiry.id)}
                      className="rounded border-gray-300"
                      aria-label={`Select ${enquiry.name}`}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {enquiry.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {enquiry.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {enquiry.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {enquiry.requirement}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatDate(enquiry.created_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-end">
          <ExportButton
            onExport={handleExport}
            selectedCount={selectedRows.size}
          />
        </div>
      </div>
    </div>
  );
};

export default EnquiriesTable;