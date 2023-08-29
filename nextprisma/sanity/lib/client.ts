import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export const previewClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  perspective: 'previewDrafts',
});
