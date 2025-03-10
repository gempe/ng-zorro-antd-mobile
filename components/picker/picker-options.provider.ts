import {EventEmitter} from '@angular/core';
export interface PickerOptionsInterface {
  data?: Array<any>;
  cols?: number;
  mask?: boolean;
  title?: string;
  okText?: string;
  dismissText?: string;
  disabled?: boolean;
  cascade?: boolean;
  appendToBody?: boolean;
}

export class PickerOptions implements PickerOptionsInterface {
  data?: Array<any> = [];
  value?: Array<any> = [];
  cols?: number = 3;
  mask?: boolean = true;
  title?: string = '';
  okText?: string = 'Ok';
  dismissText?: string = 'Cancelar';
  disabled?: boolean = false;
  cascade?: boolean = true;
  appendToBody?: boolean = false;
  onDismiss?: EventEmitter<any> = new EventEmitter();
  onPickerChange?: EventEmitter<any> = new EventEmitter();
  indicatorStyle?: object = {};
  hidePicker?: () => void;
  confirm?: (result) => void;
  cancel?: () => void;
  updateNgModel?: (value: any[]) => void;
}

export type PickerCallBack = (result?: any) => PromiseLike<any> | void;
