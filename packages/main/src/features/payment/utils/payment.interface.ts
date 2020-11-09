import { Class } from '../../class/uitls/class.interface';
export interface Payment extends Class {
  count: number;
}

export interface Coupon {
  type: string;
  title: string;
  discountRate?: number;
  discountAmount?: number;
}
