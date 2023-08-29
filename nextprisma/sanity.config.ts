/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */
import { dashboardTool } from '@sanity/dashboard';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import StudioNavbar from './components/sanity/StudioNavbar';
import Logo from './components/sanity/Logo';
import { deskTool } from 'sanity/desk';
import Iframe from 'sanity-plugin-iframe-pane';
import { SanityDocument } from 'sanity';
import { vercelWidget } from 'sanity-plugin-dashboard-widget-vercel';
import { scheduledPublishing } from '@sanity/scheduled-publishing';
import { media } from 'sanity-plugin-media';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';
import { myTheme } from './themes/sanityThemes';

// Customize this function to show the correct URL based on the current document
function getPreviewUrl(doc: SanityDocument, schemaType: string) {
  //! process.env.SANITY_PREVIEW_URL

  return doc?.slug?.current
    ? `http://localhost:3000/previews/${schemaType}/${doc._id}`
    : window.location.host;
}

const defaultDocumentNode = (S, { schemaType }) => {
  /*
  //? Only show preview pane on `movie` schema type documents
  switch (schemaType) {
    case `movie`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: SanityDocument) => getPreviewUrl(doc),
          })
          .title('Preview'),
      ])
    default:
      return S.document().views([S.view.form()])
  } 
  */
  return S.document().views([
    S.view.form(),
    S.view
      .component(Iframe)
      .options({
        url: (doc: SanityDocument) => getPreviewUrl(doc, schemaType),
        reload: {
          button: true, // default `undefined`
          // revision: 2000, boolean | number. default `undefined`. If a number is provided, add a delay (in ms) before the automatic reload on document revision. If `true` then a curated delay is used. Use `0` to have zero delay.`
        },
      })
      .title('Preview'),
  ]);
};

export default defineConfig({
  basePath: '/studio',
  name: 'Messianic_Times_Content_Management',
  title: 'Messianic Times Content Management',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({
      defaultDocumentNode,
    }),
    dashboardTool({
      widgets: [vercelWidget({ layout: { width: 'full' } })],
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    media(),
    scheduledPublishing(),
    unsplashImageAsset(),
  ],
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    },
  },
  theme: myTheme,
});
