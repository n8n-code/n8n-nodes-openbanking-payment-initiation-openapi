import type { INodeProperties } from 'n8n-workflow';

export const domesticScheduledPaymentsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					]
				}
			},
			"options": [
				{
					"name": "Create Domestic Scheduled Payment Consents",
					"value": "Create Domestic Scheduled Payment Consents",
					"action": "Create Domestic Scheduled Payment Consents",
					"description": "Create Domestic Scheduled Payment Consents",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/domestic-scheduled-payment-consents"
						}
					}
				},
				{
					"name": "Get Domestic Scheduled Payment Consents Consent Id",
					"value": "Get Domestic Scheduled Payment Consents Consent Id",
					"action": "Get Domestic Scheduled Payment Consents",
					"description": "Get Domestic Scheduled Payment Consents",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domestic-scheduled-payment-consents/{{$parameter[\"ConsentId\"]}}"
						}
					}
				},
				{
					"name": "Create Domestic Scheduled Payments",
					"value": "Create Domestic Scheduled Payments",
					"action": "Create Domestic Scheduled Payments",
					"description": "Create Domestic Scheduled Payments",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/domestic-scheduled-payments"
						}
					}
				},
				{
					"name": "Get Domestic Scheduled Payments Domestic Scheduled Payment Id",
					"value": "Get Domestic Scheduled Payments Domestic Scheduled Payment Id",
					"action": "Get Domestic Scheduled Payments",
					"description": "Get Domestic Scheduled Payments",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domestic-scheduled-payments/{{$parameter[\"DomesticScheduledPaymentId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /domestic-scheduled-payment-consents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Create Domestic Scheduled Payment Consents"
					]
				}
			}
		},
		{
			"displayName": "X Fapi Auth Date",
			"name": "x-fapi-auth-date",
			"description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-fapi-auth-date": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Create Domestic Scheduled Payment Consents"
					]
				}
			}
		},
		{
			"displayName": "X Fapi Customer Ip Address",
			"name": "x-fapi-customer-ip-address",
			"description": "The PSU's IP address if the PSU is currently logged in with the TPP.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-fapi-customer-ip-address": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Create Domestic Scheduled Payment Consents"
					]
				}
			}
		},
		{
			"displayName": "X Fapi Interaction Id",
			"name": "x-fapi-interaction-id",
			"description": "An RFC4122 UID used as a correlation id.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-fapi-interaction-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Create Domestic Scheduled Payment Consents"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "An Authorisation Token as per https://tools.ietf.org/html/rfc6750",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Create Domestic Scheduled Payment Consents"
					]
				}
			}
		},
		{
			"displayName": "X Idempotency Key",
			"name": "x-idempotency-key",
			"required": true,
			"description": "Every request will be processed only once per x-idempotency-key.  The\nIdempotency Key will be valid for 24 hours.\n",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-idempotency-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Create Domestic Scheduled Payment Consents"
					]
				}
			}
		},
		{
			"displayName": "X Jws Signature",
			"name": "x-jws-signature",
			"required": true,
			"description": "A detached JWS signature of the body of the payload.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-jws-signature": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Create Domestic Scheduled Payment Consents"
					]
				}
			}
		},
		{
			"displayName": "X Customer User Agent",
			"name": "x-customer-user-agent",
			"description": "Indicates the user-agent that the PSU is using.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-customer-user-agent": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Create Domestic Scheduled Payment Consents"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data",
			"name": "Data",
			"type": "json",
			"default": "{\n  \"Authorisation\": {},\n  \"Initiation\": {\n    \"CreditorAccount\": {},\n    \"CreditorPostalAddress\": {\n      \"AddressLine\": [\n        null\n      ]\n    },\n    \"DebtorAccount\": {\n      \"Identification\": {},\n      \"SchemeName\": {},\n      \"SecondaryIdentification\": {}\n    },\n    \"InstructedAmount\": {},\n    \"RemittanceInformation\": {},\n    \"SupplementaryData\": {}\n  },\n  \"SCASupportData\": {}\n}",
			"routing": {
				"send": {
					"property": "Data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Create Domestic Scheduled Payment Consents"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Risk",
			"name": "Risk",
			"type": "json",
			"default": "{\n  \"DeliveryAddress\": {\n    \"AddressLine\": [\n      null\n    ]\n  }\n}",
			"description": "The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.",
			"routing": {
				"send": {
					"property": "Risk",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Create Domestic Scheduled Payment Consents"
					]
				}
			}
		},
		{
			"displayName": "GET /domestic-scheduled-payment-consents/{ConsentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Get Domestic Scheduled Payment Consents Consent Id"
					]
				}
			}
		},
		{
			"displayName": "Consent Id",
			"name": "ConsentId",
			"required": true,
			"description": "ConsentId",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Get Domestic Scheduled Payment Consents Consent Id"
					]
				}
			}
		},
		{
			"displayName": "X Fapi Auth Date",
			"name": "x-fapi-auth-date",
			"description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-fapi-auth-date": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Get Domestic Scheduled Payment Consents Consent Id"
					]
				}
			}
		},
		{
			"displayName": "X Fapi Customer Ip Address",
			"name": "x-fapi-customer-ip-address",
			"description": "The PSU's IP address if the PSU is currently logged in with the TPP.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-fapi-customer-ip-address": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Get Domestic Scheduled Payment Consents Consent Id"
					]
				}
			}
		},
		{
			"displayName": "X Fapi Interaction Id",
			"name": "x-fapi-interaction-id",
			"description": "An RFC4122 UID used as a correlation id.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-fapi-interaction-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Get Domestic Scheduled Payment Consents Consent Id"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "An Authorisation Token as per https://tools.ietf.org/html/rfc6750",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Get Domestic Scheduled Payment Consents Consent Id"
					]
				}
			}
		},
		{
			"displayName": "X Customer User Agent",
			"name": "x-customer-user-agent",
			"description": "Indicates the user-agent that the PSU is using.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-customer-user-agent": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Get Domestic Scheduled Payment Consents Consent Id"
					]
				}
			}
		},
		{
			"displayName": "POST /domestic-scheduled-payments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Create Domestic Scheduled Payments"
					]
				}
			}
		},
		{
			"displayName": "X Fapi Auth Date",
			"name": "x-fapi-auth-date",
			"description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-fapi-auth-date": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Create Domestic Scheduled Payments"
					]
				}
			}
		},
		{
			"displayName": "X Fapi Customer Ip Address",
			"name": "x-fapi-customer-ip-address",
			"description": "The PSU's IP address if the PSU is currently logged in with the TPP.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-fapi-customer-ip-address": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Create Domestic Scheduled Payments"
					]
				}
			}
		},
		{
			"displayName": "X Fapi Interaction Id",
			"name": "x-fapi-interaction-id",
			"description": "An RFC4122 UID used as a correlation id.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-fapi-interaction-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Create Domestic Scheduled Payments"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "An Authorisation Token as per https://tools.ietf.org/html/rfc6750",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Create Domestic Scheduled Payments"
					]
				}
			}
		},
		{
			"displayName": "X Idempotency Key",
			"name": "x-idempotency-key",
			"required": true,
			"description": "Every request will be processed only once per x-idempotency-key.  The\nIdempotency Key will be valid for 24 hours.\n",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-idempotency-key": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Create Domestic Scheduled Payments"
					]
				}
			}
		},
		{
			"displayName": "X Jws Signature",
			"name": "x-jws-signature",
			"required": true,
			"description": "A detached JWS signature of the body of the payload.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-jws-signature": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Create Domestic Scheduled Payments"
					]
				}
			}
		},
		{
			"displayName": "X Customer User Agent",
			"name": "x-customer-user-agent",
			"description": "Indicates the user-agent that the PSU is using.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-customer-user-agent": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Create Domestic Scheduled Payments"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data",
			"name": "Data",
			"type": "json",
			"default": "{\n  \"Initiation\": {\n    \"CreditorAccount\": {},\n    \"CreditorPostalAddress\": {\n      \"AddressLine\": [\n        null\n      ]\n    },\n    \"DebtorAccount\": {\n      \"Identification\": {},\n      \"SchemeName\": {},\n      \"SecondaryIdentification\": {}\n    },\n    \"InstructedAmount\": {},\n    \"RemittanceInformation\": {},\n    \"SupplementaryData\": {}\n  }\n}",
			"routing": {
				"send": {
					"property": "Data",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Create Domestic Scheduled Payments"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Risk",
			"name": "Risk",
			"type": "json",
			"default": "{\n  \"DeliveryAddress\": {\n    \"AddressLine\": [\n      null\n    ]\n  }\n}",
			"description": "The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.",
			"routing": {
				"send": {
					"property": "Risk",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Create Domestic Scheduled Payments"
					]
				}
			}
		},
		{
			"displayName": "GET /domestic-scheduled-payments/{DomesticScheduledPaymentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Get Domestic Scheduled Payments Domestic Scheduled Payment Id"
					]
				}
			}
		},
		{
			"displayName": "Domestic Scheduled Payment Id",
			"name": "DomesticScheduledPaymentId",
			"required": true,
			"description": "DomesticScheduledPaymentId",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Get Domestic Scheduled Payments Domestic Scheduled Payment Id"
					]
				}
			}
		},
		{
			"displayName": "X Fapi Auth Date",
			"name": "x-fapi-auth-date",
			"description": "The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-fapi-auth-date": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Get Domestic Scheduled Payments Domestic Scheduled Payment Id"
					]
				}
			}
		},
		{
			"displayName": "X Fapi Customer Ip Address",
			"name": "x-fapi-customer-ip-address",
			"description": "The PSU's IP address if the PSU is currently logged in with the TPP.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-fapi-customer-ip-address": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Get Domestic Scheduled Payments Domestic Scheduled Payment Id"
					]
				}
			}
		},
		{
			"displayName": "X Fapi Interaction Id",
			"name": "x-fapi-interaction-id",
			"description": "An RFC4122 UID used as a correlation id.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-fapi-interaction-id": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Get Domestic Scheduled Payments Domestic Scheduled Payment Id"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "An Authorisation Token as per https://tools.ietf.org/html/rfc6750",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Get Domestic Scheduled Payments Domestic Scheduled Payment Id"
					]
				}
			}
		},
		{
			"displayName": "X Customer User Agent",
			"name": "x-customer-user-agent",
			"description": "Indicates the user-agent that the PSU is using.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"x-customer-user-agent": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Scheduled Payments"
					],
					"operation": [
						"Get Domestic Scheduled Payments Domestic Scheduled Payment Id"
					]
				}
			}
		},
];
