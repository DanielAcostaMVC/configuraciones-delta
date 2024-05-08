export interface UltimaModificacion {
	Fecha: string;
	Usuario: string;
}

export type Ciudad = {
    id: number | string;
    nombre: string;
  };
  
  type Rol = {
    id: number;
    nombre: string;
  };
  type UserBasico = {
    id: number;
    nombre: string;
    numeroDocumento: string;
  };
export  type TipoDocumento = {
    id: string;
    nombre: string;
  };
  type Sucursal = {
    id: number;
    nombre: string;
  };
  
  export type MessageType = 'success' | 'error' | 'info' | 'warning';
  export type FileType = 'png' | 'jpg' | 'jpeg' | 'pdf';
  
  type AccesoPrincipalBasico = {
    cargo: string;
    sucursal: Sucursal;
    accesoRol: Rol;
  };
  
  type ErrorType = {
    [key: string]: boolean;
  };
  