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

export default function SelectCategory({ navigation }: any) {
  const { selectedQuizSection, setSelectedCategory } = useContext(DataContext);

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
                Select Category
              </Text>
            </View>

            <FlatList
              data={selectedQuizSection ? selectedQuizSection?.categories : []}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setSelectedCategory({ ...item });
                    navigation.navigate("SelectLevel");
                  }}
                  activeOpacity={0.5}
                  style={{ marginTop: 30 }}
                >
                  <ImageBackground
                    source={require("../assets/bg.png")}
                    resizeMode="cover"
                    style={{
                      width: "100%",
                      borderRadius: 14,
                      overflow: "hidden",
                    }}
                  >
                    <View
                      style={{
                        paddingHorizontal: 26,
                        paddingVertical: 20,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 10,
                          alignItems: "center",
                        }}
                      >
                        <Image
                          style={{
                            width: 80,
                            height: 80,
                          }}
                          contentFit="contain"
                          source={require("../assets/robot.png")}
                        />
                        <View>
                          <Text
                            style={{
                              color: Color.textColor,
                              fontSize: FontSize.md,
                              fontWeight: "800",
                            }}
                          >
                            {item?.title}
                          </Text>
                          <Text
                            style={{
                              color: Color.textColor,
                              fontSize: FontSize.xs,
                              fontWeight: "800",
                              marginTop: 6,
                            }}
                          >
                            Test your skills with Ai
                          </Text>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              )}
              style={{
                paddingHorizontal: 15,
              }}
            />
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
