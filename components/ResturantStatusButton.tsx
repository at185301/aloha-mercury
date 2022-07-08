import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Divider, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 608,
  height: 380,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>Adjust Order Prep Time</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style }}>
          <Grid container direction="row" alignItems="center" sx={{ mb: -2 }}>
            <Grid item xs={1.5}>
              <IconButton size="large">
                <ArrowBackIcon onClick={handleClose} fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item xs={9.5}>
              <h1 id="child-modal-title">Adjust order prep time</h1>
            </Grid>
            <Grid item xs={1}>
              <IconButton>
                <CloseIcon onClick={handleClose} />
              </IconButton>
            </Grid>
          </Grid>
          <p id="child-modal-description">
            Select new order prep time. Current prep time is 15 minutes.
          </p>
          <Grid container spacing={4} justifyContent="center" direction="row">
            <Grid item xs={3}>
              <Button
                variant="outlined"
                size="large"
                style={{
                  minHeight: '126px',
                  display: 'flex',
                  minWidth: '120px',
                }}
              >
                5 Min
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="outlined"
                size="large"
                style={{
                  minHeight: '126px',
                  display: 'flex',
                  minWidth: '120px',
                }}
              >
                25 Min
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="outlined"
                size="large"
                style={{
                  minHeight: '126px',
                  display: 'flex',
                  minWidth: '120px',
                }}
              >
                35 Min
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="outlined"
                size="large"
                style={{
                  minHeight: '126px',
                  display: 'flex',
                  minWidth: '120px',
                }}
              >
                45 Min
              </Button>
            </Grid>
          </Grid>
          <p>New order prep time will be reflected on storefront imeadiately</p>
          <Divider variant="middle" />
          <Grid container justifyContent="flex-end" direction="row" padding={1}>
            <Grid item xs={2}>
              <Button>Cancel</Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                style={{ minWidth: '134px', minHeight: '40px' }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="outlined">
        Status
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <Grid container direction="row" alignItems="center" sx={{ mb: -2 }}>
            <Grid item xs={11}>
              <h1 id="parent-modal-title">Store Status</h1>
            </Grid>
            <Grid item xs={1}>
              <IconButton>
                <CloseIcon onClick={handleClose} />
              </IconButton>
            </Grid>
          </Grid>
          <p id="parent-modal-description">
            Manage how new online orders will be accepted.
          </p>

          <Grid container spacing={4} justifyContent="center" direction="row">
            <Grid item xs={6}>
              <Button
                variant="outlined"
                size="large"
                style={{
                  maxHeight: '120px',
                  minHeight: '120px',
                  display: 'flex',
                  minWidth: '273px',
                }}
              >
                Accept orders
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                size="large"
                style={{
                  maxHeight: '120px',
                  minHeight: '120px',
                  minWidth: '273px',
                }}
              >
                Not accepting orders
              </Button>
            </Grid>
          </Grid>
          <p>
            Store is accepting online orders. Current order prep time is 15
            minutes.
          </p>
          <Divider variant="middle" />
          <Grid container justifyContent="flex-end" direction="row" padding={1}>
            <Grid item xs={5}>
              <ChildModal />
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                style={{ minWidth: '134px', minHeight: '40px' }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
