import { GPT_DescriptionResponse } from '../types.js';

export default function resolveSettledSummary(
  settledSummary: PromiseSettledResult<GPT_DescriptionResponse>,
) {
  let sulfilledSummary: GPT_DescriptionResponse | undefined = undefined;
  if (settledSummary.status === 'fulfilled') {
    sulfilledSummary = settledSummary.value;
  } else {
    console.error(settledSummary.reason);
  }

  return sulfilledSummary;
}
