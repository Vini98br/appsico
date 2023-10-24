import { Ionicons } from "@expo/vector-icons";
import { ReactNode } from "react";
import {
  Adapt,
  Button,
  Input,
  Label,
  ListItem,
  Popover,
  View,
  XStack,
  YGroup,
  YStack,
} from "tamagui";

export interface SearchBarProps {
  placeholder: string;
  onSearch: (value: string) => Promise<void> | void;
  actions: {
    icon: ReactNode;
    handler: () => void;
  }[];
}

const SearchBar = ({ onSearch, placeholder, actions }: SearchBarProps) => {
  return (
    <XStack
      justifyContent="flex-start"
      alignItems="center"
      padding="$3"
      width={"100%"}>
      <Input
        flex={1}
        marginRight={"$3"}
        borderRadius={"$10"}
        justifyContent="flex-start"
        placeholder={placeholder}
      />
      {actions.map((action, i) => (
        <Popover size="$5" allowFlip>
          <Popover.Trigger asChild>{action.icon}</Popover.Trigger>

          <Adapt when="sm" platform="touch">
            <Popover.Sheet modal dismissOnSnapToBottom>
              <Popover.Sheet.Frame padding="$4">
                <Adapt.Contents />
              </Popover.Sheet.Frame>
              <Popover.Sheet.Overlay
                animation="lazy"
                enterStyle={{ opacity: 0 }}
                exitStyle={{ opacity: 0 }}
              />
            </Popover.Sheet>
          </Adapt>

          <Popover.Content
            borderWidth={1}
            borderColor="$borderColor"
            enterStyle={{ y: -10, opacity: 0 }}
            exitStyle={{ y: -10, opacity: 0 }}
            elevate
            animation={[
              "quick",
              {
                opacity: {
                  overshootClamping: true,
                },
              },
            ]}>
            <Popover.Arrow borderWidth={1} borderColor="$borderColor" />

            <YGroup alignSelf="center" bordered width={240} size="$4">
              <YGroup.Item>
                <ListItem
                  hoverTheme
                  // icon={Star}
                  title="Star"
                  // subTitle="Twinkles"
                />
              </YGroup.Item>
              <YGroup.Item>
                <ListItem hoverTheme>Moon</ListItem>
              </YGroup.Item>
            </YGroup>
          </Popover.Content>
        </Popover>
      ))}
    </XStack>
  );
};

export default SearchBar;
