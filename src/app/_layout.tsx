import { Stack, Tabs  } from "expo-router"


export default function layout  () {
    return(
        <Stack
        screenOptions={{
          
        }}
        >
            <Stack.Screen name="index" options={{ title:'index', 
        
                
            }}    />
            <Stack.Screen name="signup" options={{ title:'signup'   }} />
            <Stack.Screen name="entradas" options={{ title:'entradas',     headerShown:false   }} />

        </Stack>
    )
}