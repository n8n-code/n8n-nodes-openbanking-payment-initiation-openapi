import type { INodeProperties } from 'n8n-workflow';

export const filePaymentsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"File Payments"
					]
				}
			},
			"options": [
				{
					"name": "Create File Payment Consents",
					"value": "Create File Payment Consents",
					"action": "Create File Payment Consents",
					"description": "Create File Payment Consents",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/file-payment-consents"
						}
					}
				},
				{
					"name": "Get File Payment Consents Consent ID",
					"value": "Get File Payment Consents Consent ID",
					"action": "Get File Payment Consents",
					"description": "Get File Payment Consents",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/file-payment-consents/{{$parameter[\"ConsentId\"]}}"
						}
					}
				},
				{
					"name": "Get File Payment Consents Consent ID File",
					"value": "Get File Payment Consents Consent ID File",
					"action": "Get File Payment Consents",
					"description": "Get File Payment Consents",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/file-payment-consents/{{$parameter[\"ConsentId\"]}}/file"
						}
					}
				},
				{
					"name": "Create File Payment Consents Consent ID File",
					"value": "Create File Payment Consents Consent ID File",
					"action": "Create File Payment Consents",
					"description": "Create File Payment Consents",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/file-payment-consents/{{$parameter[\"ConsentId\"]}}/file"
						}
					}
				},
				{
					"name": "Create File Payments",
					"value": "Create File Payments",
					"action": "Create File Payments",
					"description": "Create File Payments",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/file-payments"
						}
					}
				},
				{
					"name": "Get File Payments File Payment ID",
					"value": "Get File Payments File Payment ID",
					"action": "Get File Payments",
					"description": "Get File Payments",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/file-payments/{{$parameter[\"FilePaymentId\"]}}"
						}
					}
				},
				{
					"name": "Get File Payments File Payment ID Report File",
					"value": "Get File Payments File Payment ID Report File",
					"action": "Get File Payments",
					"description": "Get File Payments",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/file-payments/{{$parameter[\"FilePaymentId\"]}}/report-file"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /file-payment-consents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"File Payments"
					],
					"operation": [
						"Create File Payment Consents"
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
						"File Payments"
					],
					"operation": [
						"Create File Payment Consents"
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
						"File Payments"
					],
					"operation": [
						"Create File Payment Consents"
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
						"File Payments"
					],
					"operation": [
						"Create File Payment Consents"
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
						"File Payments"
					],
					"operation": [
						"Create File Payment Consents"
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
						"File Payments"
					],
					"operation": [
						"Create File Payment Consents"
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
						"File Payments"
					],
					"operation": [
						"Create File Payment Consents"
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
						"File Payments"
					],
					"operation": [
						"Create File Payment Consents"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data",
			"name": "Data",
			"type": "json",
			"default": "{\n  \"Authorisation\": {},\n  \"Initiation\": {\n    \"DebtorAccount\": {},\n    \"RemittanceInformation\": {},\n    \"SupplementaryData\": {}\n  },\n  \"SCASupportData\": {}\n}",
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
						"File Payments"
					],
					"operation": [
						"Create File Payment Consents"
					]
				}
			}
		},
		{
			"displayName": "GET /file-payment-consents/{ConsentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"File Payments"
					],
					"operation": [
						"Get File Payment Consents Consent ID"
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
						"File Payments"
					],
					"operation": [
						"Get File Payment Consents Consent ID"
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
						"File Payments"
					],
					"operation": [
						"Get File Payment Consents Consent ID"
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
						"File Payments"
					],
					"operation": [
						"Get File Payment Consents Consent ID"
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
						"File Payments"
					],
					"operation": [
						"Get File Payment Consents Consent ID"
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
						"File Payments"
					],
					"operation": [
						"Get File Payment Consents Consent ID"
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
						"File Payments"
					],
					"operation": [
						"Get File Payment Consents Consent ID"
					]
				}
			}
		},
		{
			"displayName": "GET /file-payment-consents/{ConsentId}/file",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"File Payments"
					],
					"operation": [
						"Get File Payment Consents Consent ID File"
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
						"File Payments"
					],
					"operation": [
						"Get File Payment Consents Consent ID File"
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
						"File Payments"
					],
					"operation": [
						"Get File Payment Consents Consent ID File"
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
						"File Payments"
					],
					"operation": [
						"Get File Payment Consents Consent ID File"
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
						"File Payments"
					],
					"operation": [
						"Get File Payment Consents Consent ID File"
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
						"File Payments"
					],
					"operation": [
						"Get File Payment Consents Consent ID File"
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
						"File Payments"
					],
					"operation": [
						"Get File Payment Consents Consent ID File"
					]
				}
			}
		},
		{
			"displayName": "POST /file-payment-consents/{ConsentId}/file",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"File Payments"
					],
					"operation": [
						"Create File Payment Consents Consent ID File"
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
						"File Payments"
					],
					"operation": [
						"Create File Payment Consents Consent ID File"
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
						"File Payments"
					],
					"operation": [
						"Create File Payment Consents Consent ID File"
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
						"File Payments"
					],
					"operation": [
						"Create File Payment Consents Consent ID File"
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
						"File Payments"
					],
					"operation": [
						"Create File Payment Consents Consent ID File"
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
						"File Payments"
					],
					"operation": [
						"Create File Payment Consents Consent ID File"
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
						"File Payments"
					],
					"operation": [
						"Create File Payment Consents Consent ID File"
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
						"File Payments"
					],
					"operation": [
						"Create File Payment Consents Consent ID File"
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
						"File Payments"
					],
					"operation": [
						"Create File Payment Consents Consent ID File"
					]
				}
			}
		},
		{
			"displayName": "POST /file-payments",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"File Payments"
					],
					"operation": [
						"Create File Payments"
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
						"File Payments"
					],
					"operation": [
						"Create File Payments"
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
						"File Payments"
					],
					"operation": [
						"Create File Payments"
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
						"File Payments"
					],
					"operation": [
						"Create File Payments"
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
						"File Payments"
					],
					"operation": [
						"Create File Payments"
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
						"File Payments"
					],
					"operation": [
						"Create File Payments"
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
						"File Payments"
					],
					"operation": [
						"Create File Payments"
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
						"File Payments"
					],
					"operation": [
						"Create File Payments"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Data",
			"name": "Data",
			"type": "json",
			"default": "{\n  \"Initiation\": {\n    \"DebtorAccount\": {},\n    \"RemittanceInformation\": {},\n    \"SupplementaryData\": {}\n  }\n}",
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
						"File Payments"
					],
					"operation": [
						"Create File Payments"
					]
				}
			}
		},
		{
			"displayName": "GET /file-payments/{FilePaymentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"File Payments"
					],
					"operation": [
						"Get File Payments File Payment ID"
					]
				}
			}
		},
		{
			"displayName": "File Payment ID",
			"name": "FilePaymentId",
			"required": true,
			"description": "FilePaymentId",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"File Payments"
					],
					"operation": [
						"Get File Payments File Payment ID"
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
						"File Payments"
					],
					"operation": [
						"Get File Payments File Payment ID"
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
						"File Payments"
					],
					"operation": [
						"Get File Payments File Payment ID"
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
						"File Payments"
					],
					"operation": [
						"Get File Payments File Payment ID"
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
						"File Payments"
					],
					"operation": [
						"Get File Payments File Payment ID"
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
						"File Payments"
					],
					"operation": [
						"Get File Payments File Payment ID"
					]
				}
			}
		},
		{
			"displayName": "GET /file-payments/{FilePaymentId}/report-file",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"File Payments"
					],
					"operation": [
						"Get File Payments File Payment ID Report File"
					]
				}
			}
		},
		{
			"displayName": "File Payment ID",
			"name": "FilePaymentId",
			"required": true,
			"description": "FilePaymentId",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"File Payments"
					],
					"operation": [
						"Get File Payments File Payment ID Report File"
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
						"File Payments"
					],
					"operation": [
						"Get File Payments File Payment ID Report File"
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
						"File Payments"
					],
					"operation": [
						"Get File Payments File Payment ID Report File"
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
						"File Payments"
					],
					"operation": [
						"Get File Payments File Payment ID Report File"
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
						"File Payments"
					],
					"operation": [
						"Get File Payments File Payment ID Report File"
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
						"File Payments"
					],
					"operation": [
						"Get File Payments File Payment ID Report File"
					]
				}
			}
		},
];
