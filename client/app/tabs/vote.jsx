import { Box, Text, Button, HStack, VStack } from "native-base";
import { StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import color from "../../utils/color";
import { useRouter, Tabs } from "expo-router";
import CategoryCard from "./components/categoryCard";
import { doc, db, getDoc } from "../firebase";
import { compareAsc, parseISO } from "date-fns";

const Vote = () => {
  const [electionDate, setElectionDate] = useState(
    formatDate(subtractDays(new Date(), 5))
  );
  const [_date, set_date] = useState(-1);

  const router = useRouter();

  useEffect(() => {
    const getDate = async () => {
      const docRef = doc(db, "elections", "date");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setElectionDate(docSnap.data().date.toString());

        const newDate = new Date().toISOString().split("T")[0];
        const dateFromServer = formatDate(new Date(docSnap.data().date));
        // const checkDate = compareAsc(newDate, dateFromServer);
        // set_date(checkDate);

        console.log("newDate = " + newDate);
        console.log("dateFromServer = " + dateFromServer);

        console.log(formatDate(new Date()) > dateFromServer);
        if (formatDate(new Date()) < dateFromServer) {
          set_date(1);
          console.log("Server Date is in the future");
        } else if (formatDate(new Date()) === dateFromServer) {
          console.log("Server Date is as the date as today");
          set_date(0);
        } else if (formatDate(new Date()) > dateFromServer) {
          console.log("Server Date is in the past");
          set_date(-1);
        }
      } else {
        console.log("No such document!");
      }
    };

    return () => {
      getDate();
    };
  }, []);

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  function subtractDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

  console.log("election: " + electionDate);

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
          Elections {_date}
        </Text>
        {(_date) =>
          0 && (
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
                Results
              </Text>
            </Button>
          )
        }
      </HStack>
      <Box padding={4}>
        <VStack space={2}>
          <CategoryCard
            categoryName="Presidential Election"
            categoryRegion="Nationwide"
          />
          <CategoryCard
            categoryName="Governorship Election"
            categoryRegion="Lagos State"
          />
          <CategoryCard
            categoryName="Senatorial Election"
            categoryRegion="Senatorial zone"
          />
          <CategoryCard
            categoryName="House of Assembly Election"
            categoryRegion="Constituency"
          />
        </VStack>
      </Box>
    </Box>
  );
};

export default Vote;
