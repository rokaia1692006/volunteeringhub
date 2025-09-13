import { Stack } from "expo-router";
import draw from "@/components/header";
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {draw()}
    </Stack>
  );
}
