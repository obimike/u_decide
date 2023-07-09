import {
  Text,
  Box,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { colors } from "../../utils/colors";

import IconHolder from "../../components/iconHolder";
import { FiUser, FiUsers, FiCheckSquare, FiCalendar } from "react-icons/fi";
import Stat from "../../components/stat";
import { SiteBodyMaxWidth } from "../../components/containers";
import News from "./panels/news";
import ElectionDate from "./panels/election_date";
import Candidate from "./panels/candidate";

function Dashboard() {
  return (
    <Box>
      <Box
        display="flex"
        h="75px"
        bg={colors.primary}
        w="100%"
        px={12}
        alignItems="center"
        justifyContent="space-between"
        marginBottom="24px"
      >
        <Text fontSize="24px" display="flex" color="white">
          U-Decide
        </Text>
        <Flex alignItems="center">
          <Text fontSize="18px" display="flex" color="white" mr="16px">
            Hello, Daniel
          </Text>
          <IconHolder bgColor={colors.gray} size={8}>
            <FiUser fontSize={24} color={colors.grayText} />
          </IconHolder>
        </Flex>
      </Box>
      <SiteBodyMaxWidth>
        <Text fontSize="24px" display="flex" color={colors.grayText} mb="12px">
          Statistics
        </Text>
        <Box
          display="flex"
          w="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stat
            color={colors.gray}
            textColor={colors.grayText}
            bgColor={colors.primary}
            title="Total Registered Voters"
            number="50,502,029"
          >
            <FiUsers fontSize={24} color={colors.gray} />
          </Stat>

          <Stat
            color={colors.gray}
            textColor={colors.grayText}
            bgColor={colors.primary}
            title="Total Vote Cast"
            number="20,052,944"
          >
            <FiCheckSquare fontSize={24} color={colors.gray} />
          </Stat>

          <Stat
            color={colors.gray}
            textColor={colors.grayText}
            bgColor={colors.primary}
            title="Election Date"
            number="Sat, 7 February 2023"
          >
            <FiCalendar fontSize={24} color={colors.gray} />
          </Stat>
        </Box>
        <Text
          fontSize="24px"
          display="flex"
          color={colors.grayText}
          mb="12px"
          mt="24px"
        >
          Activities
        </Text>

        <Box>
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList backgroundColor={colors.gray} borderRadius={8} padding={2}>
              <Tab borderRadius={8}>News/Updates</Tab>
              <Tab borderRadius={8}>Electoral Candidates</Tab>
              <Tab borderRadius={8}>Election Date</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <News />
              </TabPanel>
              <TabPanel>
                <Candidate />
              </TabPanel>
              <TabPanel>
                <ElectionDate />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </SiteBodyMaxWidth>

      {/* <Box bg={colors.primary} w="100%" py={2} bottom={0}>
        <Text fontSize="16px" color="white" textAlign="center">
          &copy; 2023, U-Decide
        </Text>
      </Box> */}
    </Box>
  );
}

export default Dashboard;
