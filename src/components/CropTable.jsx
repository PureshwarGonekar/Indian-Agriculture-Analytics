import React from 'react';
import { Table } from '@mantine/core';

const CropTable = ({ data }) => {
  const rows = data.map((row) => (
    <Table.Tr key={row.crop}>
      <Table.Td>{row.crop}</Table.Td>
      <Table.Td>{row.avgYield}</Table.Td>
      <Table.Td>{row.avgArea}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table stickyHeader withTableBorder highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Crop</Table.Th>
          <Table.Th>Average Yield (Kg/Ha)</Table.Th>
          <Table.Th>Average Cultivation Area (Ha)</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

export default CropTable;
