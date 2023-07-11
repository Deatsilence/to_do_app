import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";

// My imports
import styles from "../styles/styles_of_app";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/store/taskSlice";

const TodoHeader = () => {
  const dispatch = useDispatch();
  const onSubmitTask = () => {
    if (todo.trim().length === 0) {
      Alert.alert("Please enter a task");
      setTodo("");
      return;
    }
    dispatch(
      addTask({
        task: todo,
      })
    );
    setTodo("");
  };
  const [todo, setTodo] = useState("");

  return (
    <View>
      <Text style={styles.appTitle}>Todo list</Text>

      <View style={styles.centerContent}>
        <TextInput
          style={styles.input}
          placeholder="Add todo"
          onChangeText={setTodo}
          value={todo}
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={onSubmitTask}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoHeader;
