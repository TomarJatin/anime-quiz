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
import { QuizQuestionObj, QuizAnswerInterface } from "../types/quiz";
// import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

export default function Quiz({ navigation }: any) {
  const { selectLvl } = useContext(DataContext);
  const [loading, setLoading] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestionObj[]>([]);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(-1);
  const [answerRight, setAnswerRight] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswerInterface[]>([]);
  const [score, setScore] = useState(0);
  const [questionTimer, setQuestionTimer] = useState(60);

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

  const deselect = () => {
    setSelectedOptionIdx(-1);
    setAnswerRight(false);
    setQuestionTimer(60);
    if (currentQuestionIndex !== 8) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      console.log("final result: ", quizAnswers.length, quizQuestions.length);
    }
  };

  const handleTimerOver = () => {
    setQuizAnswers((prev) => [
      ...prev,
      {
        id: quizQuestions[currentQuestionIndex].id,
        isCorrect: false,
        isSkipped: true,
      },
    ]);
    deselect();
  };

  const handleAnswered = (item: string, index: number) => {
    setSelectedOptionIdx(index);
    const isCorrect = item === quizQuestions[currentQuestionIndex].answer;
    const _score = isCorrect ? score + 4 : score - 1;
    setScore(_score);
    setAnswerRight(isCorrect);
    setQuizAnswers((prev) => [
      ...prev,
      {
        id: quizQuestions[currentQuestionIndex].id,
        isCorrect: isCorrect,
        isSkipped: false,
      },
    ]);
    setTimeout(deselect, 100);
  };

  useEffect(() => {
    createQuiz();
  }, []);

  useEffect(() => {
    let timer: any;

    if (questionTimer > 0) {
      timer = setInterval(() => {
        setQuestionTimer((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      handleTimerOver();
    }

    return () => {
      clearInterval(timer);
    };
  }, [questionTimer]);

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

              {/* Quiz Top */}
              <View
                style={{
                  paddingVertical: 20,
                  paddingHorizontal: 40,
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row"
                }}
              >
                <View>
                  <Text
                    style={{
                      color: Color.textColor,
                      fontSize: FontSize.xs,
                      fontWeight: "500",
                      marginTop: 6,
                      textAlign: "center"
                    }}
                  >
                    Timer
                  </Text>
                  <Text
                    style={{
                      color: Color.textColor,
                      fontSize: FontSize.md,
                      fontWeight: "800",
                      textAlign: "center"
                    }}
                  >
                    {questionTimer} Sec
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: Color.textColor,
                      fontSize: FontSize.xs,
                      fontWeight: "500",
                      marginTop: 6,
                      textAlign: "center"
                    }}
                  >
                    Question
                  </Text>
                  <Text
                    style={{
                      color: Color.textColor,
                      fontSize: FontSize.md,
                      fontWeight: "800",
                      textAlign: "center"
                    }}
                  >
                    {currentQuestionIndex+1} / 10
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: Color.textColor,
                      fontSize: FontSize.xs,
                      fontWeight: "500",
                      marginTop: 6,
                      textAlign: "center"
                    }}
                  >
                    Score
                  </Text>
                  <Text
                    style={{
                      color: Color.textColor,
                      fontSize: FontSize.md,
                      fontWeight: "800",
                      textAlign: "center"
                    }}
                  >
                    {score}
                  </Text>
                </View>
                {/* <CountdownCircleTimer
        isPlaying={true}
        duration={10}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: true, delay: 2 })}
        updateInterval={1}
    >
      {({ remainingTime, color }) => (
        <Text style={{ color, fontSize: 40 }}>
          {remainingTime}
        </Text>
      )}
    </CountdownCircleTimer> */}
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
                    <TouchableOpacity
                      onPress={() => handleAnswered(item, index)}
                      activeOpacity={0.5}
                      key={index}
                      style={{
                        flexDirection: "row",
                        gap: 20,
                        alignItems: "center",
                        backgroundColor:
                          selectedOptionIdx === -1 ||
                          index !== selectedOptionIdx
                            ? Color.card
                            : answerRight
                            ? Color.rightAnswer
                            : Color.wrongAnswer,
                        padding: 10,
                        borderRadius: 10,
                        marginBottom: 15,
                      }}
                    >
                      <View
                        style={{
                          borderRadius: 8,
                          backgroundColor: Color.backgroundColor,
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 30,
                          height: 30,
                        }}
                      >
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
                    marginTop: 30,
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
