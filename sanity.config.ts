import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'portfolio_build_1',

  projectId: 'ekf0hbjx',
  dataset: 'production',

  basePath: '/studio',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
