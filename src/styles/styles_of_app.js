import { Platform } from "react-native";
import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  appTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: "90%",
    borderRadius: 15,
  },
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    margin: 10,
    width: "90%",
    height: "25%",
    borderRadius: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#E8EAED",
  },

  // [TodoList]

  item: {
    backgroundColor: "#e0e0e0",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
  },
  delete: {
    fontSize: 24,
    color: "red",
  },
  contentContainer: {
    paddingBottom: 16, // İstediğiniz kaydırma miktarını ayarlayabilirsiniz
  },
});

export default styles;
