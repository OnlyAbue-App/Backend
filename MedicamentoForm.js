import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import img from '../src/img'

const MedicamentoForm = () => {
  const [idMedicamento, setIdMedicamento] = useState('');
  const [idImagen, setIdImagen] = useState('');
  const [nombreComercial, setNombreComercial] = useState('');
  const [nombreGenerico, setNombreGenerico] = useState('');
  const [dosis, setDosis] = useState('');
  const [laboratorio, setLaboratorio] = useState('');
  const [imagen, setImagen] = useState('');

  const registrarMedicamento = () => {
    // Validar que los campos no estén vacíos
    if (!idMedicamento || !nombreComercial || !nombreGenerico || !dosis || !laboratorio || !imagen) {
      Alert.alert('Error', 'Todos los campos son obligatorios.');
      return;
    }

    // Agregar el medicamento a Firestore
    firestore()
      .collection('medicamentos')
      .doc(idMedicamento)
      .set({
        idMedicamento,
        idImagen,
        nombreComercial,
        nombreGenerico,
        dosis,
        laboratorio,
        imagen,
      })
      .then(() => {
        Alert.alert('Éxito', 'Medicamento registrado con éxito');
        // Limpiar los campos después del registro
        setIdMedicamento('');
        setIdImagen('');
        setNombreComercial('');
        setNombreGenerico('');
        setDosis('');
        setLaboratorio('');
        setImagen('');
      })
      .catch((error) => {
        console.error('Error al registrar el medicamento:', error);
        Alert.alert('Error', 'Hubo un problema al registrar el medicamento.');
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="ID Medicamento"
        value={idMedicamento}
        onChangeText={setIdMedicamento}
      />
      <TextInput
        style={styles.input}
        placeholder="ID Imagen"
        value={idImagen}
        onChangeText={setIdImagen}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre Comercial"
        value={nombreComercial}
        onChangeText={setNombreComercial}
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre Genérico"
        value={nombreGenerico}
        onChangeText={setNombreGenerico}
      />
      <TextInput
        style={styles.input}
        placeholder="Dosis"
        value={dosis}
        onChangeText={setDosis}
      />
      <TextInput
        style={styles.input}
        placeholder="Laboratorio"
        value={laboratorio}
        onChangeText={setLaboratorio}
      />
      <TextInput
        style={styles.input}
        placeholder="URL Imagen"
        value={imagen}
        onChangeText={setImagen}
      />
      <Button title="Registrar Medicamento" onPress={registrarMedicamento} />
    </View>
  );
};

// addMedicamento.js
import { collection, addDoc } from "firebase/firestore";
import { db } from './firebaseConfig';  // Importa la configuración de Firebase

async function agregarMedicamento() {
  try {
    const medicamento = {
      idMedicamento: '001',
      idImagen: 'img001',
      nombreComercial: 'Paracetamol',
      nombreGenerico: 'Acetaminofén',
      dosis: '500mg',
      laboratorio: 'LabCorp',
      imagen: 'img001.png'
    };

    // Agrega el medicamento a la colección "medicamentos"
    const docRef = await addDoc(collection(db, "medicamentos"), medicamento);
    console.log("Medicamento registrado con ID: ", docRef.id);
  } catch (e) {
    console.error("Error al agregar el medicamento: ", e);
  }
}

agregarMedicamento();
export default MedicamentoForm;
