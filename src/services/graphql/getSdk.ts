import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import { getSdk as getSdkWithClient } from './__generated/sdk';
import type { Requester } from './__generated/sdk';

const requester: Requester<any> = async (doc: any, vars: any) => {
	const VITE_CAISY_PROJECT_ID = import.meta.env.VITE_CAISY_PROJECT_ID;
	const VITE_CAISY_API_KEY = import.meta.env.VITE_CAISY_API_KEY;
	const NODE_ENV = import.meta.env.NODE_ENV;
	if (!VITE_CAISY_PROJECT_ID || VITE_CAISY_PROJECT_ID == '') {
		throw new Error('VITE_CAISY_PROJECT_ID is not defined - please add it to the env file');
	}
	if (!VITE_CAISY_API_KEY || VITE_CAISY_API_KEY == '') {
		throw new Error('VITE_CAISY_API_KEY is not defined - please add it to the env file');
	}

	const client = new GraphQLClient(
		`https://cloud.caisy.io/api/v3/e/${VITE_CAISY_PROJECT_ID}/graphql`,
		{
			headers: {
				'x-caisy-apikey': `${VITE_CAISY_API_KEY}`
			}
		}
	);

	try {
		const res = await client.rawRequest(print(doc), vars);
		return res?.data as any;
	} catch (err: any) {
		if (NODE_ENV == 'development') {
			console.error(
				'Error in GraphQL request:',
				'\n' + print(doc) + '\n',
				vars,
				'\n' + err.message
			);
		} else {
			console.error(err);
		}
	}
};

export const caisySDK = getSdkWithClient(requester);
