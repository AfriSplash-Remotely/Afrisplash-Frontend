import React from 'react';
import Button from "@/components/atoms/Button/Button";


interface AvailableSpaces {
    capacity: number;
    duration: string;
    price: string;
    availability: string;
    id: number;
}

interface TableProps {
    availableSpaces: AvailableSpaces[];
    className?: string;
    TableWrapper?: string;
    headerClassName?: string;
    bodyClassName?: string;
    cellClassName?: string;
    headerCellClass?: string;
    buttonWrapper?: string;
}

const WorkSpaceTable: React.FC<TableProps> = ({ availableSpaces, className, headerClassName, bodyClassName, cellClassName, headerCellClass, TableWrapper, buttonWrapper }) => {
    return (
        <div className={`mt-8 flow-root ${className}`}>
            <div className=" overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <div className={`overflow-hidden ${className}`}>
                        <table className={`min-w-full divide-y divide-gray-300  ${TableWrapper}`}>
                            {/* Table header */}
                            <thead className={`bg-gray-50 ${headerClassName}`}>
                                <tr >
                                    <th
                                        scope="col"
                                        className={`py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 ${headerCellClass}`}
                                    >
                                        CAPACITY
                                    </th>
                                    <th scope="col" className={`px-3 py-3.5 text-left text-sm font-semibold text-gray-900 ${headerCellClass}`}>
                                        DURATION
                                    </th>
                                    <th scope="col" className={`px-3 py-3.5 text-left text-sm font-semibold text-gray-900 ${headerCellClass}`}>
                                        PRICE
                                    </th>
                                    <th scope="col" className={`px-3 py-3.5 text-left text-sm font-semibold text-gray-900 ${headerCellClass}`}>
                                        AVAILABILITY
                                    </th>
                                </tr>
                            </thead>
                            {/* Table body */}
                            <tbody className={`divide-y divide-gray-200 bg-white ${bodyClassName}`}>
                                {availableSpaces.map((availableSpace) => (
                                    <tr key={availableSpace.id}>
                                        <td className={`whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 ${cellClassName}`}>
                                            {availableSpace.capacity}
                                        </td>
                                        <td className={`whitespace-nowrap px-3 py-4 text-sm text-gray-500 ${cellClassName}`}>
                                            {availableSpace.duration}
                                        </td>
                                        <td className={`whitespace-nowrap px-3 py-4 text-sm text-gray-500 ${cellClassName}`}>
                                            {availableSpace.price}
                                        </td>
                                        <td className={`whitespace-nowrap ${cellClassName}`}>
                                            <div className={`text-sm font-medium capitalize  text-primary_green w-[60%] m-auto  ${buttonWrapper}`}>
                                                <Button
                                                    type="filled"
                                                    color=""
                                                    text={availableSpace.availability}
                                                    classes="  "
                                                />
                                            </div>


                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkSpaceTable;
