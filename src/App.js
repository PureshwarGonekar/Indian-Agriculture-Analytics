// src/App.js
import React from 'react';
import { Container, Title, Tabs } from '@mantine/core';
import  sampleData from './data/India_agro_dataset.json';
import { processData } from './utils/dataProcessor';
import YearTable from './components/YearTable';
import CropTable from './components/CropTable';
import "@mantine/core/styles.css"; 

const App = () => {
  const { yearTableData, cropTableData } = processData(sampleData);

  return (
    <Container>
      <br />
      <Title order={1}>Indian Agriculture Analytics</Title>
      <br />
      <Tabs>
        <Tabs.List>
          <Tabs.Tab value="yearly">Yearly Crop Production</Tabs.Tab>
          <Tabs.Tab value="average">Average Crop Data (1950-2020)</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="yearly">
          <YearTable data={yearTableData} />
        </Tabs.Panel>

        <Tabs.Panel value="average">
          <CropTable data={cropTableData} />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
};
export default App;
