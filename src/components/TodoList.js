import {
  Alert,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

// My imports
import styles from "../styles/styles_of_app";
import { Feather } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/store/taskSlice";

const TodoList = () => {
  const dispatch = useDispatch();

  // tasks dilimini Redux store'dan alır
  const todos = useSelector((state) => state.tasks);

  const data = [];

  const itemDelete = (id) => {
    dispatch(deleteTask({ id: id }));
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => {
            Alert.alert("Warning", "Are you sure to delete ?", [
              { text: "Yes", onPress: () => itemDelete(item.id) },
              { text: "No", onPress: () => null },
            ]);
          }}
        >
          <Feather name="trash-2" size={18} color="red" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ height: 450 }}>
      <FlatList
        data={todos}
        renderItem={renderItem}
        // Her görevin benzersiz bir anahtarı olarak `id` kullanılır
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ flexGrow: 1 }}
      ></FlatList>
    </View>
  );
};

export default TodoList;
