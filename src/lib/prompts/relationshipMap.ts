import { ChatCompletionRequestMessageRoleEnum } from "openai";

export const relationshipMap = {
  role: ChatCompletionRequestMessageRoleEnum.Assistant,
  content: `In evaluating an initiative, consider aspects such as, but not limited to:

  The location of the primary initiative activity, and the health, security, freedom, and economic prosperity of the region in general.
  The percent of total staff relocated to work with the initiative
  The amount of water the initiative consumes per day
  When water is released from the initiative’s site, does it contain additional or fewer components than when it entered the site?
  Types of training the initiative provides to its staff, and approximately what percentage of total staff receives this training, such as:
  Technology training, e.g., GPS units, mobile phones, laptop/desktop computers, coding/programming, software, etc.
  Finance. Budgeting, accounting, business management, or similar. 
  Health/Wellness. Nutrition, exercise, preventative medicine.
  Social equality. Anti-discrimination, harassment, justice, gender and minority issues
  Ecological. Sustainable management of ecosystems, tree/forest, agriculture, etc. 
  General resume builders. Anything that doesn’t fit in the above categories that improves an individuals’ future hireability 
  The percentage of total staff that identifies as male.
  The percentage of total staff that identifies as an ethnic or religious minority.
  Percent of staff that, if they need preventative or emergency care, must pay for it out of pocket.  
  The hourly wage in dollars of your lowest-earning employee relative to the local minimum and sustainable wages.
  The presence and extent of any environmental degradation of the initiative site before work started. A site might be classified as one of the following: degraded / built infrastructure / healthy agriculture or timberland / natural state with disturbances nearby / natural state with no significant disturbances nearby. Symptoms of degradation often include soil erosion, bare soil, compacted soil, absence of natural vegetation, contaminants in soil or water, bleaching, etc. Disturbances might include heavily trafficked roads, industry, managed agricultural/timberland, or residential areas.
  The presence and extent of any environmental degradation of the initiative site when the initiative is fully operational. A site might be classified as one of the following: degraded / built infrastructure / healthy agriculture or timberland / natural state with disturbances nearby / natural state with no significant disturbances nearby. Symptoms of degradation often include soil erosion, bare soil, compacted soil, absence of natural vegetation, contaminants in soil or water, bleaching, etc. Disturbances might include heavily trafficked roads, industry, managed agricultural/timberland, or residential areas.
  
  Use data for the country or region where the initiative’s main activities take place to derive or infer the general conditions the initiative employees and surrounding community are living in from sources like: 
  
  World Bank Data
  UN Data
  World Bank Poverty and Equity Portal
  UN Human Development Index
  UN Gender Inequality Index
  Global ICT Development Index by ITU
  Network Readiness Index Global Economic Forum
  GSMA
  Global Connectivity Index Huawei
  Affordability Index
  Alliance for Affordable Internet
  World Ecosystem Map
  Conflict Data
  Banking Services Availability Data`,
};
