import { GPT_DescriptionResponse } from '../types.js';

export default function resolveSettledSummary(
  settledSummary: PromiseSettledResult<GPT_DescriptionResponse | undefined>,
) {
  if (settledSummary === undefined) return undefined;
  let fulfilledSummary: GPT_DescriptionResponse | undefined = undefined;
  if (settledSummary.status === 'fulfilled') {
    fulfilledSummary = settledSummary.value;
  } else {
    console.error(settledSummary.reason);
  }

  return fulfilledSummary;
}
