import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

// Crear usuario
export const crearUsuario = async (usuario) => {
  const usuarioRef = doc(db, 'usuario_cliente', usuario.id);
  try {
    await setDoc(usuarioRef, usuario);
    console.log('Usuario creado con éxito');
  } catch (error) {
    console.error('Error al crear usuario: ', error);
  }
};

// Leer usuario
export const leerUsuario = async (id) => {
    const usuarioRef = doc(db, 'usuario_cliente', id);
    try {
      const docSnap = await getDoc(usuarioRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log('No se encontró el usuario');
      }
    } catch (error) {
      console.error('Error al leer usuario: ', error);
    }
  };

  // Actualizar usuario
export const actualizarUsuario = async (id, usuarioActualizado) => {
    const usuarioRef = doc(db, 'usuario_cliente', id);
    try {
      await updateDoc(usuarioRef, usuarioActualizado);
      console.log('Usuario actualizado con éxito');
    } catch (error) {
      console.error('Error al actualizar usuario: ', error);
    }
  };

  // Eliminar usuario
export const eliminarUsuario = async (id) => {
    const usuarioRef = doc(db, 'usuario_cliente', id);
    try {
      await deleteDoc(usuarioRef);
      console.log('Usuario eliminado con éxito');
    } catch (error) {
      console.error('Error al eliminar usuario: ', error);
    }
  };