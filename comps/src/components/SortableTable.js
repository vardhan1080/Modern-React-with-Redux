import { useState } from "react";
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import Table from "./Table";

function SortableTable(props) {

    const { config, data } = props;
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const handleClick = (lable) => {
        if (sortBy && lable !== sortBy) {
            setSortOrder('asc');
            setSortBy(lable);
            return;
        }

        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(lable);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(lable);
        } else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        }
    }

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => <th className="cursor-pointer hover:bg-gray-100" onClick={() => { handleClick(column.lable) }}><div className="flex items-center">{getIcons(column.lable, sortBy, sortOrder)}{column.lable}</div></th>
        }
    });

    let sortedData = data;
    if (sortOrder && sortBy) {
        const { sortValue } = config.find(column => column.lable === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof (valueA) === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }

        })
    }

    return <Table {...props} data={sortedData} config={updatedConfig} />
}

function getIcons(lable, sortBy, sortOrder) {
    if (lable !== sortBy) {
        return (
            <div>
                <GoArrowSmallUp />
                <GoArrowSmallDown />
            </div>
        );
    }
    if (sortOrder === null) {
        return (
            <div>
                <GoArrowSmallUp />
                <GoArrowSmallDown />
            </div>
        )
    } else if (sortOrder === 'asc') {
        return (
            <div>
                <GoArrowSmallUp />
            </div>
        )
    } else if (sortOrder === 'desc') {
        return (
            <div>
                <GoArrowSmallDown />
            </div>
        )
    }
}

export default SortableTable;