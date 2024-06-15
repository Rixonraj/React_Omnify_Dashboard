import React, { useState, useEffect } from 'react';
import sampleData from './sampleData';

const DisplayColumnFilterModal = ({ displayColumns, applySelectedColumns, toggleFilterModal }) => {
    const [selectedColumns, setSelectedColumns] = useState(displayColumns);
    const [columnsList, setColumnsList] = useState([]);

    useEffect(() => {
        // Fetch columns dynamically from sampleData
        const columns = Object.keys(sampleData[0]);
        setColumnsList(columns);
    }, []);

    // Handle checkbox change
    const handleCheckboxChange = (column) => {
        const updatedColumns = selectedColumns.includes(column)
            ? selectedColumns.filter((col) => col !== column)
            : [...selectedColumns, column];
        setSelectedColumns(updatedColumns);
    };

    // Handle apply button click
    const handleApplyClick = () => {
        applySelectedColumns(selectedColumns);
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded-lg w-96">
                <h3 className="text-lg font-semibold mb-2">Display Column Filter</h3>
                <div className="space-y-2">
                    {columnsList.map((column) => (
                        <div key={column} className="flex items-center text-gray-800">
                            <input
                                type="checkbox"
                                id={column}
                                checked={selectedColumns.includes(column)}
                                onChange={() => handleCheckboxChange(column)}
                                className="mr-2 appearance-none h-4 w-4 border border-gray-300 rounded checked:bg-gray-800 checked:border-transparent focus:outline-none focus:ring-0"
                            />
                            <label htmlFor={column}>{column}</label>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex justify-end">
                    <button
                        onClick={toggleFilterModal}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 mr-4 px-4 py-2 rounded focus:outline-none"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleApplyClick}
                        className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded mr-2 focus:outline-none"
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DisplayColumnFilterModal;
