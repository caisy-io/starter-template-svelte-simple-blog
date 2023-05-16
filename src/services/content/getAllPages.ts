import { caisySDK } from "../graphql/getSdk";

export type PageMeta = {
  __typename?: "Page";
  id?: string | null;
  slug?: string | null;
  _meta?: {
    __typename?: "CaisyDocument_Meta";
    publishedAt?: any | null;
  } | null;
};

export interface GetAllPages {
  after?: string;
  arr?: PageMeta[];
}

export const getAllPages = async ({ after, arr = [] }: GetAllPages): Promise<PageMeta[]> => {
  const { allPage } = await caisySDK.allPageMeta({ after });

  allPage?.edges?.forEach((edge) => {
    edge?.node && arr.push(edge.node as PageMeta);
  });

  if (allPage?.pageInfo?.hasNextPage) {
    return await getAllPages({
      after: allPage?.pageInfo?.endCursor ?? undefined,
      arr,
    });
  }

  return arr as PageMeta[];
};
