import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import Table from "./Table";
import useSort from '../hooks/use-sort';

function SortableTable(props) {

    const { config, data } = props;
    const { sortBy, sortOrder, sortedData, setSortColumn } = useSort(data, config);

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => <th className="cursor-pointer hover:bg-gray-100" onClick={() => { setSortColumn(column.lable) }}><div className="flex items-center">{getIcons(column.lable, sortBy, sortOrder)}{column.lable}</div></th>
        }
    });

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