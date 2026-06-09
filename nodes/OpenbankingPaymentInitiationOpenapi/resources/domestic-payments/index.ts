import type { INodeProperties } from 'n8n-workflow';

export const domesticPaymentsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Payments"
					]
				}
			},
			"options": [
				{
					"name": "Create Domestic Payment Consents",
					"value": "Create Domestic Payment Consents",
					"action": "Create Domestic Payment Consents",
					"description": "Create Domestic Payment Consents",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/domestic-payment-consents"
						}
					}
				},
				{
					"name": "Get Domestic Payment Consents Consent ID",
					"value": "Get Domestic Payment Consents Consent ID",
					"action": "Get Domestic Payment Consents",
					"description": "Get Domestic Payment Consents",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domestic-payment-consents/{{$parameter[\"ConsentId\"]}}"
						}
					}
				},
				{
					"name": "Get Domestic Payment Consents Consent ID Funds Confirmation",
					"value": "Get Domestic Payment Consents Consent ID Funds Confirmation",
					"action": "Get Domestic Payment Consents Funds Confirmation",
					"description": "Get Domestic Payment Consents Funds Confirmation",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domestic-payment-consents/{{$parameter[\"ConsentId\"]}}/funds-confirmation"
						}
					}
				},
				{
					"name": "Create Domestic Payments",
					"value": "Create Domestic Payments",
					"action": "Create Domestic Payments",
					"description": "Create Domestic Payments",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/domestic-payments"
						}
					}
				},
				{
					"name": "Get Domestic Payments Domestic Payment ID",
					"value": "Get Domestic Payments Domestic Payment ID",
					"action": "Get Domestic Payments",
					"description": "Get Domestic Payments",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domestic-payments/{{$parameter[\"DomesticPaymentId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /domestic-payment-consents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Payments"
					],
					"operation": [
						"Create Domestic Payment Consents"
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
						"Domestic Payments"
					],
					"operation": [
						"Create Domestic Payment Consents"
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
						"Domestic Payments"
					],
					"operation": [
						"Create Domestic Payment Consents"
					]
				}
			}
		},
		{
			"displayName": "X Fapi Interaction ID",
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
						"Domestic Payments"
					],
					"operation": [
						"Create Domestic Payment Consents"
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
						"Domestic Payments"
					],
					"operation": [
						"Create Domestic Payment Consents"
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
						"Domestic Payments"
					],
					"operation": [
						"Create Domestic Payment Consents"
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
						"Domestic Payments"
					],
					"operation": [
						"Create Domestic Payment Consents"
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
						"Domestic Payments"
					],
					"operation": [
						"Create Domestic Payment Consents"
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
						"Domestic Payments"
					],
					"operation": [
						"Create Domestic Payment Consents"
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
						"Domestic Payments"
					],
					"operation": [
						"Create Domestic Payment Consents"
					]
				}
			}
		},
		{
			"displayName": "GET /domestic-payment-consents/{ConsentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Payments"
					],
					"operation": [
						"Get Domestic Payment Consents Consent ID"
					]
				}
			}
		},
		{
			"displayName": "Consent ID",
			"name": "ConsentId",
			"required": true,
			"description": "ConsentId",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Payments"
					],
					"operation": [
						"Get Domestic Payment Consents Consent ID"
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
						"Domestic Payments"
					],
					"operation": [
						"Get Domestic Payment Consents Consent ID"
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
						"Domestic Payments"
					],
					"operation": [
						"Get Domestic Payment Consents Consent ID"
					]
				}
			}
		},
		{
			"displayName": "X Fapi Interaction ID",
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
						"Domestic Payments"
					],
					"operation": [
						"Get Domestic Payment Consents Consent ID"
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
						"Domestic Payments"
					],
					"operation": [
						"Get Domestic Payment Consents Consent ID"
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
						"Domestic Payments"
					],
					"operation": [
						"Get Domestic Payment Consents Consent ID"
					]
				}
			}
		},
		{
			"displayName": "GET /domestic-payment-consents/{ConsentId}/funds-confirmation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Payments"
					],
					"operation": [
						"Get Domestic Payment Consents Consent ID Funds Confirmation"
					]
				}
			}
		},
		{
			"displayName": "Consent ID",
			"name": "ConsentId",
			"required": true,
			"description": "ConsentId",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Payments"
					],
					"operation": [
						"Get Domestic Payment Consents Consent ID Funds Confirmation"
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
						"Domestic Payments"
					],
					"operation": [
						"Get Domestic Payment Consents Consent ID Funds Confirmation"
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
						"Domestic Payments"
					],
					"operation": [
						"Get Domestic Payment Consents Consent ID Funds Confirmation"
					]
				}
			}
		},
		{
			"displayName": "X Fapi Interaction ID",
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
						"Domestic Payments"
					],
					"operation": [
						"Get Domestic Payment Consents Consent ID Funds Confirmation"
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
						"Domestic Payments"
					],
					"operation": [
						"Get Domestic Payment Consents Consent ID Funds Confirmation"
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
						"Domestic Payments"
					],
					"operation": [
						"Get Domestic Payment Consents Consent ID Funds Confirmation"
					]
				}
			}
		},
		{
			"displayName": "POST /domestic-payments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Payments"
					],
					"operation": [
						"Create Domestic Payments"
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
						"Domestic Payments"
					],
					"operation": [
						"Create Domestic Payments"
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
						"Domestic Payments"
					],
					"operation": [
						"Create Domestic Payments"
					]
				}
			}
		},
		{
			"displayName": "X Fapi Interaction ID",
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
						"Domestic Payments"
					],
					"operation": [
						"Create Domestic Payments"
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
						"Domestic Payments"
					],
					"operation": [
						"Create Domestic Payments"
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
						"Domestic Payments"
					],
					"operation": [
						"Create Domestic Payments"
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
						"Domestic Payments"
					],
					"operation": [
						"Create Domestic Payments"
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
						"Domestic Payments"
					],
					"operation": [
						"Create Domestic Payments"
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
						"Domestic Payments"
					],
					"operation": [
						"Create Domestic Payments"
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
						"Domestic Payments"
					],
					"operation": [
						"Create Domestic Payments"
					]
				}
			}
		},
		{
			"displayName": "GET /domestic-payments/{DomesticPaymentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Payments"
					],
					"operation": [
						"Get Domestic Payments Domestic Payment ID"
					]
				}
			}
		},
		{
			"displayName": "Domestic Payment ID",
			"name": "DomesticPaymentId",
			"required": true,
			"description": "DomesticPaymentId",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Payments"
					],
					"operation": [
						"Get Domestic Payments Domestic Payment ID"
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
						"Domestic Payments"
					],
					"operation": [
						"Get Domestic Payments Domestic Payment ID"
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
						"Domestic Payments"
					],
					"operation": [
						"Get Domestic Payments Domestic Payment ID"
					]
				}
			}
		},
		{
			"displayName": "X Fapi Interaction ID",
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
						"Domestic Payments"
					],
					"operation": [
						"Get Domestic Payments Domestic Payment ID"
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
						"Domestic Payments"
					],
					"operation": [
						"Get Domestic Payments Domestic Payment ID"
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
						"Domestic Payments"
					],
					"operation": [
						"Get Domestic Payments Domestic Payment ID"
					]
				}
			}
		},
];
