import { inferRipples } from '../links/index.js';

type InferredRipples = Awaited<ReturnType<typeof inferRipples>>;

export default function resolveRippleResponse(
  settledRipplesResponse: PromiseSettledResult<InferredRipples>,
) {
  let fulfilledRipplesResponses: InferredRipples | undefined = undefined;
  if (settledRipplesResponse.status === 'fulfilled') {
    fulfilledRipplesResponses = settledRipplesResponse.value;
  } else {
    console.error(settledRipplesResponse.reason);
  }

  return fulfilledRipplesResponses;
}
