// Nome da dupla: Julio Cesar Santos e SeuParceiroAqui

import React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={styles.image}
      />

      <Text style={styles.name}>Julio Cesar Santos</Text>
      <Text style={styles.profession}>Desenvolvedor</Text>

      <View style={styles.divider} />

      <View style={styles.contactContainer}>
        <Text style={styles.label}>Telefone:</Text>
        <Text
          style={styles.info}
          onPress={() => Linking.openURL('tel:+5541999999999')}
        >
          (41) 99999-9999
        </Text>
      </View>

      <View style={styles.contactContainer}>
        <Text style={styles.label}>E-mail:</Text>
        <Text
          style={styles.info}
          onPress={() => Linking.openURL('mailto:email@email.com')}
        >
          email@email.com
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>Sobre mim</Text>
        <Text style={styles.aboutText}>
          Sou um desenvolvedor apaixonado por tecnologia, com interesse em jogos,
          apps e streaming. Sempre buscando evoluir.
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  profession: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 15,
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 5,
  },
  label: {
    fontWeight: 'bold',
  },
  info: {
    color: 'blue',
  },
  aboutContainer: {
    alignItems: 'center',
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutText: {
    textAlign: 'center',
    fontSize: 14,
  },
});
