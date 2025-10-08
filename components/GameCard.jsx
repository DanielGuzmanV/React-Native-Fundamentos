import { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Image, Animated, Pressable} from 'react-native';
import { Score } from './Score';
import { Link } from 'expo-router';

import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);

export function GameCard({dataGame}) {
  return (

    <Link asChild href={`/${dataGame.slug}`}>
      <StyledPressable 
        className="active:opacity-70 border border-blue-100
        active:border-black mb-4 mx-3 bg-white p-2 rounded-xl"
      >
        <View className="flex-row gap-3" key={dataGame.slug}>
          <View className="bg-slate-100 flex-col">
            <View>
              <Image 
                alt={dataGame.title}
                source={{ uri: dataGame.image }} 
                style={styles.image} 
              />
            </View>
            <View className="bg-slate-50 border border-gray-300 p-2 m-2 rounded-lg">
              <Text className="text-black">
                {dataGame.releaseDate}
              </Text>
            </View>
          </View>

          <View className="flex-shrink">
            <View className="bg-indigo-100 p-2 rounded-lg">
              <Text className="mb-2" style={styles.title}>
                {dataGame.title}
              </Text>
            </View>

            <View className="flex-row mt-4">
              <Text className="mr-4 mt-1 font-bold text-base">
                Puntuacion:
              </Text>
              <Score score={dataGame.score} maxScore={100}/>
            </View>

            <Text className="mt-2 flex-shrink font-bold text-base">
              Descripcion:
            </Text>
            <Text className="flex-shrink" style={styles.description}>
              {dataGame.description}
            </Text>
          </View>
          
        </View>
      </StyledPressable>
    </Link>

  )
}

export function AnimatedGameCard({game, index}) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 200,
      useNativeDriver: true,

    }).start();
  }, [opacity, index])

  return (
    <Animated.View style={{opacity}}>
      <GameCard  dataGame={game}/>
    </Animated.View>
  )
}

// Estilos:
const styles = StyleSheet.create({
  colorText: {
    color: 'black'
  },
  card: {
    marginBottom: 50
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  description: {
    fontSize: 16,
    color: 'black',
  }
});

