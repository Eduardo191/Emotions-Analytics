export interface FieldInterface {
  typeId: number;
  key: string;
  name: string;
  required: boolean;
  placeholder?: string;
  getOptions?: Function;
}