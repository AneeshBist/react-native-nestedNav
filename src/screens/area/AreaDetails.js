import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
const AreaDetails = () => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ margin: 20, alignItems: "center" }}>
          <View>
            <Text> Reached on the Linked Page.</Text>
            <Text> This Page shows area details</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigate("Area");
              }}
            >
              <Text>Back to Areas</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AreaDetails;
