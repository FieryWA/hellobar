import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'DT',
    dataIndex: 'dt',
    key: 'dt',
  },
  {
    title: 'SRC',
    dataIndex: 'src',
    key: 'src',
  },
  {
    title: 'REF',
    dataIndex: 'ref',
    key: 'ref',
  },
  {
    title: '請求先',
    dataIndex: 'req',
    key: 'req',
  },
  {
    title: '請求書番号',
    dataIndex: 'bnum',
    key: 'bnum',
  },
  {
    title: 'INT',
    dataIndex: 'int',
    key: 'int',
  },
  {
    title: '帳票入力日時',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: '担当者',
    dataIndex: 'owner',
    key: 'owner',
  },
  {
    title: '発効日付',
    dataIndex: 'date',
    key: 'date',
  },
];

const data = [
  {
    key: '1',
    dt: '11',
    src: '22',
    ref: '33',
    req: '44',
    bnum: 'C092875',
    int: '123',
    time: '19/05/22',
    owner: 'LAN',
    date: '19/05/27'
  },
  {
    key: '2',
    dt: '66',
    src: '55',
    ref: '44',
    req: '33',
    bnum: 'C092876',
    int: '321',
    time: '19/05/23',
    owner: 'DUAN',
    date: '19/05/27'
  },
  {
    key: '3',
    dt: '99',
    src: '22',
    ref: '77',
    req: '88',
    bnum: 'C092877',
    int: '456',
    time: '19/05/24',
    owner: 'MA',
    date: '19/05/28'
  }
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  }
};
class TablePage extends React.Component {
  render () {
    return (
      <Table columns={columns} rowSelection={rowSelection} dataSource={data}/>
    );
  }
}

export default TablePage;
