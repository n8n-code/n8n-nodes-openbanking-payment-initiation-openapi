# @n8n-dev/n8n-nodes-openbanking-payment-initiation-openapi

![openbanking-payment-initiation-openapi Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-openbanking-payment-initiation-openapi.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-openbanking-payment-initiation-openapi)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing openbanking-payment-initiation-openapi API integrations by hand.**

Every time you connect n8n to openbanking-payment-initiation-openapi, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to openbanking-payment-initiation-openapi took 5 minutes, not half a day?**

This node gives you **8+ resources** out of the box: **Domestic Payments**, **Payment Details**, **Domestic Scheduled Payments**, **Domestic Standing Orders**, **File Payments**, and 3 more: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-openbanking-payment-initiation-openapi
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-openbanking-payment-initiation-openapi`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **openbanking-payment-initiation-openapi API** → paste your API key
3. Drag the **openbanking-payment-initiation-openapi** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

| Resource | Operations |
|----------|------------|
| Domestic Payments | Post create domestic payment consents, Get domestic payment consents, Get domestic payment consents funds confirmation, Post create domestic payments, Get domestic payments |
| Payment Details | Get payment details, Get payment details, Get payment details, Get payment details, Get payment details, Get payment details, Get payment details |
| Domestic Scheduled Payments | Post create domestic scheduled payment consents, Get domestic scheduled payment consents, Post create domestic scheduled payments, Get domestic scheduled payments |
| Domestic Standing Orders | Post create domestic standing order consents, Get domestic standing order consents, Post create domestic standing orders, Get domestic standing orders |
| File Payments | Post create file payment consents, Get file payment consents, Get file payment consents, Post create file payment consents, Post create file payments, Get file payments, Get file payments |
| International Payments | Post create international payment consents, Get international payment consents, Get international payment consents funds confirmation, Post create international payments, Get international payments |
| International Scheduled Payments | Post create international scheduled payment consents, Get international scheduled payment consents, Get international scheduled payment consents funds confirmation, Post create international scheduled payments, Get international scheduled payments |
| International Standing Orders | Post create international standing order consents, Get international standing order consents, Post create international standing orders, Get international standing orders |

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from openbanking-payment-initiation-openapi docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official openbanking-payment-initiation-openapi OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **openbanking-payment-initiation-openapi** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the openbanking-payment-initiation-openapi API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)
