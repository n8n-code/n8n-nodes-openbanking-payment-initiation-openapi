import type { INodeProperties } from 'n8n-workflow';

export const paymentDetailsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Details"
					]
				}
			},
			"options": [
				{
					"name": "Get Domestic Payments Domestic Payment Id Payment Details",
					"value": "Get Domestic Payments Domestic Payment Id Payment Details",
					"action": "Get Payment Details",
					"description": "Get Payment Details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domestic-payments/{{$parameter[\"DomesticPaymentId\"]}}/payment-details"
						}
					}
				},
				{
					"name": "Get Domestic Scheduled Payments Domestic Scheduled Payment Id Payment Details",
					"value": "Get Domestic Scheduled Payments Domestic Scheduled Payment Id Payment Details",
					"action": "Get Payment Details",
					"description": "Get Payment Details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domestic-scheduled-payments/{{$parameter[\"DomesticScheduledPaymentId\"]}}/payment-details"
						}
					}
				},
				{
					"name": "Get Domestic Standing Orders Domestic Standing Order Id Payment Details",
					"value": "Get Domestic Standing Orders Domestic Standing Order Id Payment Details",
					"action": "Get Payment Details",
					"description": "Get Payment Details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/domestic-standing-orders/{{$parameter[\"DomesticStandingOrderId\"]}}/payment-details"
						}
					}
				},
				{
					"name": "Get File Payments File Payment Id Payment Details",
					"value": "Get File Payments File Payment Id Payment Details",
					"action": "Get Payment Details",
					"description": "Get Payment Details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/file-payments/{{$parameter[\"FilePaymentId\"]}}/payment-details"
						}
					}
				},
				{
					"name": "Get International Payments International Payment Id Payment Details",
					"value": "Get International Payments International Payment Id Payment Details",
					"action": "Get Payment Details",
					"description": "Get Payment Details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/international-payments/{{$parameter[\"InternationalPaymentId\"]}}/payment-details"
						}
					}
				},
				{
					"name": "Get International Scheduled Payments International Scheduled Payment Id Payment Details",
					"value": "Get International Scheduled Payments International Scheduled Payment Id Payment Details",
					"action": "Get Payment Details",
					"description": "Get Payment Details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/international-scheduled-payments/{{$parameter[\"InternationalScheduledPaymentId\"]}}/payment-details"
						}
					}
				},
				{
					"name": "Get International Standing Orders International Standing Order Payment Id Payment Details",
					"value": "Get International Standing Orders International Standing Order Payment Id Payment Details",
					"action": "Get Payment Details",
					"description": "Get Payment Details",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/international-standing-orders/{{$parameter[\"InternationalStandingOrderPaymentId\"]}}/payment-details"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /domestic-payments/{DomesticPaymentId}/payment-details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Details"
					],
					"operation": [
						"Get Domestic Payments Domestic Payment Id Payment Details"
					]
				}
			}
		},
		{
			"displayName": "Domestic Payment Id",
			"name": "DomesticPaymentId",
			"required": true,
			"description": "DomesticPaymentId",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Details"
					],
					"operation": [
						"Get Domestic Payments Domestic Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get Domestic Payments Domestic Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get Domestic Payments Domestic Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get Domestic Payments Domestic Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get Domestic Payments Domestic Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get Domestic Payments Domestic Payment Id Payment Details"
					]
				}
			}
		},
		{
			"displayName": "GET /domestic-scheduled-payments/{DomesticScheduledPaymentId}/payment-details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Details"
					],
					"operation": [
						"Get Domestic Scheduled Payments Domestic Scheduled Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get Domestic Scheduled Payments Domestic Scheduled Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get Domestic Scheduled Payments Domestic Scheduled Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get Domestic Scheduled Payments Domestic Scheduled Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get Domestic Scheduled Payments Domestic Scheduled Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get Domestic Scheduled Payments Domestic Scheduled Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get Domestic Scheduled Payments Domestic Scheduled Payment Id Payment Details"
					]
				}
			}
		},
		{
			"displayName": "GET /domestic-standing-orders/{DomesticStandingOrderId}/payment-details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Details"
					],
					"operation": [
						"Get Domestic Standing Orders Domestic Standing Order Id Payment Details"
					]
				}
			}
		},
		{
			"displayName": "Domestic Standing Order Id",
			"name": "DomesticStandingOrderId",
			"required": true,
			"description": "DomesticStandingOrderId",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Details"
					],
					"operation": [
						"Get Domestic Standing Orders Domestic Standing Order Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get Domestic Standing Orders Domestic Standing Order Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get Domestic Standing Orders Domestic Standing Order Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get Domestic Standing Orders Domestic Standing Order Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get Domestic Standing Orders Domestic Standing Order Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get Domestic Standing Orders Domestic Standing Order Id Payment Details"
					]
				}
			}
		},
		{
			"displayName": "GET /file-payments/{FilePaymentId}/payment-details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Details"
					],
					"operation": [
						"Get File Payments File Payment Id Payment Details"
					]
				}
			}
		},
		{
			"displayName": "File Payment Id",
			"name": "FilePaymentId",
			"required": true,
			"description": "FilePaymentId",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Details"
					],
					"operation": [
						"Get File Payments File Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get File Payments File Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get File Payments File Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get File Payments File Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get File Payments File Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get File Payments File Payment Id Payment Details"
					]
				}
			}
		},
		{
			"displayName": "GET /international-payments/{InternationalPaymentId}/payment-details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Details"
					],
					"operation": [
						"Get International Payments International Payment Id Payment Details"
					]
				}
			}
		},
		{
			"displayName": "International Payment Id",
			"name": "InternationalPaymentId",
			"required": true,
			"description": "InternationalPaymentId",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Details"
					],
					"operation": [
						"Get International Payments International Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get International Payments International Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get International Payments International Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get International Payments International Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get International Payments International Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get International Payments International Payment Id Payment Details"
					]
				}
			}
		},
		{
			"displayName": "GET /international-scheduled-payments/{InternationalScheduledPaymentId}/payment-details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Details"
					],
					"operation": [
						"Get International Scheduled Payments International Scheduled Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get International Scheduled Payments International Scheduled Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get International Scheduled Payments International Scheduled Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get International Scheduled Payments International Scheduled Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get International Scheduled Payments International Scheduled Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get International Scheduled Payments International Scheduled Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get International Scheduled Payments International Scheduled Payment Id Payment Details"
					]
				}
			}
		},
		{
			"displayName": "GET /international-standing-orders/{InternationalStandingOrderPaymentId}/payment-details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Details"
					],
					"operation": [
						"Get International Standing Orders International Standing Order Payment Id Payment Details"
					]
				}
			}
		},
		{
			"displayName": "International Standing Order Payment Id",
			"name": "InternationalStandingOrderPaymentId",
			"required": true,
			"description": "InternationalStandingOrderPaymentId",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Payment Details"
					],
					"operation": [
						"Get International Standing Orders International Standing Order Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get International Standing Orders International Standing Order Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get International Standing Orders International Standing Order Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get International Standing Orders International Standing Order Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get International Standing Orders International Standing Order Payment Id Payment Details"
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
						"Payment Details"
					],
					"operation": [
						"Get International Standing Orders International Standing Order Payment Id Payment Details"
					]
				}
			}
		},
];
