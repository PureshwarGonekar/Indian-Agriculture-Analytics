import React from 'react';
import { Table } from '@mantine/core';

const YearTable = ({ data }) => {
  const rows = data.map((row) => (
    <Table.Tr key={row.year}>
      <Table.Td>{row.year}</Table.Td>
      <Table.Td>{row.maxCrop}</Table.Td>
      <Table.Td>{row.minCrop}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table  stickyHeader withTableBorder highlightOnHover>
        <Table.Thead>
            <Table.Tr>
                <Table.Th>Year</Table.Th>
                <Table.Th>Crop with Maximum Production</Table.Th>
                <Table.Th>Crop with Minimum Production</Table.Th>
            </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

export default YearTable;
