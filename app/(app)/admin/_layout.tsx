import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { useRouter } from 'expo-router';
import { auth } from '@/app/src/firebase.config';

export default function TabLayout() {
  // Se não tiver logado, redirecionar para tela de login
  const router = useRouter();
  const currentUser = auth.currentUser;

  if( currentUser == null){
    //router.replace('/');
  }
  // Fim

  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="aluno"
        options={{
          title: 'Aluno',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="personal"
        options={{
          title: 'Personal',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'school' : 'school-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen name="screens/hidden" options={{ href: null,}}/>
      <Tabs.Screen name="teste" options={{ href: null,}}/>
    </Tabs>
  );
}
