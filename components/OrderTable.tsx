import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { Chip, Avatar, Button } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';
import CustomToolbar from './Toolbar';

const StatusChip = function ({ status }: { status: string }) {
  if (status === 'In Progress') {
    return (
      <Chip
        avatar={
          <Avatar sx={{ bgcolor: 'warning.main' }}>
            <StoreMallDirectoryIcon
              fontSize="small"
              style={{ color: 'white' }}
            />
          </Avatar>
        }
        color="primary"
        label="In Progress"
        variant="outlined"
      />
    );
  }
  if (status === 'Ready') {
    return (
      <Chip
        avatar={
          <Avatar sx={{ bgcolor: 'success.main' }}>
            <ShoppingBagIcon fontSize="small" style={{ color: 'white' }} />
          </Avatar>
        }
        color="success"
        label="Ready"
        variant="outlined"
      />
    );
  }
  if (status === 'Complete') {
    return (
      <Chip
        avatar={
          <Avatar sx={{ bgcolor: 'grey.800' }}>
            <CheckCircleIcon fontSize="small" style={{ color: 'white' }} />
          </Avatar>
        }
        sx={{ bgcolor: 'grey' }}
        label="Complete"
        variant="outlined"
      />
    );
  }
  if (status === 'Cancelled') {
    return (
      <Chip
        avatar={
          <Avatar sx={{ bgcolor: 'warning.main' }}>
            <CreditCardIcon fontSize="small" style={{ color: 'white' }} />
          </Avatar>
        }
        color="error"
        label="Received"
        variant="outlined"
      />
    );
  }
  return (
    <Chip
      avatar={
        <Avatar sx={{ bgcolor: 'warning.main' }}>
          <CreditCardIcon fontSize="small" style={{ color: 'white' }} />
        </Avatar>
      }
      color="warning"
      label="Received"
      variant="outlined"
    />
  );
};
const rows: GridRowsProp = [
  {
    id: 1,
    OrderNumber: '#110081139',
    Customer: 'Avery R',
    Status: 'Received',
    ReceivedTime: 'Today at 11:30AM',
    PromisedTime: 'Today at 12:01AM',
    Total: '$12.32',
  },
  {
    id: 2,
    OrderNumber: '#110081139',
    Customer: 'Tyler R',
    Status: 'In Progress',
    ReceivedTime: 'Today at 11:30AM',
    PromisedTime: 'Today at 12:01AM',
    Total: '$11.22',
  },
  {
    id: 3,
    OrderNumber: '#110081139',
    Customer: 'John B',
    Status: 'In Progress',
    ReceivedTime: 'Today at 11:30AM',
    PromisedTime: 'Today at 12:01AM',
    Total: '$10.57',
  },
  {
    id: 4,
    OrderNumber: '#110081139',
    Customer: 'Lian J',
    Status: 'Ready',
    ReceivedTime: 'Today at 11:30AM',
    PromisedTime: 'Today at 12:01AM',
    Total: '$10.39',
  },
  {
    id: 5,
    OrderNumber: '#110081139',
    Customer: 'Alek Z',
    Status: 'Ready',
    ReceivedTime: 'Today at 11:30AM',
    PromisedTime: 'Today at 12:01AM',
    Total: '$25.36',
  },
  {
    id: 6,
    OrderNumber: '#110081139',
    Customer: 'Jared P',
    Status: 'Complete',
    ReceivedTime: 'Today at 11:30AM',
    PromisedTime: 'Today at 12:01AM',
    Total: '$7.25',
  },
];
const columns: GridColDef[] = [
  { field: 'OrderNumber', headerName: 'Order Number', width: 200 },
  { field: 'Customer', headerName: 'Customer', width: 150 },
  {
    field: 'Status',
    headerName: 'Status',
    width: 150,
    renderCell: (params) => <StatusChip status={params.value} />,
  },
  { field: 'ReceivedTime', headerName: 'Received Time', width: 150 },
  { field: 'PromisedTime', headerName: 'Promised Time', width: 150 },
  { field: 'Total', headerName: 'Total', width: 150 },
];

function OrderTable() {
  const [data, setData] = useState(rows);
  function addOrder(order: any) {
    const newData = [...data, order];
    setData(newData);
  }
  return (
    <div style={{ display: 'flex', height: 500, flexGrow: 1 }}>
      <DataGrid
        rows={data}
        columns={columns}
        rowsPerPageOptions={[10]}
        components={{ Toolbar: CustomToolbar }}
      />
      <Button
        onClick={() =>
          addOrder({
            id: 8,
            OrderNumber: '#110081139',
            Customer: 'Jared P',
            Status: 'Ready',
            ReceivedTime: 'Today at 11:30AM',
            PromisedTime: 'Today at 12:01AM',
            Total: '$8.25',
          })
        }
      >
        Add Order
      </Button>
    </div>
  );
}

export default OrderTable;
