import type { INodeProperties } from 'n8n-workflow';

export const domesticStandingOrdersDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Standing Orders"
					]
				}
			},
			"options": [
				{
					"name": "Create Domestic Standing Order Consents",
					"value": "Create Domestic Standing Order Consents",
					"action": "Create Domestic Standing Order Consents",
					"description": "Create Domestic Standing Order Consents",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/domestic-standing-order-consents"
						}
					}
				},
				{
					"name": "Get Domestic Standing Order Consents Consent ID",
					"value": "Get Domestic Standing Order Consents Consent ID",
					"action": "Get Domestic Standing Order Consents",
					"description": "Get Domestic Standing Order Consents",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domestic-standing-order-consents/{{$parameter[\"ConsentId\"]}}"
						}
					}
				},
				{
					"name": "Create Domestic Standing Orders",
					"value": "Create Domestic Standing Orders",
					"action": "Create Domestic Standing Orders",
					"description": "Create Domestic Standing Orders",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/domestic-standing-orders"
						}
					}
				},
				{
					"name": "Get Domestic Standing Orders Domestic Standing Order ID",
					"value": "Get Domestic Standing Orders Domestic Standing Order ID",
					"action": "Get Domestic Standing Orders",
					"description": "Get Domestic Standing Orders",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domestic-standing-orders/{{$parameter[\"DomesticStandingOrderId\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /domestic-standing-order-consents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Standing Orders"
					],
					"operation": [
						"Create Domestic Standing Order Consents"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Create Domestic Standing Order Consents"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Create Domestic Standing Order Consents"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Create Domestic Standing Order Consents"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Create Domestic Standing Order Consents"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Create Domestic Standing Order Consents"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Create Domestic Standing Order Consents"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Create Domestic Standing Order Consents"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data",
			"name": "Data",
			"type": "json",
			"default": "{\n  \"Authorisation\": {},\n  \"Initiation\": {\n    \"CreditorAccount\": {},\n    \"DebtorAccount\": {\n      \"Identification\": {},\n      \"SchemeName\": {},\n      \"SecondaryIdentification\": {}\n    },\n    \"FinalPaymentAmount\": {},\n    \"FirstPaymentAmount\": {\n      \"Amount\": {},\n      \"Currency\": {}\n    },\n    \"RecurringPaymentAmount\": {\n      \"Amount\": {},\n      \"Currency\": {}\n    },\n    \"SupplementaryData\": {}\n  },\n  \"SCASupportData\": {}\n}",
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Create Domestic Standing Order Consents"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Create Domestic Standing Order Consents"
					]
				}
			}
		},
		{
			"displayName": "GET /domestic-standing-order-consents/{ConsentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Standing Orders"
					],
					"operation": [
						"Get Domestic Standing Order Consents Consent ID"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Get Domestic Standing Order Consents Consent ID"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Get Domestic Standing Order Consents Consent ID"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Get Domestic Standing Order Consents Consent ID"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Get Domestic Standing Order Consents Consent ID"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Get Domestic Standing Order Consents Consent ID"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Get Domestic Standing Order Consents Consent ID"
					]
				}
			}
		},
		{
			"displayName": "POST /domestic-standing-orders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Standing Orders"
					],
					"operation": [
						"Create Domestic Standing Orders"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Create Domestic Standing Orders"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Create Domestic Standing Orders"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Create Domestic Standing Orders"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Create Domestic Standing Orders"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Create Domestic Standing Orders"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Create Domestic Standing Orders"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Create Domestic Standing Orders"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data",
			"name": "Data",
			"type": "json",
			"default": "{\n  \"Initiation\": {\n    \"CreditorAccount\": {},\n    \"DebtorAccount\": {\n      \"Identification\": {},\n      \"SchemeName\": {},\n      \"SecondaryIdentification\": {}\n    },\n    \"FinalPaymentAmount\": {},\n    \"FirstPaymentAmount\": {\n      \"Amount\": {},\n      \"Currency\": {}\n    },\n    \"RecurringPaymentAmount\": {\n      \"Amount\": {},\n      \"Currency\": {}\n    },\n    \"SupplementaryData\": {}\n  }\n}",
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Create Domestic Standing Orders"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Create Domestic Standing Orders"
					]
				}
			}
		},
		{
			"displayName": "GET /domestic-standing-orders/{DomesticStandingOrderId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Standing Orders"
					],
					"operation": [
						"Get Domestic Standing Orders Domestic Standing Order ID"
					]
				}
			}
		},
		{
			"displayName": "Domestic Standing Order ID",
			"name": "DomesticStandingOrderId",
			"required": true,
			"description": "DomesticStandingOrderId",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Domestic Standing Orders"
					],
					"operation": [
						"Get Domestic Standing Orders Domestic Standing Order ID"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Get Domestic Standing Orders Domestic Standing Order ID"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Get Domestic Standing Orders Domestic Standing Order ID"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Get Domestic Standing Orders Domestic Standing Order ID"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Get Domestic Standing Orders Domestic Standing Order ID"
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
						"Domestic Standing Orders"
					],
					"operation": [
						"Get Domestic Standing Orders Domestic Standing Order ID"
					]
				}
			}
		},
];
