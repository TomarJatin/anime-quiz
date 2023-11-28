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

export default function Result({ navigation }: any) {
  const { resultScore, resultQuizAnswers, resultQuizQuestions } = useContext(DataContext);

  const calculateResult = () => {

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
                padding: 15
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
                                    Your Score
                                </Text>
                                <Text
                                    style={{
                                        color: Color.textColor,
                                        fontSize: FontSize.md,
                                        fontWeight: '800',
                                        textAlign: "center"
                                    }}
                                >
                                    {resultScore}
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
                                    Points Gained
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
                        <View
                            style={{
                                flexDirection: 'row',
                                width: "100%",
                                justifyContent: "space-between",
                                alignItems: 'center',
                                marginTop: 40
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
                                    Skipped
                                </Text>
                                <Text
                                    style={{
                                        color: Color.textColor,
                                        fontSize: FontSize.md,
                                        fontWeight: '800',
                                        textAlign: "center"
                                    }}
                                >
                                    {resultQuizQuestions.length - resultQuizAnswers.filter((a: any) => !a.isSkipped).length} / {resultQuizQuestions.length}
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
                                    Correct
                                </Text>
                                <Text
                                    style={{
                                        color: Color.textColor,
                                        fontSize: FontSize.md,
                                        fontWeight: '800',
                                        textAlign: "center"
                                    }}
                                >
                                    {resultQuizAnswers.filter((a: any) => !a.isSkipped && a.isCorrect).length} / {resultQuizQuestions.length}
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
                                    Wrong
                                </Text>
                                <Text
                                    style={{
                                        color: Color.textColor,
                                        fontSize: FontSize.md,
                                        fontWeight: '800',
                                        textAlign: "center"
                                    }}
                                >
                                    {resultQuizAnswers.filter((a: any) => !a.isSkipped && !a.isCorrect).length} / {resultQuizQuestions.length}
                                </Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>

              <View style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                width: "100%",
                justifyContent: "space-between",
                gap: 20,
                marginTop: 40
              }}>
                <GeneralButton
                  title="Play Next"
                  width={"45%"}
                  paddingVertical={20}
                  onPress={() => {
                  }}
                  borderRadius={8}
                />
                <GeneralButton
                  title="Review"
                  width={"45%"}
                  paddingVertical={20}
                  onPress={() => {
                  }}
                  borderRadius={8}
                />
                <GeneralButton
                  title="Share"
                  width={"45%"}
                  paddingVertical={20}
                  onPress={() => {}}
                  borderRadius={8}
                />
                <GeneralButton
                  title="Leaderboard"
                  width={"45%"}
                  paddingVertical={20}
                  onPress={() => {
                  }}
                  borderRadius={8}
                />
              </View>
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
