import {
  Dimensions,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color, FontSize } from "../GlobalStyle";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GeneralButton from "../components/Button";
import { Image } from "expo-image";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

export default function SelectLevel({ navigation }: any) {
  const { selectedCategory, setSelectLvl } = useContext(DataContext);
  const LvlArr = selectedCategory ? new Array(selectedCategory?.levels) : [];

  const handleSelectLevel = (index: number) => {
    setSelectLvl(index+1);
    navigation.navigate("Quiz");
  }

  return (
    <SafeAreaView>
      <FlatList
        data={["1"]}
        renderItem={() => (
          <>
            {/* Topbar */}
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                gap: 20,
                paddingHorizontal: 15,
                paddingVertical: 10,
                alignItems: "center",
              }}
            >
              <GeneralButton
                  title="Back"
                  width={60}
                  paddingVertical={10}
                  onPress={() => {
                    navigation.goBack();
                  }}
                  borderRadius={8}
                />
              <Text
                style={{
                  color: Color.textColor,
                  fontSize: FontSize.sm,
                  fontWeight: "700",
                }}
              >
                Select Level
              </Text>
            </View>

            <View
              style={{
                width: "100%",
                height: "100%",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <FlatList
                data={LvlArr}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleSelectLevel(index)}
                    activeOpacity={0.5}
                    style={{ marginTop: 20, marginRight: 20 }}
                  >
                    <ImageBackground
                      source={require("../assets/bg.png")}
                      resizeMode="cover"
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: 40,
                        overflow: "hidden",
                      }}
                    >
                      <View
                        style={{
                          width: "100%",
                          height: "100%",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: Color.textColor,
                            fontSize: FontSize.md,
                            fontWeight: "800",
                          }}
                        >
                          {index + 1}
                        </Text>
                        <Text
                          style={{
                            color: Color.textColor,
                            fontSize: FontSize.xxs,
                            fontWeight: "500",
                          }}
                        >
                          Level
                        </Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                )}
                style={{
                  paddingHorizontal: 15,
                }}
                numColumns={3}
              />
            </View>
          </>
        )}
        style={{
          width: "100%",
          minHeight: Dimensions.get("window").height,
          backgroundColor: Color.backgroundColor,
        }}
      />
    </SafeAreaView>
  );
}
