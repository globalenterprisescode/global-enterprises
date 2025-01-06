import { ArrowRight, Download } from '../../../icons';

interface EnquiriesTableHeaderProps {
  onToggleSort: () => void;
  sortDirection: 'asc' | 'desc';
  onToggleSelectAll: () => void;
  allSelected: boolean;
}

export const EnquiriesTableHeader = ({
  onToggleSort,
  sortDirection,
  onToggleSelectAll,
  allSelected
}: EnquiriesTableHeaderProps) => {
  return (
    <thead>
      <tr>
        <th className="px-6 py-3 bg-gray-50">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={onToggleSelectAll}
            className="rounded border-gray-300"
            aria-label="Select all rows"
          />
        </th>
        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Name
        </th>
        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Phone
        </th>
        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Email
        </th>
        <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Requirement
        </th>
        <th 
          className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
          onClick={onToggleSort}
        >
          <div className="flex items-center">
            Date
            {sortDirection === 'asc' ? (
              <ArrowRight className="h-4 w-4 ml-1" />
            ) : (
              <Download className="h-4 w-4 ml-1" />
            )}
          </div>
        </th>
      </tr>
    </thead>
  );
};