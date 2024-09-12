import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Harry\'s Project',

  projectId: 'qswgrvsw',
  dataset: 'topics',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
