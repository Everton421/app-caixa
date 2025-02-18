import { Stack, Tabs  } from "expo-router"


export default function layout  () {
    return(
        <Stack
        screenOptions={{
          
        }}
        >
            <Stack.Screen name="index" options={{ title:'index', 
        headerShown:false  
            }}    />
            <Stack.Screen name="signup" options={{ title:'signup'   }} />
            <Stack.Screen name="conta" options={{     headerShown:false   }} />

        </Stack>
    )
}