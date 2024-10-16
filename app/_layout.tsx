import { Stack } from "expo-router"

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{
          presentation: 'modal',
          animation: 'fade',
          headerShown: false,
        }}
      />
    </Stack>
  )
}

export default Layout;