import React, { useState } from 'react';
import { FiCalendar, FiUsers, FiShoppingCart, FiRefreshCw, FiCheck } from 'react-icons/fi';
import sampleData from './sampleData';

const FilterModal = ({ applyFilters, toggleFilterModal }) => {
  const [activeTab, setActiveTab] = useState('date');
  const [dateFilter, setDateFilter] = useState('All');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [selectedPayers, setSelectedPayers] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);
  const [payerSearch, setPayerSearch] = useState('');
  const [searchedPayers, setSearchedPayers] = useState([]);

  // Fetching unique services from sampleData
  const uniqueServices = [...new Set(sampleData.map(item => item.services.split(', ').map(service => service.trim())).flat())];

  const handleApplyFilters = () => {
    applyFilters({
      dateFilter,
      fromDate: fromDate ? new Date(fromDate).getTime() / 1000 : null,
      toDate: toDate ? new Date(toDate).getTime() / 1000 : null,
      selectedPayers,
      selectedServices,
    });
    toggleFilterModal();
  };

  const handleResetDefaults = () => {
    setDateFilter('All');
    setFromDate('');
    setToDate('');
    setSelectedPayers([]);
    setSelectedServices([]);
    setPayerSearch('');
    setSearchedPayers([]);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handlePayerSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setPayerSearch(searchTerm);

    const filteredPayers = sampleData.filter(
      (payer) => payer.payer.toLowerCase().indexOf(searchTerm) !== -1
    );
    setSearchedPayers(filteredPayers);
  };

  const handlePayerCheckboxChange = (payer) => {
    if (selectedPayers.includes(payer.payer)) {
      setSelectedPayers(selectedPayers.filter((name) => name !== payer.payer));
    } else {
      setSelectedPayers([...selectedPayers, payer.payer]);
    }
  };

  const handleServiceCheckboxChange = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-1/2 h-3/4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4 flex items-center justify-between">
          <span>Add Filter</span>
          <button
            onClick={handleResetDefaults}
            className="text-gray-600 hover:text-gray-900"
          >
            <FiRefreshCw className="h-6 w-6" />
          </button>
        </h2>

        {/* Tabs */}
        <div className="flex flex-row mb-4">
          <div className="w-1/4">
            <div className="flex flex-col">
              <button
                className={`flex items-center text-gray-700 p-2 mb-2 ${
                  activeTab === 'date' ? 'font-semibold' : ''
                }`}
                onClick={() => handleTabChange('date')}
              >
                <FiCalendar className="mr-2 h-5 w-5" />
                Filter by Date
              </button>
              <button
                className={`flex items-center text-gray-700 p-2 mb-2 ${
                  activeTab === 'people' ? 'font-semibold' : ''
                }`}
                onClick={() => handleTabChange('people')}
              >
                <FiUsers className="mr-2 h-5 w-5" />
                People
              </button>
              <button
                className={`flex items-center text-gray-700 p-2 mb-2 ${
                  activeTab === 'services' ? 'font-semibold' : ''
                }`}
                onClick={() => handleTabChange('services')}
              >
                <FiShoppingCart className="mr-2 h-5 w-5" />
                Services / Products
              </button>
            </div>
          </div>
          <div className="w-3/4 pl-4">
            {/* Content based on active tab */}
            {activeTab === 'date' && (
              <div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Show orders for:
                  </label>
                  <select
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                  >
                    <option value="All">All</option>
                    <option value="Last 30 Days">Last 30 Days</option>
                    <option value="This Month">This Month</option>
                    <option value="Last Month">Last Month</option>
                    <option value="This Quarter">This Quarter</option>
                    <option value="2 Quarters Ago">2 Quarters Ago</option>
                    <option value="This Year">This Year</option>
                    <option value="Last Year">Last Year</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>
                {dateFilter === 'Custom' && (
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      From Date:
                    </label>
                    <input
                      type="date"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                    <label className="block text-gray-700 mb-2">
                      To Date:
                    </label>
                    <input
                      type="date"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                )}
              </div>
            )}

            {activeTab === 'people' && (
              <div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Search Payer:
                  </label>
                  <input
                    type="text"
                    value={payerSearch}
                    onChange={handlePayerSearch}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  {searchedPayers.map((payer) => (
                    <label key={payer.createdOn} className="block mb-2">
                      <input
                        type="checkbox"
                        checked={selectedPayers.includes(payer.payer)}
                        onChange={() => handlePayerCheckboxChange(payer)}
                        className="mr-2"
                      />
                      {payer.payer}
                    </label>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">
                    Select Services:
                  </label>
                  {uniqueServices.map((service, index) => (
                    <label key={index} className="block mb-2">
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service)}
                        onChange={() => handleServiceCheckboxChange(service)}
                        className="mr-2"
                      />
                      {service}
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-2 mt-4">
          <button
            onClick={toggleFilterModal}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleApplyFilters}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
