import { firestore } from '../firebaseConfig';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc, query, where } from 'firebase/firestore';

export const agregarMedicamento = async (medicamentoData) => {
  try {
    await addDoc(collection(firestore, 'medicamentos'), medicamentoData);
    console.log('Medicamento agregado correctamente');
  } catch (error) {
    console.error('Error al agregar medicamento:', error);
  }
};

export const obtenerMedicamentos = async () => {
  try {
    const medicamentosSnapshot = await getDocs(collection(firestore, 'medicamentos'));
    const listaMedicamentos = medicamentosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return listaMedicamentos;
  } catch (error) {
    console.error('Error al obtener medicamentos:', error);
  }
};

export const obtenerMedicamentosPorUsuario = async (usuarioId) => {
  try {
    const q = query(collection(firestore, 'medicamentos'), where('usuarioId', '==', usuarioId));
    const medicamentosSnapshot = await getDocs(q);
    const listaMedicamentos = medicamentosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return listaMedicamentos;
  } catch (error) {
    console.error('Error al obtener medicamentos por usuario:', error);
  }
};

export const actualizarMedicamento = async (medicamentoId, nuevosDatos) => {
  try {
    await updateDoc(doc(firestore, 'medicamentos', medicamentoId), nuevosDatos);
    console.log('Medicamento actualizado correctamente');
  } catch (error) {
    console.error('Error al actualizar medicamento:', error);
  }
};

export const eliminarMedicamento = async (medicamentoId) => {
  try {
    await deleteDoc(doc(firestore, 'medicamentos', medicamentoId));
    console.log('Medicamento eliminado correctamente');
  } catch (error) {
    console.error('Error al eliminar medicamento:', error);
  }
};
