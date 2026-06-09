import type { INodeProperties } from 'n8n-workflow';

export const internationalScheduledPaymentsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"International Scheduled Payments"
					]
				}
			},
			"options": [
				{
					"name": "Create International Scheduled Payment Consents",
					"value": "Create International Scheduled Payment Consents",
					"action": "Create International Scheduled Payment Consents",
					"description": "Create International Scheduled Payment Consents",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/international-scheduled-payment-consents"
						}
					}
				},
				{
					"name": "Get International Scheduled Payment Consents Consent Id",
					"value": "Get International Scheduled Payment Consents Consent Id",
					"action": "Get International Scheduled Payment Consents",
					"description": "Get International Scheduled Payment Consents",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/international-scheduled-payment-consents/{{$parameter[\"ConsentId\"]}}"
						}
					}
				},
				{
					"name": "Get International Scheduled Payment Consents Consent Id Funds Confirmation",
					"value": "Get International Scheduled Payment Consents Consent Id Funds Confirmation",
					"action": "Get International Scheduled Payment Consents Funds Confirmation",
					"description": "Get International Scheduled Payment Consents Funds Confirmation",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/international-scheduled-payment-consents/{{$parameter[\"ConsentId\"]}}/funds-confirmation"
						}
					}
				},
				{
					"name": "Create International Scheduled Payments",
					"value": "Create International Scheduled Payments",
					"action": "Create International Scheduled Payments",
					"description": "Create International Scheduled Payments",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/international-scheduled-payments"
						}
					}
				},
				{
					"name": "Get International Scheduled Payments International Scheduled Payment Id",
					"value": "Get International Scheduled Payments International Scheduled Payment Id",
					"action": "Get International Scheduled Payments",
					"description": "Get International Scheduled Payments",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/international-scheduled-payments/{{$parameter[\"InternationalScheduledPaymentId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /international-scheduled-payment-consents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"International Scheduled Payments"
					],
					"operation": [
						"Create International Scheduled Payment Consents"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Create International Scheduled Payment Consents"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Create International Scheduled Payment Consents"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Create International Scheduled Payment Consents"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Create International Scheduled Payment Consents"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Create International Scheduled Payment Consents"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Create International Scheduled Payment Consents"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Create International Scheduled Payment Consents"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data",
			"name": "Data",
			"type": "json",
			"default": "{\n  \"Authorisation\": {},\n  \"Initiation\": {\n    \"Creditor\": {\n      \"PostalAddress\": {\n        \"AddressLine\": [\n          null\n        ]\n      }\n    },\n    \"CreditorAccount\": {},\n    \"CreditorAgent\": {\n      \"PostalAddress\": {}\n    },\n    \"DebtorAccount\": {\n      \"Identification\": {},\n      \"SchemeName\": {},\n      \"SecondaryIdentification\": {}\n    },\n    \"ExchangeRateInformation\": {},\n    \"InstructedAmount\": {},\n    \"RemittanceInformation\": {},\n    \"SupplementaryData\": {}\n  },\n  \"SCASupportData\": {}\n}",
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
						"International Scheduled Payments"
					],
					"operation": [
						"Create International Scheduled Payment Consents"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Create International Scheduled Payment Consents"
					]
				}
			}
		},
		{
			"displayName": "GET /international-scheduled-payment-consents/{ConsentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"International Scheduled Payments"
					],
					"operation": [
						"Get International Scheduled Payment Consents Consent Id"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Get International Scheduled Payment Consents Consent Id"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Get International Scheduled Payment Consents Consent Id"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Get International Scheduled Payment Consents Consent Id"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Get International Scheduled Payment Consents Consent Id"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Get International Scheduled Payment Consents Consent Id"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Get International Scheduled Payment Consents Consent Id"
					]
				}
			}
		},
		{
			"displayName": "GET /international-scheduled-payment-consents/{ConsentId}/funds-confirmation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"International Scheduled Payments"
					],
					"operation": [
						"Get International Scheduled Payment Consents Consent Id Funds Confirmation"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Get International Scheduled Payment Consents Consent Id Funds Confirmation"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Get International Scheduled Payment Consents Consent Id Funds Confirmation"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Get International Scheduled Payment Consents Consent Id Funds Confirmation"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Get International Scheduled Payment Consents Consent Id Funds Confirmation"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Get International Scheduled Payment Consents Consent Id Funds Confirmation"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Get International Scheduled Payment Consents Consent Id Funds Confirmation"
					]
				}
			}
		},
		{
			"displayName": "POST /international-scheduled-payments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"International Scheduled Payments"
					],
					"operation": [
						"Create International Scheduled Payments"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Create International Scheduled Payments"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Create International Scheduled Payments"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Create International Scheduled Payments"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Create International Scheduled Payments"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Create International Scheduled Payments"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Create International Scheduled Payments"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Create International Scheduled Payments"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data",
			"name": "Data",
			"type": "json",
			"default": "{\n  \"Initiation\": {\n    \"Creditor\": {\n      \"PostalAddress\": {\n        \"AddressLine\": [\n          null\n        ]\n      }\n    },\n    \"CreditorAccount\": {},\n    \"CreditorAgent\": {\n      \"PostalAddress\": {}\n    },\n    \"DebtorAccount\": {\n      \"Identification\": {},\n      \"SchemeName\": {},\n      \"SecondaryIdentification\": {}\n    },\n    \"ExchangeRateInformation\": {},\n    \"InstructedAmount\": {},\n    \"RemittanceInformation\": {},\n    \"SupplementaryData\": {}\n  }\n}",
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
						"International Scheduled Payments"
					],
					"operation": [
						"Create International Scheduled Payments"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Create International Scheduled Payments"
					]
				}
			}
		},
		{
			"displayName": "GET /international-scheduled-payments/{InternationalScheduledPaymentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"International Scheduled Payments"
					],
					"operation": [
						"Get International Scheduled Payments International Scheduled Payment Id"
					]
				}
			}
		},
		{
			"displayName": "International Scheduled Payment Id",
			"name": "InternationalScheduledPaymentId",
			"required": true,
			"description": "InternationalScheduledPaymentId",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"International Scheduled Payments"
					],
					"operation": [
						"Get International Scheduled Payments International Scheduled Payment Id"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Get International Scheduled Payments International Scheduled Payment Id"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Get International Scheduled Payments International Scheduled Payment Id"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Get International Scheduled Payments International Scheduled Payment Id"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Get International Scheduled Payments International Scheduled Payment Id"
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
						"International Scheduled Payments"
					],
					"operation": [
						"Get International Scheduled Payments International Scheduled Payment Id"
					]
				}
			}
		},
];
