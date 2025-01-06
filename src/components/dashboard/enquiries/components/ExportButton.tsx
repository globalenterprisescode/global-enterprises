import { Download } from '../../../icons';

interface ExportButtonProps {
  onExport: () => void;
  selectedCount: number;
}

export const ExportButton = ({ onExport, selectedCount }: ExportButtonProps) => {
  return (
    <button
      onClick={onExport}
      disabled={selectedCount === 0}
      className={`flex items-center px-4 py-2 rounded-lg ${
        selectedCount === 0
          ? 'bg-gray-300 cursor-not-allowed'
          : 'bg-red-600 hover:bg-red-700'
      } text-white transition-colors`}
    >
      <Download className="h-5 w-5 mr-2" />
      Export Selected ({selectedCount})
    </button>
  );
};