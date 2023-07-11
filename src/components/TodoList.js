import {
  FlatList,
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
  const todos = useSelector((state) => state.tasks);

  const data = [
    {
      id: 1,
      title: "Learn React Native",
    },
    {
      id: 2,
      title: "Learn Redux Toolkit",
    },
  ];

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
            itemDelete(item.id);
          }}
        >
          <Feather name="trash-2" size={18} color="red" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
};

export default TodoList;
