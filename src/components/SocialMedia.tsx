import { Image, StyleSheet, TouchableOpacity } from "react-native";

type props = {
  children: JSX.Element;
  onPress: () => void;
};

const SocialMedia = ({ children, onPress }: props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 20,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
    resizeMode: 'center',
    // backgroundColor: "red"
  }
});



export default SocialMedia;