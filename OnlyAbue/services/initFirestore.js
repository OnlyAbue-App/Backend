import { firestore } from '@/firebaseConfig';
import { collection, doc, setDoc } from 'firebase/firestore';

const initializeCollections = async () => {
  try {
    await setDoc(doc(collection(firestore, 'usuarios'), 'placeholder'), {});
    await setDoc(doc(collection(firestore, 'medicamentos'), 'placeholder'), {});
    await setDoc(doc(collection(firestore, 'recordatorios'), 'placeholder'), {});
    await setDoc(doc(collection(firestore, 'historial_medicamentos'), 'placeholder'), {});
    await setDoc(doc(collection(firestore, 'citas_medicas'), 'placeholder'), {});
    await setDoc(doc(collection(firestore, 'recomendaciones'), 'placeholder'), {});

    console.log('Colecciones inicializadas exitosamente');
  } catch (error) {
    console.error('Error al inicializar las colecciones: ', error);
  }
};

export default initializeCollections;
