import { CodegenConfig } from '@graphql-codegen/cli';

export const config: CodegenConfig = {
	overwrite: true,
	ignoreNoDocuments: true,
	schema: [
		{
			[`https://cloud.caisy.io/api/v3/e/${process.env.VITE_CAISY_PROJECT_ID}/graphql` || '']: {
				headers: {
					'x-caisy-apikey': `${process.env.CAISY_API_KEY}`
				}
			}
		}
	],
	generates: {
		'src/services/graphql/__generated/graphql.schema.json': {
			plugins: ['introspection']
		},
		'src/services/graphql/__generated/graphql.schema.graphql': {
			plugins: ['schema-ast']
		},
		'src/services/graphql/__generated/sdk.ts': {
			documents: [
				'src/services/graphql/**/*.graphql',
				'src/services/graphql/fragments/**/*.ts',
				'src/services/graphql/queries/**/*.ts'
			],
			plugins: ['typescript', 'typescript-operations', 'typescript-generic-sdk'],
			config: {
				rawRequest: false,
				inlineFragmentTypes: 'combine',
				skipTypename: false,
				exportFragmentSpreadSubTypes: true,
				dedupeFragments: true,
				preResolveTypes: true,
				typesPrefix: 'IGen'
			}
		}
	}
};

export default config;
