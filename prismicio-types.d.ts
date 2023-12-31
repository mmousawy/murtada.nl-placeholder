// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type AboutDocumentDataSlicesSlice = HeroSlice;

/**
 * Content for About documents
 */
interface AboutDocumentData {
  /**
   * Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Left intro field in *About*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.left_intro
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  left_intro: prismic.RichTextField;

  /**
   * Left image field in *About*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.left_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  left_image: prismic.ImageField<never>;

  /**
   * Right intro field in *About*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.right_intro
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  right_intro: prismic.RichTextField;

  /**
   * Slice Zone field in *About*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AboutDocumentDataSlicesSlice>
  /**
   * Meta Description field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: about.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *About*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: about.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;

type BlogDocumentDataSlicesSlice = never;

/**
 * Content for Blog documents
 */
interface BlogDocumentData {
  /**
   * Slice Zone field in *Blog*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<BlogDocumentData>, "blog", Lang>;

type BlogPostDocumentDataSlicesSlice = never;

/**
 * Content for Blog post documents
 */
interface BlogPostDocumentData {
  /**
   * Slice Zone field in *Blog post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogPostDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Blog post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog_post.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Blog post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Blog post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog_post.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Blog post document from Prismic
 *
 * - **API ID**: `blog_post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogPostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogPostDocumentData>,
    "blog_post",
    Lang
  >;

type ContactDocumentDataSlicesSlice = never;

/**
 * Content for Contact documents
 */
interface ContactDocumentData {
  /**
   * Slice Zone field in *Contact*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ContactDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Contact*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: contact.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Contact*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Contact*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: contact.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Contact document from Prismic
 *
 * - **API ID**: `contact`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ContactDocumentData>,
    "contact",
    Lang
  >;

type GenericPageDocumentDataSlicesSlice = never;

/**
 * Content for Generic page documents
 */
interface GenericPageDocumentData {
  /**
   * Slice Zone field in *Generic page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: generic_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<GenericPageDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Generic page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: generic_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Generic page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: generic_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Generic page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: generic_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Generic page document from Prismic
 *
 * - **API ID**: `generic_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GenericPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<GenericPageDocumentData>,
    "generic_page",
    Lang
  >;

type HomeDocumentDataSlicesSlice = never;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

/**
 * Item in *Main navigation → Items*
 */
export interface MainNavigationDocumentDataItemsItem {
  /**
   * label field in *Main navigation → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: main_navigation.items[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * link field in *Main navigation → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: main_navigation.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Main navigation documents
 */
interface MainNavigationDocumentData {
  /**
   * Items field in *Main navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: main_navigation.items[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  items: prismic.GroupField<Simplify<MainNavigationDocumentDataItemsItem>>;
}

/**
 * Main navigation document from Prismic
 *
 * - **API ID**: `main_navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MainNavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<MainNavigationDocumentData>,
    "main_navigation",
    Lang
  >;

type ProjectsDocumentDataSlicesSlice = never;

/**
 * Content for Projects documents
 */
interface ProjectsDocumentData {
  /**
   * Slice Zone field in *Projects*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectsDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: projects.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Projects*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Projects*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: projects.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Projects document from Prismic
 *
 * - **API ID**: `projects`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ProjectsDocumentData>,
    "projects",
    Lang
  >;

export type AllDocumentTypes =
  | AboutDocument
  | BlogDocument
  | BlogPostDocument
  | ContactDocument
  | GenericPageDocument
  | HomeDocument
  | MainNavigationDocument
  | ProjectsDocument;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Title field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Intro field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.intro
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  intro: prismic.RichTextField;

  /**
   * Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutDocument,
      AboutDocumentData,
      AboutDocumentDataSlicesSlice,
      BlogDocument,
      BlogDocumentData,
      BlogDocumentDataSlicesSlice,
      BlogPostDocument,
      BlogPostDocumentData,
      BlogPostDocumentDataSlicesSlice,
      ContactDocument,
      ContactDocumentData,
      ContactDocumentDataSlicesSlice,
      GenericPageDocument,
      GenericPageDocumentData,
      GenericPageDocumentDataSlicesSlice,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      MainNavigationDocument,
      MainNavigationDocumentData,
      MainNavigationDocumentDataItemsItem,
      ProjectsDocument,
      ProjectsDocumentData,
      ProjectsDocumentDataSlicesSlice,
      AllDocumentTypes,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
    };
  }
}
