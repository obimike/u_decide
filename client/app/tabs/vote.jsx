import { Box, Text, Button, HStack, VStack, Center, Image } from "native-base";
import color from "../../utils/color";
import { useRouter } from "expo-router";
import CategoryCard from "./components/categoryCard";

import IMAGE from "../../assets/images/no_election.png";
import { useAuth } from "../../utils/authProvider";

const Vote = () => {
  const { _date, electionDate, User } = useAuth();

  const router = useRouter();
  // console.log(User);

  return (
    <Box h="100%">
      <HStack
        backgroundColor={color.white}
        padding={4}
        justifyContent="space-between"
      >
        <Text
          color={color.textColor}
          fontSize={24}
          fontFamily="Poppins-Regular"
          alignSelf="center"
        >
          Elections
        </Text>
        {_date === 0 && (
          <Button
            backgroundColor={color.primary}
            onPress={() => {
              router.push("/tabs/pages/live_results");
            }}
          >
            <Text
              fontFamily="Poppins-Regular"
              color={color.white}
              fontSize={14}
            >
              Live Results
            </Text>
          </Button>
        )}
      </HStack>
      <Box padding={4}>
        {_date === 0 && (
          <VStack space={2}>
            <CategoryCard
              categoryName="Presidential Election"
              categoryRegion="Nationwide"
              voted={User.voted["Presidential Election"]}
            />
            <CategoryCard
              categoryName="Governorship Election"
              categoryRegion="State"
              voted={User.voted["Governorship Election"]}
            />
            <CategoryCard
              categoryName="Senatorial Election"
              categoryRegion="Senatorial zone"
              voted={User.voted["Senatorial Election"]}
            />
            <CategoryCard
              categoryName="House of Assembly Election"
              categoryRegion="Constituency"
              voted={User.voted["House of Assembly Election"]}
            />
          </VStack>
        )}
        {_date != 0 && (
          <Center mt={8}>
            <Image width="5/6" height={368} source={IMAGE} alt="Image" />

            <Text
              marginTop={8}
              color={color.textColor}
              fontFamily="Poppins-Regular"
              fontSize="2xl"
              textAlign="center"
            >
              {_date === 1 &&
                "Election date is scheduled for the \n" +
                  new Date(electionDate).toDateString()}

              {_date === -1 &&
                "Elections was held on the \n" +
                  new Date(electionDate).toDateString()}
            </Text>
          </Center>
        )}
      </Box>
    </Box>
  );
};

export default Vote;
