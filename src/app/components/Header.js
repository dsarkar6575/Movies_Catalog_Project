import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">Header</Typography>
        <div>
        <Button color="inherit">Login</Button>
          <Button color="inherit">Signin</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
