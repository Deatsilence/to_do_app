import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

// My imports
import styles from "./src/styles/styles_of_app";
import TodoList from "./src/components/TodoList";
import TodoHeader from "./src/components/TodoHeader";

// import store
import store from "./src/redux/store/storeOfApp";

// import Provider
import { Provider } from "react-redux";

export default function App() {
  const RootApp = () => {
    return (
      <SafeAreaView>
        <TodoHeader />
        <TodoList />
      </SafeAreaView>
    );
  };

  return (
    // Connects the provider and the store to the app
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
}
