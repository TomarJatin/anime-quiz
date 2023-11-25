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
import { Feather } from "@expo/vector-icons";
import GeneralButton from "../components/Button";
import { Image } from "expo-image";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { quiz_questions } from "../data/random";

interface QuizQuestionObj {
  quiz_img: string;
  question: string;
  options: string[];
  answer: string;
  anime: string;
  tag: string;
  difficulty: number;
}

export default function Quiz({ navigation }: any) {
  const { selectLvl } = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestionObj[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]);

  const createQuiz = () => {
    setLoading(true);
    const _quiz_questions = quiz_questions
      .sort((a, b) => {
        return a.difficulty - b.difficulty;
      })
      .slice(0, 10);
    setQuizQuestions([..._quiz_questions]);
    setLoading(false);
  };

  useEffect(() => {
    createQuiz();
  }, []);

  return (
    <SafeAreaView>
      {!loading ? (
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

              <View
                style={{
                  padding: 20,
                }}
              >
                <View
                  style={{
                    width: "100%",
                    padding: 15,
                    height: "auto",
                    backgroundColor: Color.textColor,
                    borderRadius: 20,
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: Dimensions.get("window").height * 0.25,
                    }}
                    contentFit="cover"
                    source={{
                      uri: "https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1ecde018e863e2aaee31f00a23378c35.jpe",
                    }}
                  />
                </View>
                <Text
                  style={{
                    color: Color.textColor,
                    fontSize: FontSize.sm,
                    fontWeight: "700",
                    textAlign: "center",
                    marginTop: 20,
                    lineHeight: 20,
                    paddingHorizontal: 20,
                  }}
                >
                  {quizQuestions[currentQuestionIndex]?.question}
                </Text>
                <FlatList
                  data={quizQuestions[currentQuestionIndex]?.options}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity activeOpacity={0.5} key={index} style={{
                      flexDirection: "row",
                      gap: 20,
                      alignItems: "center",
                      backgroundColor: Color.card,
                      padding: 10,
                      borderRadius: 10,
                      marginBottom: 15
                    }}>
                      <View style={{
                        borderRadius: 8,
                        backgroundColor: Color.backgroundColor,
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 30,
                        height: 30
                      }}>
                        <Text
                          style={{
                            color: Color.textColor,
                            fontSize: FontSize.sm,
                            fontWeight: "700",
                          }}
                        >
                          {index + 1}
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: Color.textColor,
                          fontSize: FontSize.sm,
                          fontWeight: "700",
                        }}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  )}
                  style={{
                    marginTop: 30
                  }}
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
      ) : null}
    </SafeAreaView>
  );
}
