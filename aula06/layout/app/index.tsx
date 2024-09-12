import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const imageSources = {
  banhoETosa: require('../assets/images/banho.jpg'),
  veterinario: require('../assets/images/vet.jpg'),
  petSitter: require('../assets/images/sitter.jpg'),
  hospedagemPet: require('../assets/images/hotel.jpg'),
  dogWalker: require('../assets/images/walking.jpg'),
  calendar: require('../assets/images/calendar.jpg'),
  login: require('../assets/images/login.jpg'),
  home: require('../assets/images/home.jpg'),
  logo: require('../assets/images/home.jpg'),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  servicos: {
    width: '100%',
    marginBottom: 10,
    padding: 20,
    borderRadius: 10,
    borderColor: '#a9a6a7',
    borderWidth: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#a6a6a6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  imagefooter: {
    width: 25,
    height: 25,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 16,
    flexWrap: 'wrap',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#f8f8f8',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
  },
  header: {
    width: '100%',
    padding: 10,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logo: {
    width: 100,
    height: 40,
  },
});

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <Image style={styles.logo} source={imageSources.logo} />
      </View>

      <View style={styles.container}>
        <View style={styles.servicos}>
          <Image style={styles.image} source={imageSources.banhoETosa} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Banho & Tosa</Text>
            <Text style={styles.text}>Seu pet sempre limpinho e bem cuidado</Text>
          </View>
        </View>

        <View style={styles.servicos}>
          <Image style={styles.image} source={imageSources.veterinario} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Veterinário</Text>
            <Text style={styles.text}>A saúde do seu melhor amigo em boas mãos</Text>
          </View>
        </View>

        <View style={styles.servicos}>
          <Image style={styles.image} source={imageSources.petSitter} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Pet Sitter</Text>
            <Text style={styles.text}>Um anjo vai até a sua casa para cuidar do seu pet</Text>
          </View>
        </View>

        <View style={styles.servicos}>
          <Image style={styles.image} source={imageSources.hospedagemPet} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Hospedagem Pet</Text>
            <Text style={styles.text}>Hospedagem em ambiente familiar na casa do anjo</Text>
          </View>
        </View>

        <View style={styles.servicos}>
          <Image style={styles.image} source={imageSources.dogWalker} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>Dog Walker</Text>
            <Text style={styles.text}>Passeios educativos para seu pet ter mais qualidade de vida</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Image style={styles.imagefooter} source={imageSources.calendar} />
          <Text style={styles.footerText}>Serviços agen...</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Image style={styles.imagefooter} source={imageSources.home} />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Image style={styles.imagefooter} source={imageSources.login} />
          <Text style={styles.footerText}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
