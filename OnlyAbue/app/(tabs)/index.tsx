import { Image, StyleSheet, Platform } from 'react-native';
import React, { useEffect } from 'react';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import initializeCollections from '@/services/initFirestore';
import { agregarMedicamento, 
        obtenerMedicamentos, 
        obtenerMedicamentosPorUsuario, 
        actualizarMedicamento, 
        eliminarMedicamento } from '@/services/firestoreService';


export default function HomeScreen() {

  useEffect(() => {
    const init = async () => {
      try {
        await initializeCollections();
      } catch (err) {
        console.log(err);
      }
    };

    init();
  }, []);

  useEffect(() => {
    const agregarMedicamentoEjemplo = async () => {
      try {
        await agregarMedicamento({
          nombre: 'Ibuprofeno',
          dosis: '200mg',
          usuarioId: 'usuario123',
          creadoEn: new Date(),
        });
        console.log('Medicamento agregado correctamente');
      } catch (error) {
        console.error('Error al agregar medicamento:', error);
      }
    };
    const obtenerDatos = async () => {
      const medicamentos = await obtenerMedicamentos();
      console.log('Medicamentos:', medicamentos);
    };

    const medicamentosPorUsuario = async () => {
      const medicamentosUsuario = await obtenerMedicamentosPorUsuario('usuario123');
      console.log('usuario123', medicamentosUsuario);
    }
    const actualizarMed = async () => {
      actualizarMedicamento('PSDBxeQM9HdwtEjbdElz', { dosis: '1000mg' });
    }

    const eliminarMed = async () => {
      eliminarMedicamento('OvmzEtlRhPg0lIZ66Fya');
    }

    eliminarMed();

  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
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
