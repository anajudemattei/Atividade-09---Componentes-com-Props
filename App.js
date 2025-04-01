import { View, StyleSheet } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.buttonContainer}>
        <Button text="💌" style={styles.button} />
        <Button text="💐" style={styles.button} />
        <Button text="🌠" style={styles.button} />
        <Button text="🍒" style={styles.button} />
      </View>
      <View style={styles.buttonContainer}>
        <Button text="🌟" style={styles.button} />
        <Button text="🍟" style={styles.button} />
        <Button text="👩🏻‍🦽" style={styles.button} />
        <Button text="🤸🏻‍♀️" style={styles.button} />
      </View>
      <View style={styles.buttonContainer}>
        <Button text="🎪" style={styles.button} />
        <Button text="🎭" style={styles.button} />
        <Button text="🩰" style={styles.button} />
        <Button text="🧿" style={styles.button} />
      </View>
      <View style={styles.buttonContainer}>
        <Button text="🚴‍♂️" style={styles.button} />
        <Button text="🏖️" style={styles.button} />
        <Button text="🎂" style={styles.button} />
        <Button text="📷" style={styles.button} />
      </View>
      <View style={styles.buttonContainer}>
        <Button text="🎧" style={styles.button} />
        <Button text="🎯" style={styles.button} />
        <Button text="🛶" style={styles.button} />
        <Button text="🏔️" style={styles.button} />
      </View>
      <View style={styles.buttonContainer}>
        <Button text="🎆" style={styles.button} />
        <Button text="🎳" style={styles.button} />
        <Button text="🎸" style={styles.button} />
        <Button text="🎥" style={styles.button} />
      </View>
      <View style={styles.buttonContainer}>
        <Button text="🛩️" style={styles.button} />
        <Button text="🚂" style={styles.button} />
        <Button text="🚢" style={styles.button} />
        <Button text="🚗" style={styles.button} />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start", 
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    width: "90%", 
    marginTop: 20,
  },
  button: {
    flex: 1, 
    height: 50, 
    marginHorizontal: 5, 
    paddingVertical: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center", 
    marginTop: 50,
    paddingBottom: 80,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
    gap: 20,
  },
  card: {
    width: 320,
    padding: 20,
    backgroundColor: "#d3829f",
    borderRadius: 10,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
    elevation: 5,
    marginTop: 20,
    gap: 10,
    justifyContent: "center", 
    alignItems: "center",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
  },
  textRed: {
    color: "red",
    marginTop: 20,
    fontSize: 20,
  },
  textGreen: {
    color: "green",
    marginTop: 20,
    fontSize: 20,
  },
});