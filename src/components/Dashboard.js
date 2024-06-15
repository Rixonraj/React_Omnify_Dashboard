import React, { useState } from 'react';
import { FiFilter, FiColumns } from 'react-icons/fi';
import Table from './Table';
import SummaryBox from './SummaryBox';
import sampleData from './sampleData';
import DisplayColumnFilterModal from './DisplayColumnFilterModal';
import FilterModal from './FilterModal';

const Dashboard = () => {
  const [data, setData] = useState(sampleData);
  const [displayColumns, setDisplayColumns] = useState([
    'createdOn',
    'payer',
    'status',
    'email',
    'phone',
    'services',
    'scheduledOn'
  ]);
  const [showColumnFilterModal, setShowColumnFilterModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  
  const [filters, setFilters] = useState({});
  const [isFilterHovered, setIsFilterHovered] = useState(false);
  const [isColumnHovered, setIsColumnHovered] = useState(false);

  const handleFilterHover = () => {
    setIsFilterHovered(!isFilterHovered);
  };

  const handleColumnHover = () => {
    setIsColumnHovered(!isColumnHovered);
  };

  const toggleColumnFilterModal = () => {
    setShowColumnFilterModal(!showColumnFilterModal);
  };

  const applySelectedColumns = (selectedColumns) => {
    setDisplayColumns(selectedColumns);
    setShowColumnFilterModal(false);
  };

  const toggleFilterModal = () => {
    setShowFilterModal(!showFilterModal);
  };

  const applyFilters = (newFilters) => {
    setFilters(newFilters);
    // Apply filters to data
    let filteredData = sampleData;

    // Date filter
    if (newFilters.dateFilter !== 'All') {
      const now = new Date();
      switch (newFilters.dateFilter) {
        case 'Last 30 Days':
          const last30Days = now.setDate(now.getDate() - 30);
          filteredData = filteredData.filter(item => item.createdOn >= last30Days);
          break;
        case 'This Month':
          const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).getTime() / 1000;
          filteredData = filteredData.filter(item => item.createdOn >= firstDayOfMonth);
          break;
        case 'Last Month':
          const firstDayOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1).getTime() / 1000;
          const lastDayOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getTime() / 1000;
          filteredData = filteredData.filter(item => item.createdOn >= firstDayOfLastMonth && item.createdOn <= lastDayOfLastMonth);
          break;
        case 'This Quarter':
          const currentQuarter = Math.floor((now.getMonth() + 3) / 3);
          const firstDayOfQuarter = new Date(now.getFullYear(), (currentQuarter - 1) * 3, 1).getTime() / 1000;
          filteredData = filteredData.filter(item => item.createdOn >= firstDayOfQuarter);
          break;
        case '2 Quarters Ago':
          const pastQuarter = Math.floor((now.getMonth() + 3) / 3) - 2;
          const firstDayOfPastQuarter = new Date(now.getFullYear(), (pastQuarter - 1) * 3, 1).getTime() / 1000;
          const lastDayOfPastQuarter = new Date(now.getFullYear(), pastQuarter * 3, 0).getTime() / 1000;
          filteredData = filteredData.filter(item => item.createdOn >= firstDayOfPastQuarter && item.createdOn <= lastDayOfPastQuarter);
          break;
        case 'This Year':
          const firstDayOfYear = new Date(now.getFullYear(), 0, 1).getTime() / 1000;
          filteredData = filteredData.filter(item => item.createdOn >= firstDayOfYear);
          break;
        case 'Last Year':
          const firstDayOfLastYear = new Date(now.getFullYear() - 1, 0, 1).getTime() / 1000;
          const lastDayOfLastYear = new Date(now.getFullYear() - 1, 11, 31).getTime() / 1000;
          filteredData = filteredData.filter(item => item.createdOn >= firstDayOfLastYear && item.createdOn <= lastDayOfLastYear);
          break;
        case 'Custom':
          filteredData = filteredData.filter(item => item.createdOn >= newFilters.fromDate && item.createdOn <= newFilters.toDate);
          break;
        default:
          break;
      }
    }

    // Payer filter
    if (newFilters.selectedPayers.length > 0) {
      filteredData = filteredData.filter(item => newFilters.selectedPayers.includes(item.payer));
    }

    // Services filter
    if (newFilters.selectedServices.length > 0) {
      filteredData = filteredData.filter(item => newFilters.selectedServices.includes(item.services));
    }

    setData(filteredData);
  };

  return (
    <div className="container mx-auto mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Dashboard</h2>

      </div>

      <SummaryBox data={data} />
      <div className="flex space-x-6 py-2 mb-2">
        <button
          onClick={toggleFilterModal}
          onMouseEnter={handleFilterHover}
          onMouseLeave={handleFilterHover}
          style={{
            backgroundColor: isFilterHovered ? '#cbd5e0' : '#4a5568',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            outline: 'none',
            border: 'none',
            cursor: 'pointer',
            display : 'flex',
            transition: 'background-color 0.3s ease',
            alignItems : 'center'
          }}
        >
          <FiFilter style={{ marginRight: '0.5rem' }} /> Add Filter
        </button>
        <button
          onClick={toggleColumnFilterModal}
          onMouseEnter={handleColumnHover}
          onMouseLeave={handleColumnHover}
          style={{
            backgroundColor: isColumnHovered ? '#cbd5e0' : '#4a5568',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            outline: 'none',
            border: 'none',
            cursor: 'pointer',
            display : 'flex',
            transition: 'background-color 0.3s ease',
            alignItems : 'center'
          }}
        >
          <FiColumns style={{ marginRight: '0.5rem' }} /> Display Columns
        </button>
      </div>
      {/* Table component */}
      <Table data={data} displayColumns={displayColumns} />

      {/* Display Column Filter Modal */}
      {showColumnFilterModal && (
        <DisplayColumnFilterModal
          displayColumns={displayColumns}
          applySelectedColumns={applySelectedColumns}
          toggleFilterModal={toggleColumnFilterModal}
        />
      )}

      {/* Filter Modal */}
      {showFilterModal && (
        <FilterModal
          applyFilters={applyFilters}
          toggleFilterModal={toggleFilterModal}
        />
      )}
    </div>
  );
};

export default Dashboard;
