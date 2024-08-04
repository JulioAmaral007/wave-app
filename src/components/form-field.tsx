import clsx from "clsx";
import { useState } from "react";
import { Image, Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { icons } from "../constants";

interface FormFieldProps extends TextInputProps {
  title: string;
  value?: string;
  placeholder: string;
  handleChangeText?: (text: string) => void;
  className?: string;
}

export default function FormField({
  title,
  value,
  placeholder,
  handleChangeText,
  className,
  ...rest
}: FormFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={clsx(
      "gap-1",
      className
    )}>
      <Text className="text-3xl text-text-primary font-bold">{title}</Text>

      <View className="w-full h-16 px-4 bg-background-secondary rounded-2xl border-2 border-border-dark focus:border-border-light flex flex-row items-center">
        <TextInput
          className="flex-1 text-text-primary font-semibold text-lg"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...rest}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

