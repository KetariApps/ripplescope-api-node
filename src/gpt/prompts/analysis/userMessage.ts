import OpenAI from "openai";

const userMessage: OpenAI.Chat.ChatCompletionMessage = {
  role: "user",
  content: `Assess any beneficial or hazardous potential outcomes of this project within this impact area. The potential outcomes may be non-obvious, or logically inferred from the intersection of company goals, or the things that must happen for those goals to be realized.`,
};
export default userMessage;
