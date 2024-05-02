import { Fragment } from 'react';

function Table({ data, config, keyFn }) {

    const renderHeaders = config.map((column) => {
        if (column.header) {
            return <Fragment key={column.lable}>{column.header()}</Fragment>
        }
        return (
            <th key={column.lable}>{column.lable}</th>
        )
    })

    const renderedRows = data.map((rowData) => {
        const renderCells = config.map((cellData) => {
            return <td className='p-2' key={cellData.lable}>{cellData.render(rowData)}</td>
        })
        return (
            <tr className='border-b' key={keyFn(rowData)}>
                {renderCells}
            </tr>
        )
    });

    return (
        <table className='table-auto border-spacing-2'>
            <thead>
                <tr className='border-b-2'>
                    {renderHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )
}

export default Table;