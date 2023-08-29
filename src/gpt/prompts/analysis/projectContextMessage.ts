import OpenAI from "openai";
import {
  LocationDetailsFragment,
  ProjectDetailsFragment,
} from "../../../__generated__/graphql.js";

const projectContextMessage = (
  project: ProjectDetailsFragment & {
    locations: readonly LocationDetailsFragment[];
  }
) => {
  const { name, context, problem, solution, employees, locations } = project;

  const content = `PROJECT NAME: ${name}

  ${
    employees === undefined || employees === undefined
      ? ""
      : `NUMBER OF EMPLOYEES: ${employees}\n\n`
  }PROBLEM SOLVING:\n${problem}
  
  SOLUTION TO PROBLEM:\n${solution}
  
  CONTEXT:\n${context}
  
  LOCATIONS:\n${locations
    .map((l) => `${l.city}, ${l.state ? l.state + ", " : ""}${l.nation}`)
    .join("\n")}`;

  const message: OpenAI.Chat.ChatCompletionMessage = {
    role: "assistant",
    content: content,
  };
  return message;
};
export default projectContextMessage;
