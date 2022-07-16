import { ContentfulClientApi, createClient, Entry } from "contentful";
import { PageService, IPageService } from "./page";
export { documentToHtmlString } from "@contentful/rich-text-html-renderer";

let client: ContentfulClientApi;

export const withClient = (
  content: (client: ContentfulClientApi) => IPageService
) => {
  if (!client) {
    client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID!,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
    });
  }

  return content(client);
};

export const getPageService = () => withClient(PageService);

export class ContentfulClient {
  private static _instance: ContentfulClientApi;

  private constructor() {}

  public static getInstance() {
    if (!ContentfulClient._instance) {
      ContentfulClient._instance = createClient({
        space: process.env.CONTENTFUL_SPACE_ID!,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
      });
    }

    return ContentfulClient._instance;
  }
}
