import Table from "../components/Table";

function TablePage() {

    const data = [
        { name: 'first', color: 'bg-orange-500', score: '5' },
        { name: 'second', color: 'bg-red-500', score: '2' },
        { name: 'third', color: 'bg-blue-500', score: '8' },
        { name: 'fourth', color: 'bg-green-500', score: '6' },
    ];

    const config = [
        {
            lable: 'Name',
            render: (data) => data.name,
        },
        {
            lable: 'Color',
            render: (data) => <div className={`p-3 m-2 ${data.color}`}></div>,
        },
        {
            lable: 'Score',
            render: (data) => data.score,
        },
    ];

    const keyFn = (data) => {
        return data.name;
    }

    return (
        <div>
            <Table data={data} config={config} keyFn={keyFn} />
        </div>
    )
}

export default TablePage;