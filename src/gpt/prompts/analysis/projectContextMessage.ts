import OpenAI from 'openai';
import { ProjectDetailsFragment } from '../../../__generated__/graphql.js';

const projectContextMessage = (project: ProjectDetailsFragment) => {
  const { name, context, problem, solution, employees } = project;

  const content = `PROJECT NAME: ${name}

  ${
    employees === undefined || employees === undefined
      ? ''
      : `NUMBER OF EMPLOYEES: ${employees}\n\n`
  }PROBLEM SOLVING:\n${problem}
  
  SOLUTION TO PROBLEM:\n${solution}
  
  CONTEXT:\n${context}
  `;

  const message: OpenAI.Chat.ChatCompletionMessage = {
    role: 'assistant',
    content: content,
  };
  return message;
};
export default projectContextMessage;
