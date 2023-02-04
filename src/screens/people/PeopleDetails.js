import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { useLinkTo, useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

const PeopleDetails = () => {
  const { navigate } = useNavigation();
  const linkTo = useLinkTo();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ margin: 20, alignItems: "center" }}>
          <View>
            <Text> Page is showing people's details</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigate("Area");
              }}
            >
              <Text>Back to People</Text>
            </TouchableOpacity>
            <Button
              onPress={() => linkTo("/Area Page/Area")}
              title="Check the Areas"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PeopleDetails;
