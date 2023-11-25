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
import { Feather } from '@expo/vector-icons';
import GeneralButton from "../components/Button";
import { Image } from "expo-image";
import { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";

export default function Quiz({ navigation }: any) {
  const { selectLvl } = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [quizAnswers, setQuizAnswers] = useState([]);

  const createQuiz = () => {
    setLoading(true);
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
                justifyContent: "space-between",
                paddingHorizontal: 15,
                paddingVertical: 10,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap: 20,
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
                  flexDirection: "row",
                  gap: 20,
                  alignItems: "center",
                }}
              >
                <Feather name="bookmark" size={24} color="white" />
                <Ionicons name="settings-sharp" size={30} color="white" />
              </View>
            </View>

            <View style={{
              padding: 20
            }}>
              <View style={{
                width: "100%",
                padding: 15,
                height: "auto",
                backgroundColor: Color.textColor,
                borderRadius: 20
              }}>
                <Image
                          style={{
                            width: "100%",
                            height: Dimensions.get("window").height*0.25,
                          }}
                          contentFit="cover"
                          source={{
                            uri: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1ecde018e863e2aaee31f00a23378c35.jpe"
                          }}
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
