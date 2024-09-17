import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const MainScreen = () => {
  return (
    <View className="flex-1 items-center bg-background">
      {/* Header */}
      <View className="p-6 bg-primary">
        <Text className="text-2xl font-bold text-background">Startseite</Text>
      </View>

      <ScrollView className="flex-1 p-4">
        {/* Dashboard */}
        <View className="mb-6">
          <Text className="text-xl font-semibold text-text mb-2">Dashboard</Text>
          
          {/* Ziele: Fortschrittsverfolgung */}
          <View className="bg-secondary p-4 rounded-lg mb-4">
            <Text className="text-text font-medium">Ziele: Fortschrittsverfolgung</Text>
            {/* Add progress bar or other visualization here */}
          </View>

          {/* Nutzungsberichte */}
          <View className="bg-secondary p-4 rounded-lg mb-4">
            <Text className="text-text font-medium mb-2">Nutzungsberichte</Text>
            <Text className="text-text">Tägliche App-Nutzung: 2h 30m</Text>
            <Text className="text-text">Wöchentliche App-Nutzung: 15h 45m</Text>
          </View>

          {/* Protokoll erfolgreicher Eingriffe */}
          <View className="bg-secondary p-4 rounded-lg mb-4">
            <Text className="text-text font-medium">Protokoll erfolgreicher Eingriffe</Text>
            {/* Add list of successful interventions here */}
          </View>

          {/* Streak-Zähler */}
          <View className="bg-secondary p-4 rounded-lg">
            <Text className="text-text font-medium">Streak-Zähler</Text>
            <Text className="text-text text-2xl font-bold">7 Tage</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <TouchableOpacity 
          className="bg-accent py-4 px-6 rounded-full items-center"
          onPress={() => {/* Navigate to Hub */}}
        >
          <Text className="text-background font-bold text-lg">
            Bring mich weg von meinem Handy
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default MainScreen;