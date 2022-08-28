import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
  useColorModeValue,
  ColorModeScript,
  useColorMode,
  Button,
  Img,
  Container,
  Stack,
  List,
  ListItem,
  ListIcon,
  Center,
  Image,
  Heading,
  Badge,
  useTheme,
} from '@chakra-ui/react';
import { CheckIcon, ChevronRightIcon } from '@chakra-ui/icons';
import ModuleOne from './ModuleOne';
import ModuleTwo from './ModuleTwo';

const Dapps = ({ selected, onSelect }) => {
  return (
    <Box marginTop="20px">
      <ModuleOne selected={selected} onSelect={onSelect} />
      <ModuleTwo />
    </Box>
  );
};

export default Dapps;
