import { Image, StyleSheet, Platform, Button, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { UnistylesRuntime, useStyles } from 'react-native-unistyles';

export default function HomeScreen() {
  const { theme } = useStyles();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <View
        style={{
          width: theme.scale(150),
          aspectRatio: 1,
          backgroundColor: theme.colors.secondary,
        }}
      >
        <ThemedText>device width {theme.width(100)}</ThemedText>
        <ThemedText>width {theme.scale(150)}</ThemedText>
      </View>
      <View
        style={{
          marginTop: UnistylesRuntime.insets.top,
        }}
      >
        <ThemedText>{UnistylesRuntime.themeName}</ThemedText>
      </View>
      <Button
        title="Change Theme"
        onPress={() => {
          UnistylesRuntime.setTheme(
            UnistylesRuntime.themeName === 'light' ? 'dark' : 'light'
          );
        }}
      />
      <View
        style={{
          marginTop: UnistylesRuntime.insets.top,
        }}
      >
        <ThemedText>{UnistylesRuntime.screen.width}</ThemedText>
      </View>
      <Button
        title="Press me for width"
        onPress={() => {
          console.warn({
            width: UnistylesRuntime.screen.width,
            height: UnistylesRuntime.screen.height,
          });
        }}
      />
      <View
        style={{
          marginTop: UnistylesRuntime.insets.top,
        }}
      >
        <ThemedText>{UnistylesRuntime.insets.top}</ThemedText>
      </View>
      <Button
        title="Press me for insets"
        onPress={() => {
          console.warn({
            ...UnistylesRuntime.insets,
          });
        }}
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
