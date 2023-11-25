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
import ImgButton from "../components/ImgButton";
import { Image } from "expo-image";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

export default function Home({ navigation }: any) {
  const quizSection = [
    {
      url: "",
      title: "Mix Questions",
      tag: "Mix",
      categories: [
        {
          img_url: "",
          title: "Easy",
          levels: 50
        },
        {
          img_url: "",
          title: "Medium",
          levels: 50
        },
        {
          img_url: "",
          title: "Hard",
          levels: 50
        }
      ]
    },
    {
      url: "",
      title: "Anime Quiz",
      tag: "Anime",
      categories: [
        {
          img_url: "",
          title: "Dragon Ball",
          levels: 50
        },
        {
          img_url: "",
          title: "One Piece",
          levels: 50
        },
      ]
    },
    {
      url: "",
      title: "Quotes Quiz",
      tag: "Quotes",
      categories: [
        {
          img_url: "",
          title: "Dragon Ball",
          levels: 50
        },
        {
          img_url: "",
          title: "One Piece",
          levels: 50
        },
      ]
    },
    {
      url: "",
      title: "Characters Quiz",
      tag: "Characters",
      categories: [
        {
          img_url: "",
          title: "Goku",
          levels: 50
        },
        {
          img_url: "",
          title: "Luffy",
          levels: 50
        },
      ]
    },
  ];

  const {setSelectedQuizSection} = useContext(DataContext);

  return (
    <SafeAreaView>
      <StatusBar
        backgroundColor={Color.backgroundColor}
        barStyle={"light-content"}
      />
      <FlatList
        data={["1"]}
        renderItem={() => (
          <>
            {/* Topbar */}
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 15,
                paddingVertical: 10,
              }}
            >
              <ImgButton
                children={
                  <Ionicons name="reorder-three" size={24} color="white" />
                }
                width={36}
                paddingHorizontal={6}
                paddingVertical={4}
                onPress={() => {}}
                borderRadius={8}
              />
              <View
                style={{
                  flexDirection: "row",
                  gap: 20,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 80,
                    backgroundColor: Color.darkBlue,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: 50,
                    borderWidth: 2,
                    borderColor: Color.blue,
                  }}
                >
                  <AntDesign
                    name="star"
                    size={35}
                    color={Color.starColor}
                    style={{ marginLeft: -12, position: "absolute" }}
                  />
                  <Text
                    style={{
                      color: Color.textColor,
                      fontSize: FontSize.sm,
                      fontWeight: "700",
                      marginLeft: 40,
                    }}
                  >
                    34
                  </Text>
                </View>
                <View
                  style={{
                    width: 80,
                    backgroundColor: Color.darkBlue,
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: 50,
                    borderWidth: 2,
                    borderColor: Color.blue,
                  }}
                >
                  <FontAwesome
                    name="dollar"
                    size={35}
                    color={Color.starColor}
                    style={{ marginLeft: -8, position: "absolute" }}
                  />
                  <Text
                    style={{
                      color: Color.textColor,
                      fontSize: FontSize.sm,
                      fontWeight: "700",
                      marginLeft: 40,
                    }}
                  >
                    4
                  </Text>
                </View>
              </View>
            </View>

            {/* Cards */}
            <View
              style={{
                paddingHorizontal: 15,
                paddingBottom: 50,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 30,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 8,
                    alignItems: "center",
                  }}
                >
                  <Fontisto name="stopwatch" size={24} color="white" />
                  <Text
                    style={{
                      color: Color.textColor,
                      fontWeight: "700",
                      fontSize: FontSize.sm,
                    }}
                  >
                    Quiz Zone
                  </Text>
                </View>
                <TouchableOpacity activeOpacity={0.5}>
                  <Text
                    style={{
                      color: Color.textColor,
                      fontWeight: "700",
                      fontSize: FontSize.sm,
                      textDecorationLine: "underline",
                    }}
                  >
                    View All
                  </Text>
                </TouchableOpacity>
              </View>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={{
                  marginTop: 15,
                }}
              >
                {quizSection.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedQuizSection({...item})
                      navigation.navigate("SelectCategory");
                    }}
                    activeOpacity={0.5}
                    style={{ marginRight: 15 }}
                    key={index}
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
                          paddingHorizontal: 20,
                          paddingVertical: 14,
                          flexDirection: "column",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <Image
                          source="https://i2.wp.com/i.imgur.com/C4EKjFB.jpg"
                          style={{
                            width: 60,
                            height: 60,
                            borderRadius: 30,
                          }}
                        />
                        <Text
                          style={{
                            fontWeight: "700",
                            color: Color.textColor,
                            fontSize: FontSize.sm,
                            width: 100,
                            textAlign: "center",
                          }}
                        >
                          {item?.title}
                        </Text>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              {/* Play with ai */}
              <TouchableOpacity
                onPress={() => {}}
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
                          Play with Ai
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

              {/* Battle zone */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 30,
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    gap: 8,
                    alignItems: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="axe-battle"
                    size={24}
                    color="white"
                  />
                  <Text
                    style={{
                      color: Color.textColor,
                      fontWeight: "700",
                      fontSize: FontSize.sm,
                    }}
                  >
                    Battle Zone
                  </Text>
                </View>
                <TouchableOpacity activeOpacity={0.5}>
                  <Text
                    style={{
                      color: Color.textColor,
                      fontWeight: "700",
                      fontSize: FontSize.sm,
                      textDecorationLine: "underline",
                    }}
                  >
                    View All
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: "column", gap: 15, marginTop: 20 }}>
                <TouchableOpacity onPress={() => {}} activeOpacity={0.5}>
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
                            Group Battle
                          </Text>
                          <Text
                            style={{
                              color: Color.textColor,
                              fontSize: FontSize.xs,
                              fontWeight: "800",
                              marginTop: 6,
                            }}
                          >
                            Test your skills with Group Battle
                          </Text>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} activeOpacity={0.5}>
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
                            Play One v/s One
                          </Text>
                          <Text
                            style={{
                              color: Color.textColor,
                              fontSize: FontSize.xs,
                              fontWeight: "800",
                              marginTop: 6,
                            }}
                          >
                            Play one v/s one battle
                          </Text>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} activeOpacity={0.5}>
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
                            Random Battle
                          </Text>
                          <Text
                            style={{
                              color: Color.textColor,
                              fontSize: FontSize.xs,
                              fontWeight: "800",
                              marginTop: 6,
                            }}
                          >
                            Play random battles
                          </Text>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
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
