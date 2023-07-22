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
  // When we want to notify the Redux store of an action,
  // such as adding or deleting a task,
  // we use the dispatch function.
  const dispatch = useDispatch();

  // This function is called when the user presses the add button.
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
    // Clean the input
    setTodo("");
  };
  // State is used to hold the task entered by the user
  const [todo, setTodo] = useState("");

  return (
    <View style={{ height: 210 }}>
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
