import { Stack } from 'expo-router';

export default function MainLayout() {
  return (
    <Stack>
      
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />

      
      <Stack.Screen
        name="(auth)/signup/page"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="(auth)/forgotPassword/page"
        options={{ headerShown: false }} 
      />
     
      <Stack.Screen
        name="(panel)/homeScreen/page"
        options={{ headerShown: false }}
      />

     
      <Stack.Screen
        name="(panel)/ProductDetail/page"
        options={{ headerShown: false }}
      />

     
      <Stack.Screen
        name="(panel)/ShoppingList/page"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="(panel)/productList/page"
        options={{ headerShown: false }}
      />

       <Stack.Screen
        name="(panel)/CategoriesScreen/page"
        options={{ headerShown: false }}
      />
      

    </Stack>
  );
}

