import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Dados Mockados (enquanto a API não funciona)
const mockData = {
  questions: [
    {
      english_word: "apple",
      translate: "maçã",
      options: ["banana", "maçã", "laranja", "uva"],
    },
    {
      english_word: "book",
      translate: "livro",
      options: ["caderno", "livro", "revista", "jornal"],
    },
    {
      english_word: "car",
      translate: "carro",
      options: ["bicicleta", "carro", "ônibus", "moto"],
    },
    {
      english_word: "dog",
      translate: "cachorro",
      options: ["gato", "cachorro", "pássaro", "peixe"],
    },
  ],
};

const GameInit = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);

  //console.log('user = ', AsyncStorage.getItem('user'));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://hackathon-fiap-ejmg-backend.onrender.com/api/openai/questions?game=english&level=easy"
        );
        const data = await response.json();
        setQuestions(data.questions);
      } catch (error) {
        console.log("Erro ao buscar dados, carregando mockData...");
        setQuestions(mockData.questions);
      }
    };

    fetchData();
  }, []);

  // Salva a resposta do usuário
  const handleSelect = (question, option) => {
    setAnswers({ ...answers, [question.english_word]: option });
  };

  // Finaliza o jogo e calcula os acertos
  const handleFinishGame = () => {
    let correctCount = 0;
    questions.forEach((q) => {
      if (answers[q.english_word] === q.translate) {
        correctCount++;
      }
    });

    setCorrectAnswersCount(correctCount);
    setIsGameFinished(true);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {!isGameFinished ? (
        <>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            Qual das palavras abaixo traduz corretamente as palavras dos cards?
          </Text>

          <FlatList
            data={questions}
            keyExtractor={(item) => item.english_word}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View
                style={{
                  width: "100%",
                  backgroundColor: "#f8f8f8",
                  padding: 15,
                  borderRadius: 10,
                  marginBottom: 15,
                  elevation: 2,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 3,
                }}
              >
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}
                >
                  {item.english_word}
                </Text>

                {item.options.map((option) => (
                  <TouchableOpacity
                    key={option}
                    onPress={() => handleSelect(item, option)}
                    style={{
                      backgroundColor:
                        answers[item.english_word] === option ? "#6f9" : "#ddd",
                      padding: 10,
                      marginTop: 5,
                      borderRadius: 5,
                      alignItems: "center",
                    }}
                  >
                    <Text>{option}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          />

          <TouchableOpacity
            onPress={handleFinishGame}
            style={{
              marginTop: 20,
              backgroundColor: "#007BFF",
              padding: 15,
              borderRadius: 5,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>Finalizar Jogo</Text>
          </TouchableOpacity>
        </>
      ) : (
        // Tela final exibindo a mensagem e número de acertos
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#2c3e50",
              textAlign: "center",
            }}
          >
            🎉 Parabéns, você finalizou! 🎉
          </Text>
          <Text style={{ fontSize: 20, marginTop: 10 }}>
            Você acertou {correctAnswersCount} de {questions.length} perguntas!
          </Text>
          <TouchableOpacity
            onPress={() => {
              setAnswers({});
              setIsGameFinished(false);
              setCorrectAnswersCount(0);
            }}
            style={{
              marginTop: 20,
              backgroundColor: "#28a745",
              padding: 15,
              borderRadius: 5,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 18 }}>
              Jogar Novamente
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default GameInit;
