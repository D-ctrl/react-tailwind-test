import { Text, View } from "react-native";
import '@/styles/tailwind.css';

export default function Index() {
  return (
    <View className="w-full flex-1 items-center justify-center bg-white">
    <Text className="text-xl font-bold text-blue-500">
            Hello, Tailwind CSS!
          </Text>
    </View>
  );
}
