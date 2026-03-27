import { type SchemaTypeDefinition } from 'sanity';
import { communityType } from './community';
import { reviewType } from './review';
import { agentType } from './agent';
import { articleType } from './article';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [communityType, reviewType, agentType, articleType],
};
