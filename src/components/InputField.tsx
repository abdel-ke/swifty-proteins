import { Dispatch, SetStateAction } from "react";
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from "react-native";

type Props = {
  name: any;
  actionText?: string;
  placeHolder: string;
  secure?: boolean;
  onChange: Dispatch<SetStateAction<string>>;
  keyboardType?: KeyboardTypeOptions
};

export default function InputField({
  name,
  actionText,
  placeHolder,
  secure = false,
  keyboardType = "default",
  onChange,
}: Props) {
  return (
    <View style={[styles.container, styles.flex]}>
      <View style={styles.flex}>
        {name}
        <TextInput
          style={{ marginLeft: 5, flex: 1 }}
          placeholder={placeHolder}
          secureTextEntry={secure}
          onChangeText={onChange}
          keyboardType={keyboardType}
        />
      </View>
      <Text
        style={[
          { textAlignVertical: "bottom", color: "purple", fontWeight: "bold" },
        ]}
      >
        {actionText}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    marginTop: 10,
  },
  container: {
    borderBottomWidth: 1,
    padding: 8,
    justifyContent: "space-between",
  },
});
