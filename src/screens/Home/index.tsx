import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Header } from "../../components/Header";

export function Home() {
  return (
    <>
      <View style={styles.container}>
        <Header />

        <View style={styles.body}>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Adicione uma tarefa"
              placeholderTextColor={"#6b6b6b"}
            />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
