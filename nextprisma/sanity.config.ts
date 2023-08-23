/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */
import { dashboardTool } from '@sanity/dashboard';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { vercelWidget } from 'sanity-plugin-dashboard-widget-vercel';
import { scheduledPublishing } from '@sanity/scheduled-publishing';
import { media } from 'sanity-plugin-media';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env';
import { schema } from './sanity/schema';
import { myTheme } from './themes/sanityThemes';

export default defineConfig({
  basePath: '/studio',
  name: 'Messianic_Times_Content_Management',
  title: 'Messianic Times Content Management',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool(),
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
  theme: myTheme,
});
