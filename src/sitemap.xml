import fs from "fs";

export const GET = async () => {
	const sitemap = fs.readFileSync("sitemap.xml", "utf-8");

	return {
		headers: {
			"Content-Type": "application/xml"
		},
		body: sitemap
	};
};