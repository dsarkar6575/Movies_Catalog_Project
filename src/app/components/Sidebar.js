import { List, ListItem, ListItemText, Paper } from '@mui/material';

export default function Sidebar() {
  return (
    <Paper style={{ height: '100%', padding: '10px 0', minWidth: '200px' }}>
      <List>
        <ListItem button>
          <ListItemText primary="Movies" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Paper>
  );
}
