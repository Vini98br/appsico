import { View } from "react-native";
import {
  Avatar,
  ListItem,
  ScrollView,
  Separator,
  XStack,
  YGroup,
} from "tamagui";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const PatientsScreen = () => {
  const { navigate } = useNavigation();
  return (
    <YGroup scrollable borderRadius={"$0"} size="$5" separator={<Separator />}>
      {Array(10)
        .fill("")
        .map((_, i) => (
          <YGroup.Item key={i}>
            <ListItem
              onPress={() => navigate("Patient", { name: "Fulano" })}
              hoverTheme
              pressTheme
              title="Star"
              subTitle="Subtitle"
              icon={() => (
                <Avatar circular size="$6">
                  <Avatar.Image src="http://placekitten.com/200/300" />
                  <Avatar.Fallback bc="red" />
                </Avatar>
              )}
              iconAfter={() => <Ionicons name="chevron-forward" />}
            />
          </YGroup.Item>
        ))}
    </YGroup>
  );
};

export default PatientsScreen;
