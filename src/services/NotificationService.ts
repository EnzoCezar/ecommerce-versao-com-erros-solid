import { IMailProvider } from '../providers/IMailProvider';

export interface OrderConfirmation {
  orderId: number;
  customer: string;
  total: number;
  productNames: string[];
}

export class NotificationService {
  constructor(private readonly mailProvider: IMailProvider) {}

  