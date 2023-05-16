import { env } from '$env/dynamic/private';

// delete this after the onboarding is complete
export async function GET(): Promise<Response> {
	const CAISY_PROJECT_ID = env.CAISY_PROJECT_ID;

	return Response.redirect(
		`https://app.caisy.io/app/project/home?project_id=${CAISY_PROJECT_ID}&verify_template_setup=true`
	);
}
