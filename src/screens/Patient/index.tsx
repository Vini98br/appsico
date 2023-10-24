import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  H5,
  Input,
  ListItem,
  Separator,
  SizableText,
  Tabs,
  TabsContentProps,
  XStack,
  YGroup,
  YStack,
} from "tamagui";
import SearchBar from "../../components/molecules/SearchBar";
const TabsContent = (props: TabsContentProps) => {
  return (
    <Tabs.Content
      backgroundColor="$background"
      key="tab3"
      padding="$2"
      alignItems="center"
      justifyContent="center"
      flex={1}
      borderColor="$background"
      borderRadius="$2"
      borderTopLeftRadius={0}
      borderTopRightRadius={0}
      borderWidth="$2"
      {...props}>
      {props.children}
    </Tabs.Content>
  );
};

const PatientScreen = () => {
  const { navigate } = useNavigation();
  return (
    <Tabs
      defaultValue="tab1"
      orientation="horizontal"
      flexDirection="column"
      flex={1}
      borderWidth="$0.25"
      overflow="hidden"
      borderColor="$borderColor">
      <Tabs.List
        separator={<Separator vertical />}
        disablePassBorderRadius="bottom"
        aria-label="Manage your account">
        <Tabs.Tab flex={1} value="tab1">
          <SizableText fontFamily="$body">Perfil</SizableText>
        </Tabs.Tab>
        <Tabs.Tab flex={1} value="tab2">
          <SizableText fontFamily="$body">Atividades</SizableText>
        </Tabs.Tab>
        <Tabs.Tab flex={1} value="tab3">
          <SizableText fontFamily="$body">Histórico</SizableText>
        </Tabs.Tab>
      </Tabs.List>
      <Separator />
      <TabsContent value="tab1">
        <H5>Profile</H5>
      </TabsContent>

      <TabsContent value="tab2" padding="$0">
        <YStack flex={1} margin="$-2">
          <SearchBar
            placeholder="Procurar atividade"
            onSearch={() => {}}
            actions={[
              {
                handler: () => {},
                icon: <Ionicons name={"add"} size={25} />,
              },
            ]}
          />
          <YGroup
            flex={1}
            borderRadius={"$0"}
            scrollable
            size="$5"
            separator={<Separator />}>
            {Array(10)
              .fill("")
              .map((_, i) => (
                <YGroup.Item key={i}>
                  <ListItem
                    onPress={() => navigate("Activity", { name: "Pare" })}
                    hoverTheme
                    pressTheme
                    title="Star"
                    subTitle="Subtitle"
                    iconAfter={() => <Ionicons name="chevron-forward" />}
                  />
                </YGroup.Item>
              ))}
          </YGroup>
        </YStack>
      </TabsContent>

      <TabsContent value="tab3" padding="$0">
        <YStack flex={1} margin="$-2">
          <SearchBar
            placeholder="Procurar atividade"
            onSearch={() => {}}
            actions={[
              {
                handler: () => {},
                icon: <Ionicons name={"filter"} size={25} />,
              },
            ]}
          />
          <YGroup
            flex={1}
            borderRadius={"$0"}
            scrollable
            size="$5"
            separator={<Separator />}>
            {Array(10)
              .fill("")
              .map((_, i) => (
                <YGroup.Item key={i}>
                  <ListItem
                    onPress={() => navigate("Activity", { name: "Pare" })}
                    hoverTheme
                    pressTheme
                    title="Star"
                    subTitle="Subtitle"
                    iconAfter={() => <Ionicons name="chevron-forward" />}
                  />
                </YGroup.Item>
              ))}
          </YGroup>
        </YStack>
      </TabsContent>
    </Tabs>
  );
};

export default PatientScreen;
