// src/services/dummy-payment.ts
import { AbstractPaymentProcessor, PaymentProcessorContext, PaymentProcessorError, PaymentProcessorSessionResponse, PaymentSessionStatus } from '@medusajs/medusa';

 class DummyPaymentService extends AbstractPaymentProcessor {
    capturePayment(paymentSessionData: Record<string, unknown>): Promise<Record<string, unknown> | PaymentProcessorError> {
        throw new Error('Method not implemented.');
    }
    cancelPayment(paymentSessionData: Record<string, unknown>): Promise<Record<string, unknown> | PaymentProcessorError> {
        throw new Error('Method not implemented.');
    }
   async  initiatePayment(context: PaymentProcessorContext): Promise<PaymentProcessorSessionResponse> {
      return {
        session_data: {
          amount: context.amount,
          context: context.context,
          currency_code: context.currency_code,
          customer: context.customer,
          email: context.email,
          billing_address: context.billing_address,
          resource_id: context.resource_id,
          paymentSessionData: {},
        }
      }
       
       
    
    }
    deletePayment(paymentSessionData: Record<string, unknown>): Promise<Record<string, unknown> | PaymentProcessorError> {
        throw new Error('Method not implemented.');
    }
    getPaymentStatus(paymentSessionData: Record<string, unknown>): Promise<PaymentSessionStatus> {
        throw new Error('Method not implemented.');
    }
    refundPayment(paymentSessionData: Record<string, unknown>, refundAmount: number): Promise<Record<string, unknown> | PaymentProcessorError> {
        throw new Error('Method not implemented.');
    }
    retrievePayment(paymentSessionData: Record<string, unknown>): Promise<Record<string, unknown> | PaymentProcessorError> {
        throw new Error('Method not implemented.');
    }
    updatePayment(context: PaymentProcessorContext): Promise<void | PaymentProcessorError | PaymentProcessorSessionResponse> {
        throw new Error('Method not implemented.');
    }
    updatePaymentData(sessionId: string, data: Record<string, unknown>): Promise<Record<string, unknown> | PaymentProcessorError> {
        throw new Error('Method not implemented.');
    }
    
    static identifier = "dummy-payment"

    async authorizePayment(
        paymentSessionData: Record<string, unknown>,
        context: Record<string, unknown>
      ): Promise<
        PaymentProcessorError |
        {
          status: PaymentSessionStatus;
          data: Record<string, unknown>;
        }
      > {
        try {
    
          return {
            status: PaymentSessionStatus.AUTHORIZED,
            data: {
              id: paymentSessionData.id
            }
          }
        } catch (e) {
          return {
            error: e.message
          }
        }
      }

  // Implement other required methods (capture, refund, etc.) as needed
}
export default DummyPaymentService