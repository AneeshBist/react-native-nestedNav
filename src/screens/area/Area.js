import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Area = () => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ margin: 20, alignItems: "center" }}>
          <View>
            <Text> Welcome To Area Page</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigate("Area Details");
              }}
            >
              <Text>Check Area Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Area;
