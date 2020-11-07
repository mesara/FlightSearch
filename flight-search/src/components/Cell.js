import React from 'react';
import {
    FilteringState,
    IntegratedFiltering,
    SortingState,
    IntegratedSorting,
  } from '@devexpress/dx-react-grid';
  import {
    Grid,
    Table,
    TableHeaderRow,
    TableFilterRow,
  } from '@devexpress/dx-react-grid-material-ui';

const columns = [
  { name: 'destination', title: 'Destino' },
  { name: 'country', title: 'Pais' },
  { name: 'airport', title: 'Aeropuerto' },
  { name: 'price', title: 'Precio' },
  { name: 'departureFlight', title: 'Fecha Salida' },
  { name: 'returnFlight', title: 'Fecha Regreso' },
  { name: 'days', title: 'Dias' },
  { name: 'carrier', title: 'Aerolineas' },
]

const Cell = ( {rows} ) => {
    debugger;
    return (
        <Grid
            rows={rows}
            columns={columns}>
            <FilteringState defaultFilters={[]} />
            <IntegratedFiltering />
            <SortingState
              defaultSorting={[{ columnName: 'airport', direction: 'asc' }]}
            />
            <IntegratedSorting />
            <Table />
            <TableHeaderRow />
            <TableFilterRow />            
        </Grid>
    )    
};

export default Cell;