import { Box, Stack } from '@mui/material';
import Feed from './component/Feed';
import Rightbar from './component/Rightbar';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <Box>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
