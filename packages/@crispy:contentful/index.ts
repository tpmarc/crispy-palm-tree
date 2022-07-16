import { ContentfulClientApi, createClient } from "contentful";
export { documentToHtmlString } from "@contentful/rich-text-html-renderer";
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
