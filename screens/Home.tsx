import {
  Dimensions,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Switch,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Color, FontSize } from "../GlobalStyle";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import ImgButton from "../components/ImgButton";
import Modal from "react-native-modal";
import { Image } from "expo-image";
import { useContext, useState } from "react";
import GeneralButton from "../components/Button";
import { LinearGradient } from "expo-linear-gradient";
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
          levels: 50,
        },
        {
          img_url: "",
          title: "Medium",
          levels: 50,
        },
        {
          img_url: "",
          title: "Hard",
          levels: 50,
        },
      ],
    },
    {
      url: "",
      title: "Anime Quiz",
      tag: "Anime",
      categories: [
        {
          img_url: "",
          title: "Dragon Ball",
          levels: 50,
        },
        {
          img_url: "",
          title: "One Piece",
          levels: 50,
        },
      ],
    },
    {
      url: "",
      title: "Quotes Quiz",
      tag: "Quotes",
      categories: [
        {
          img_url: "",
          title: "Dragon Ball",
          levels: 50,
        },
        {
          img_url: "",
          title: "One Piece",
          levels: 50,
        },
      ],
    },
    {
      url: "",
      title: "Characters Quiz",
      tag: "Characters",
      categories: [
        {
          img_url: "",
          title: "Goku",
          levels: 50,
        },
        {
          img_url: "",
          title: "Luffy",
          levels: 50,
        },
      ],
    },
  ];
  const [open, setOpen] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  const { setSelectedQuizSection } = useContext(DataContext);

  return (
    <>
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
                    <Ionicons name="reorder-three" size={28} color="white" />
                  }
                  width={40}
                  paddingHorizontal={6}
                  paddingVertical={2}
                  onPress={() => {
                    setOpen("menu");
                  }}
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
                        setSelectedQuizSection({ ...item });
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

                <View
                  style={{ flexDirection: "column", gap: 15, marginTop: 20 }}
                >
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
      <Modal
        isVisible={open !== ""}
        onSwipeComplete={() => setOpen("")}
        onBackdropPress={() => setOpen("")}
        onBackButtonPress={() => setOpen("")}
        style={{}}
      >
        {open === "menu" && (
          <LinearGradient
            colors={[Color.popUpBlue1, Color.popUpBlue2]}
            style={{
              backgroundColor: Color.backgroundColor,
              padding: 22,
              borderRadius: 20,
              borderColor: Color.popUpBorder,
              borderWidth: 3,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                position: "absolute",
                width: "100%",
                marginTop: -15,
                marginLeft: 35,
              }}
            >
              <TouchableOpacity onPress={() => setOpen("")} activeOpacity={0.5}>
                <Entypo
                  name="squared-cross"
                  style={{
                    backgroundColor: Color.redButtonTxt,
                    borderRadius: 6,
                  }}
                  size={30}
                  color={Color.redButtonbg}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                gap: 16,
              }}
            >
              <GeneralButton
                title="Settings"
                width={"80%"}
                paddingVertical={8}
                onPress={() => setOpen("settings")}
                borderRadius={8}
              />
              <GeneralButton
                title="Stats"
                width={"80%"}
                paddingVertical={8}
                onPress={() => {
                  setOpen("stats");
                }}
                borderRadius={8}
              />
              <GeneralButton
                title="Bookmark"
                width={"80%"}
                paddingVertical={8}
                onPress={() => {}}
                borderRadius={8}
              />
              <GeneralButton
                title="Leaderboard"
                width={"80%"}
                paddingVertical={8}
                onPress={() => {}}
                borderRadius={8}
              />
              <GeneralButton
                title="Instructions"
                width={"80%"}
                paddingVertical={8}
                onPress={() => {}}
                borderRadius={8}
              />
            </View>
          </LinearGradient>
        )}

        {open === "stats" && (
          <LinearGradient
            colors={[Color.popUpBlue1, Color.popUpBlue2]}
            style={{
              backgroundColor: Color.backgroundColor,
              padding: 22,
              borderRadius: 20,
              borderColor: Color.popUpBorder,
              borderWidth: 3,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                position: "absolute",
                width: "100%",
                marginTop: -15,
                marginLeft: 35,
              }}
            >
              <TouchableOpacity onPress={() => setOpen("")} activeOpacity={0.5}>
                <Entypo
                  name="squared-cross"
                  style={{
                    backgroundColor: Color.redButtonTxt,
                    borderRadius: 6,
                  }}
                  size={30}
                  color={Color.redButtonbg}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text
                style={{
                  color: Color.textColor,
                  fontSize: FontSize.md,
                  fontWeight: "800",
                  textAlign: "center",
                }}
              >
                Statistics
              </Text>
              <View style={{ marginTop: 20 }}>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View>
                    <Text
                      style={{
                        color: Color.textColor,
                        fontSize: FontSize.xs,
                        fontWeight: "500",
                        textAlign: "center",
                      }}
                    >
                      Coins Earned
                    </Text>
                    <Text
                      style={{
                        color: Color.textColor,
                        fontSize: FontSize.md,
                        fontWeight: "800",
                        textAlign: "center",
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
                        fontWeight: "500",
                        textAlign: "center",
                      }}
                    >
                      Your Score
                    </Text>
                    <Text
                      style={{
                        color: Color.textColor,
                        fontSize: FontSize.md,
                        fontWeight: "800",
                        textAlign: "center",
                      }}
                    >
                      323
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: Color.textColor,
                        fontSize: FontSize.xs,
                        fontWeight: "500",
                        textAlign: "center",
                      }}
                    >
                      Points Gained
                    </Text>
                    <Text
                      style={{
                        color: Color.textColor,
                        fontSize: FontSize.md,
                        fontWeight: "800",
                        textAlign: "center",
                      }}
                    >
                      2
                    </Text>
                  </View>
                </View>
                <View
                  style={{ marginTop: 20, flexDirection: "column", gap: 10 }}
                >
                  <Text
                    style={{
                      color: Color.textColor,
                      fontSize: FontSize.xs,
                      fontWeight: "500",
                    }}
                  >
                    Total Questions: 24
                  </Text>
                  <Text
                    style={{
                      color: Color.textColor,
                      fontSize: FontSize.xs,
                      fontWeight: "500",
                    }}
                  >
                    Correct Questions: 24
                  </Text>
                  <Text
                    style={{
                      color: Color.textColor,
                      fontSize: FontSize.xs,
                      fontWeight: "500",
                    }}
                  >
                    Incorrect Questions: 24
                  </Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        )}

        {open === "settings" && (
          <LinearGradient
            colors={[Color.popUpBlue1, Color.popUpBlue2]}
            style={{
              backgroundColor: Color.backgroundColor,
              padding: 22,
              borderRadius: 20,
              borderColor: Color.popUpBorder,
              borderWidth: 3,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                position: "absolute",
                width: "100%",
                marginTop: -15,
                marginLeft: 35,
              }}
            >
              <TouchableOpacity onPress={() => setOpen("")} activeOpacity={0.5}>
                <Entypo
                  name="squared-cross"
                  style={{
                    backgroundColor: Color.redButtonTxt,
                    borderRadius: 6,
                  }}
                  size={30}
                  color={Color.redButtonbg}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text
                style={{
                  color: Color.textColor,
                  fontSize: FontSize.md,
                  fontWeight: "800",
                  textAlign: "center",
                }}
              >
                Settings
              </Text>
              <View style={{ marginTop: 20, flexDirection: "column"}}>
              <View style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>
                  <Text
                style={{
                  color: Color.textColor,
                  fontSize: FontSize.sm,
                  fontWeight: "600",
                }}
              >
               Sound
              </Text>
              <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setIsEnabled(prev => !prev)}
        value={isEnabled}
      />
                </View>
                
                <View style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>
                  <Text
                style={{
                  color: Color.textColor,
                  fontSize: FontSize.sm,
                  fontWeight: "600",
                }}
              >
               Vibration
              </Text>
              <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setIsEnabled(prev => !prev)}
        value={isEnabled}
      />
                </View>
                <View style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>
                  <Text
                style={{
                  color: Color.textColor,
                  fontSize: FontSize.sm,
                  fontWeight: "600",
                }}
              >
               Background Music
              </Text>
              <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setIsEnabled(prev => !prev)}
        value={isEnabled}
      />
                </View>
              </View>
            </View>
          </LinearGradient>
        )}
      </Modal>
    </>
  );
}
