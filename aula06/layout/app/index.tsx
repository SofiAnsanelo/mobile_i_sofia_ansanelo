import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  servicos: {
    width: '100%',
    marginBottom: 5,
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#C1bebf',
    backgroundColor: '#f0f0f0', 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.servicos}>
        <Text style={styles.title}>Banho & Tosa</Text>
        <Text style={styles.text}>Conteúdo da seção 1.</Text>
      </View>
      
      <View style={styles.servicos}>
        <Text style={styles.title}>Veterinário</Text>
        <Text style={styles.text}>Conteúdo da seção 2.</Text>
      </View>
      
      <View style={styles.servicos}>
        <Text style={styles.title}>Pet Sitter</Text>
        <Text style={styles.text}>Conteúdo da seção 3.</Text>
      </View>

      <View style={styles.servicos}>
        <Text style={styles.title}>Hospedagem Pet</Text>
        <Text style={styles.text}>Conteúdo da seção 3.</Text>
      </View>

      <View style={styles.servicos}>
        <Text style={styles.title}>Dog Walker</Text>
        <Text style={styles.text}>Conteúdo da seção 3.</Text>
      </View>
    </View>
  );
}