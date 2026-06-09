import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { domesticPaymentsDescription } from './resources/domestic-payments';
import { paymentDetailsDescription } from './resources/payment-details';
import { domesticScheduledPaymentsDescription } from './resources/domestic-scheduled-payments';
import { domesticStandingOrdersDescription } from './resources/domestic-standing-orders';
import { filePaymentsDescription } from './resources/file-payments';
import { internationalPaymentsDescription } from './resources/international-payments';
import { internationalScheduledPaymentsDescription } from './resources/international-scheduled-payments';
import { internationalStandingOrdersDescription } from './resources/international-standing-orders';

export class OpenbankingPaymentInitiationOpenapi implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Openbanking Payment Initiation Openapi',
		name: 'N8nDevOpenbankingPaymentInitiationOpenapi',
		icon: { light: 'file:./openbanking-payment-initiation-openapi.png', dark: 'file:./openbanking-payment-initiation-openapi.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Swagger for Payment Initiation API Specification',
		defaults: { name: 'Openbanking Payment Initiation Openapi' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevOpenbankingPaymentInitiationOpenapiApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Domestic Payments",
					"value": "Domestic Payments",
					"description": ""
				},
				{
					"name": "Payment Details",
					"value": "Payment Details",
					"description": ""
				},
				{
					"name": "Domestic Scheduled Payments",
					"value": "Domestic Scheduled Payments",
					"description": ""
				},
				{
					"name": "Domestic Standing Orders",
					"value": "Domestic Standing Orders",
					"description": ""
				},
				{
					"name": "File Payments",
					"value": "File Payments",
					"description": ""
				},
				{
					"name": "International Payments",
					"value": "International Payments",
					"description": ""
				},
				{
					"name": "International Scheduled Payments",
					"value": "International Scheduled Payments",
					"description": ""
				},
				{
					"name": "International Standing Orders",
					"value": "International Standing Orders",
					"description": ""
				}
			],
			"default": ""
		},
		...domesticPaymentsDescription,
		...paymentDetailsDescription,
		...domesticScheduledPaymentsDescription,
		...domesticStandingOrdersDescription,
		...filePaymentsDescription,
		...internationalPaymentsDescription,
		...internationalScheduledPaymentsDescription,
		...internationalStandingOrdersDescription
		],
	};
}
