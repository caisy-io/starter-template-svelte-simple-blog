import { gql } from 'graphql-request';
import { f_Category } from './Category';
import { f_Author } from './Author';

export const f_FullwidthBlogTeaser = gql`
	${f_Category}
	${f_Author}
	fragment FullwidthBlogTeaser on FullwidthBlogTeaser {
		id
		featuredArticle {
			id
			slug
			teaserImage {
				...Asset
			}
			text {
				connections {
					__typename
					... on Asset {
						...Asset
					}
				}
				json
			}
			author {
				...Author
			}
			category {
				...Category
			}
			teaserHeadline
			teaserDesciption
		}
		id
	}
`;
