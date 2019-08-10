export interface FieldInterface {
  fieldTags:{
    name: string;
    required: boolean;
    type?: string;  
    value?: string;
    placeholder?: string;
    className?: string;
  };
  label?: string;
  additionalTag?: Object;
  options?: Array<string>; 
}