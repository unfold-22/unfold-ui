import { Box } from '@chakra-ui/react';
import Content from '../Content';
import Header from '../Header/Header';

const Dashboard = () => {
  return (
    <Box h="100vh">
      <Header />
      <Content />
    </Box>
  );
};

export default Dashboard;
