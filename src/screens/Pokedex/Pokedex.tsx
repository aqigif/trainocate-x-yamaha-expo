import { StaticScreenProps, useNavigation } from "@react-navigation/native";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import styles from "./Pokedex.styles";
import usePokedex from "./Pokedex.handler";
import React from "react";
import { PokeCard } from "./components/PokeCard";
import useNavigationType from "../../hooks/useNavigationType";

type Props = StaticScreenProps<{}>;

const Pokedex = ({}: Props) => {
  const { pokemons } = usePokedex();
  const navigation = useNavigationType();

  return (
    <SafeAreaView style={[styles.body, {}]}>
      {/** PokeHeader | Header */}
      <View style={[styles.container]}>
        <Image
          style={styles.image}
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        />
        <Text style={styles.headerTitle}>Pokedex</Text>
      </View>

      {/** PokeSearch | Search */}
      <View style={styles.container}>
        <TextInput style={styles.textInput} placeholder="Searching" />
      </View>

      {/** Content */}
      <ScrollView style={styles.content}>
        <View style={styles.grid}>
          {pokemons.length === 0 ? (
            <Text>ini empty</Text>
          ) : (
            pokemons.map((pokemon, index) => (
              <PokeCard
                title={pokemon.title}
                num={pokemon.num}
                image={pokemon.image}
                onPress={() =>
                  navigation.navigate("PokemonDetail", { num: pokemon.num })
                }
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pokedex;
