import { FileType } from './definitions';

export const convertirBase64 = async (file: FileList): Promise<string[]> => {
    const base64Array = [];
  
    for (const archivo of Array.from(file)) {
      const base64 = await leerArchivoComoBase64(archivo);
      base64Array.push(base64);
    }
    return base64Array;
  };
  
  const leerArchivoComoBase64 = (archivo: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        resolve(base64);
      };
  
      reader.onerror = (error) => {
        reject(error);
      };
  
      reader.readAsDataURL(archivo);
    });
  };
  
  export function getFileExtension(file: File): FileType | null {
    const allowedExtensions: Record<string, FileType> = {
      'image/png': 'png',
      'image/jpeg': 'jpg',
      'image/jpg': 'jpg',
      // 'application/pdf': 'pdf',
    };
  
    return allowedExtensions[file.type] || null;
  }
  