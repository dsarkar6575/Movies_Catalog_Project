import { List, ListItem, ListItemText, Paper } from '@mui/material';
import Link from 'next/link'; 


export default function Sidebar() {
  return (
    <Paper style={{ height: '100%', padding: '10px 0', minWidth: '200px' }}>
      <List>
        <ListItem 
          button
          component={Link} 
          href="/movies"
          sx={{
            color: 'black',
            '&:hover': {
              backgroundColor: '#f5f5f5', 
              color: 'blue',
            },
          }}
        >
          <ListItemText primary="Movies" />
        </ListItem>
        <ListItem 
          button
          component={Link} 
          href="/settings"
          sx={{
            color: 'black', 
            '&:hover': {
              backgroundColor: '#f5f5f5', 
              color: 'blue', 
            },
          }}
        >
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Paper>
  );
}
