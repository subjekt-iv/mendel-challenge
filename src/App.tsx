import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import BookListScreen from '@/screens/book-list-screen';
import BookDetailScreen from '@/screens/book-detail-screen';
import BookRecentScreen from '@/screens/book-recent-screen';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="BookList"
            component={BookListScreen}
            options={{title: 'Búsqueda'}}
          />
          <Stack.Screen
            name="BookDetail"
            component={BookDetailScreen}
            options={{title: 'Detalles'}}
          />
          <Stack.Screen
            name="BookRecent"
            component={BookRecentScreen}
            options={{title: 'Recientes'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
