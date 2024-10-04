xport const agregarCitaMedica = async (citaData) => {
    try {
      const docRef = await addDoc(collection(firestore, 'citas_medicas'), citaData);
      console.log('Cita médica agregada con ID:', docRef.id);
    } catch (error) {
      console.error('Error al agregar cita médica:', error);
    }
  };
  

  export const obtenerCitasMedicas = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, 'citas_medicas'));
      const citas = [];
      querySnapshot.forEach((doc) => {
        citas.push({ id: doc.id, ...doc.data() });
      });
      return citas;
    } catch (error) {
      console.error('Error al obtener citas médicas:', error);
    }
  };

  
  export const actualizarCitaMedica = async (citaId, nuevosDatos) => {
    try {
      const citaRef = doc(firestore, 'citas_medicas', citaId);
      await updateDoc(citaRef, nuevosDatos);
      console.log('Cita médica actualizada con éxito');
    } catch (error) {
      console.error('Error al actualizar cita médica:', error);
    }
  };
  
  export const eliminarCitaMedica = async (citaId) => {
    try {
      await deleteDoc(doc(firestore, 'citas_medicas', citaId));
      console.log('Cita médica eliminada con éxito');
    } catch (error) {
      console.error('Error al eliminar cita médica:', error);
    }
  };