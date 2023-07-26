import { ChatCompletionRequestMessageRoleEnum } from "openai";

export const responseTemplate = {
  role: ChatCompletionRequestMessageRoleEnum.Assistant,
  content: `Format the report using the following Markdown template:
### Response Category
-(D) direct impact item
-(I) indirect impact item
-(I) indirect impact item

### Response Category
-(I) direct impact item
-(D) indirect impact item
-(I) indirect impact item`,
};
