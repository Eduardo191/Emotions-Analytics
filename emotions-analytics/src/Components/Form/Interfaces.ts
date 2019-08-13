export interface FieldInterface {
  fieldTags:{
    name: string;
    required: boolean;
    type?: string;  
    placeholder?: string;
    className?: string;
  };
  label?: string;
  additionalTag?: Object;
  options?: Array<string>; 
}