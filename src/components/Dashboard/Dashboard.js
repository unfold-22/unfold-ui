import { Box } from '@chakra-ui/react';
import Content from '../Content';
import Header from '../Header/Header';

const Dashboard = ({ children }) => {
  return (
    <Box h="100%">
      <Header />
      <Content />
    </Box>
  );
};

export default Dashboard;
