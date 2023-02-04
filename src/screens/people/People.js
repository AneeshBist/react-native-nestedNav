import { SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

const People = () => {
  const { navigate } = useNavigation();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ margin: 20, alignItems: "center" }}>
          <View>
            <Text> This is People's page</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigate("People Details");
              }}
            >
              <Text>Click for more details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default People;
