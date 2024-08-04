import { router } from "expo-router";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/button";
import { images } from "../constants";

export default function Index() {
  return (
    <SafeAreaView className="h-screen">
      <View className="w-full flex justify-center items-center h-full px-7 bg-background-primary">
        <Image
          source={images.logo}
          className="w-[130px] h-[84px]"
          resizeMode="contain"
        />

        <Image
          source={images.cards}
          className="max-w-[380px] w-full h-[298px]"
          resizeMode="contain"
        />

        <View className="relative mt-5">
          <Text className="text-3xl text-text-primary font-bold text-center">
            Explore Novas{"\n"}
            Oportunidades com{" "}
            <Text className="text-secondary-200">Wave</Text>
          </Text>

          <Image
            source={images.path}
            className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
            resizeMode="contain"
          />
        </View>

        <Text className="text-xl text-text-primary mt-7 text-center">
          Onde Criatividade Encontra Inovação: Inicie sua Jornada com a Wave
        </Text>

        <Button
          variant="primary"
          className="mt-7 w-full"
          onPress={() => router.push("/sign-in")}
          title="Continuar com E-mail"
        >
        </Button>
      </View>
    </SafeAreaView>
  );
};
