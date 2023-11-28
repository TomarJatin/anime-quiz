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

export default function Stats({ navigation }: any) {
  const { resultScore, resultQuizAnswers, resultQuizQuestions } = useContext(DataContext);

  

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
                  title="Home"
                  width={60}
                  paddingVertical={10}
                  onPress={() => {
                    navigation.navigate("Home");
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
                Result
              </Text>
            </View>

            <View
              style={{
                width: "100%",
                height: "100%",
                flexDirection: "column",
                alignItems: "center",
                padding: 20
              }}
            >
              <ImageBackground
                    source={require('../assets/bg1.jpeg')}
                    resizeMode='cover'
                    style={{
                        width: '100%',
                        borderRadius: 14,
                        overflow: 'hidden',
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
                                flexDirection: 'row',
                                width: "100%",
                                justifyContent: "space-between",
                                alignItems: 'center',
                            }}
                        >
                            <View>
                                <Text
                                    style={{
                                        color: Color.textColor,
                                        fontSize: FontSize.xs,
                                        fontWeight: '500',
                                        textAlign: "center"
                                    }}
                                >
                                    Games
                                </Text>
                                <Text
                                    style={{
                                        color: Color.textColor,
                                        fontSize: FontSize.md,
                                        fontWeight: '800',
                                        textAlign: "center"
                                    }}
                                >
                                    20
                                </Text>
                            </View>
                            <View>
                                <Text
                                    style={{
                                        color: Color.textColor,
                                        fontSize: FontSize.xs,
                                        fontWeight: '500',
                                        textAlign: "center"
                                    }}
                                >
                                    Coins Earned
                                </Text>
                                <Text
                                    style={{
                                        color: Color.textColor,
                                        fontSize: FontSize.md,
                                        fontWeight: '800',
                                        textAlign: "center"
                                    }}
                                >
                                    2000
                                </Text>
                            </View>
                            <View>
                                <Text
                                    style={{
                                        color: Color.textColor,
                                        fontSize: FontSize.xs,
                                        fontWeight: '500',
                                        textAlign: "center"
                                    }}
                                >
                                    Wins
                                </Text>
                                <Text
                                    style={{
                                        color: Color.textColor,
                                        fontSize: FontSize.md,
                                        fontWeight: '800',
                                        textAlign: "center"
                                    }}
                                >
                                    2
                                </Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
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
