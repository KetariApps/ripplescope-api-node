import {
  ChatCompletionRequestMessage,
  ChatCompletionRequestMessageRoleEnum,
} from "openai";
import { global } from "./sysFoundations.js";

export const ripplescope: ChatCompletionRequestMessage[] = [
  ...global,
  {
    role: ChatCompletionRequestMessageRoleEnum.Assistant,
    content: `A co-benefit is an aspect of the project that would have a positive impact, which is not known of or described by the stated mission of the project.
  A co-hazard is an aspect of the project that would have a negative impact, which is not known of or described by the stated mission of the project.
  `,
  },
  {
    role: ChatCompletionRequestMessageRoleEnum.Assistant,
    content: `Format the report using the following Markdown Template: 
  
  ## Title
  
  ### Co-Benefits

  * co-benefit 
  * co-benefit 
  * co-benefit 


  ### Co-Hazards

  * co-hazard 
  * co-hazard 
  * co-hazard 

  `,
  },
  {
    role: ChatCompletionRequestMessageRoleEnum.Assistant,
    content: `DATA SOURCES -  based on Question 1 below, pulls data by country or region from:
  
      World Bank Data or UN Data
      World Bank Poverty and Equity Portal
      UN Human Development Index
      UN Gender Inequality Index
      Global ICT Development Index by ITU / Network Readiness Index Global Economic Forum / GSMA / Global Connectivity Index Huawei / Affordability Index, Alliance for Affordable Internet 
      World Ecosystem Map
      Conflict Data
      Banking Services Data?
      
      Data points to pull by country for each category: 
      
      HOUSING [1] – economic development index, rural or (peri)urban setting
      ENERGY [5] - % with reliable energy access, affordability of access
      WATER [1] – scarcity, % access to running water
      NUTRITION [2]
      INFORMATION [1, 2, 3, or 5] – literacy, technological literacy, mobile subscriptions per unit population
      SOCIAL EQUITY [4] – composite score
      POLITICAL VOICE [3] – component score
      HEALTH [3] – component score
      EDUCATION [3] – component score
      INCOME [1 or 2] – LOCAL living wage / minimum wage (not international)
      PEACE [7] - component score
      BIODIVERSITY [6] – natural ecosystem type , number of canopy layers of that type
      AGENCY [8] - component score
       
      QUESTIONS TO USER
      
      Question 1: please input your project’s GPS coordinates (or please select your map location).  
      
      Question 2: About what % of your total staff relocated to begin working with you? [A] 0-25% / 25-50% / 50-75% / 75-100%
      
      Question 3: About how much water does your project consume per day?  [C] X-X / X-X / X-X / X-X
      
      Question 4: When that water is released from your site, does it contain additional or fewer components than when it entered your site? [C] more / less / no change
      
      Question 5: Please select any types of training your project provides to its staff, and approximately what percentage of total staff receives this training. 0-25% / 25-50% / 50-75% / 75-100%
      Technology. GPS units, mobile phones, laptop/desktop computers, coding/programming, software, etc. [E]  
      Finance. Budgeting, accounting, business management, or similar. [M]
      Health/Wellness. Nutrition, exercise, preventative medicine. [H]
      Social equality. Anti-discrimination, harassment, justice, gender and minority issues [F]
      Ecological. Sustainable management of ecosystems, tree/forest, agriculture, etc. [L]
      General resume builders. Anything that doesn’t fit in the above categories that improves an individuals’ future hireability [I]
      
      Question 6: What percentage of your total staff identifies as male? [F]  0-25% / 25-50% / 50-75% / 75-100%
      
      Question 7: What percentage of your total staff identifies as an ethnic or religious minority? [F]  0-25% / 25-50% / 50-75% / 75-100%
      
      Question 8: What % of your staff receives health care or health insurance that fully covers the cost of preventative and emergency care? [H] 0-25% / 25-50% / 50-75% / 75-100%
      
      Question 9: What is the hourly wage in dollars of your lowest-earning employee? [J]
      
      Question 10: Which best describes your project site before you started work? Symptoms of degradation often include soil erosion, bare soil, compacted soil, absence of natural vegetation, contaminants in soil or water, bleaching, etc. Disturbances might include heavily trafficked roads, industry, managed agricultural/timberland, or residential areas [L] degraded / built infrastructure / healthy agriculture or timberland / natural state with disturbances nearby / natural state with no significant disturbances nearby
      
      Question 11: When your project is fully operational, which do you expect will best describe your site? [L] degraded / built infrastructure / agriculture or timberland / natural state with disturbances nearby / natural state with no significant disturbances nearby
      
      
      Returns to user:
      
      HOUSING 
      50-100% + economy in development: repeatedly opting to import staff into a developing economy country can exacerbate social stratification and gentrification. In contrast, local staff can bring rich community ties and cultural understanding to your work. Rechannel relocation expenses into training and human resource development to cultivate a robust local staff. 
      50-100% + developed economy OR 25-50% + any economy: Local staff can bring rich community ties and cultural understanding to your work. Look to your local staff to help with the most effective approaches to winning over the community and local government. If you’re struggling in this area, consider rechanneling relocation expenses into training and human resource development to cultivate a robust local staff.
      0-25% + any economy: your project has a competitive advantage in its rich community ties and cultural understanding. Leverage your local staff’s knowledge of their country and community when you’re considering the best approaches to build community engagement and public awareness. Given your strong contributions to the local economy, you also have the opportunity to win local or even national government support of your work. 
      ENERGY 
      >=80% electrification: 
      50-80% national electrification+ rural area OR >50% national electrification: 
      WATER 
      Water scarce country + >=80% reliable running water access:
      Water scarce country + <80% reliable running water access
      Water abundant country + 50-80% running water access+rural area OR water abundant country + <50% running water access:
      
      High/med water consumption + improved quality: 
      High/med water consumption + reduced quality:
      High/med water consumption + no quality change:
      Low water consumption + improved quality:
      Low water consumption + reduced quality:
      Low water consumption + no quality change:
      
      NUTRITION 
      National nutritional insecurity <5%:
      National nutritional insecurity 5-15% + rural:
      National nutritional insecurity >15%:
      
      INFORMATION 
      Weak to mid national information access + <=50% tech training:
      Weak to mid national information access + >50% tech training:
      Strong national information access + <=50% tech training:
      Strong national information access + >50% tech training:
      
      SOCIAL EQUITY 
      0-25% non-male + high inequity:
      25-50% non-male + high inequity: 
      >50% non-male + med/high inequity:
      0-25% non-male and medium inequity: 
      25-50% non-male and medium inequity:
      0-25% non-male and low inequity:
      25-50% non-male and low inequity:
      >50% non-male and low inequity:
      
      0-25% minority + high inequity:
      >25% minority + high inequity: 
      0-25% minority and medium inequity: 
      >25% minority and medium inequity:
      0-25% minority and low inequity:
      >25% minority and low inequity:
      
      POLITICAL VOICE 
      Low political agency:
      Medium political agency:
      High political agency:
      
      HEALTH 
      Low-med national health access + <75% coverage:
      Low-med national health access + 75-100% coverage + 50-100% staff relocated:
      Low-med national health access + 75-100% coverage + 0-50% staff relocated:
      Robust national health access + <75% coverage:
      Robust national health access + 75-100% coverage:
      
      EDUCATION 
      Poor national access + average <50% staff trained:
      Poor national access + average >50% staff trained:
      Med national access + average <50% staff trained:
      Med national access + average >50% staff trained:
      Robust national access + average <50% staff trained:
      Robust national access + average >50% staff trained:
      
      INCOME 
      Lowest staff wage <100% of local living/minimum wage OR Lowest staff wage =100% of local living/minimum wage + urban:
      Lowest staff wage = 100% of local living/minimum wage + rural OR Lowest staff wage 101-150% of local living/minimum wage + urban:
      Lowest staff wage = 150%+ of local living/minimum wage + rural OR Lowest staff wage 200%+ of local living/minimum wage + urban:
      
      PEACE 
      No conflict:
      Isolated conflict:
      Systematic conflict:
      
      BIODIVERSITY 
      From degraded to built:
      From degraded / built to managed ecosystem:
      From degraded / built to natural ecosystem:
      From managed to natural with disturbances:
      From managed to natural without disturbances:
      Degraded / built / managed no change:
      Natural no change:
      
      AGENCY`,
  },
];

export const buildPrompt = (projectPlan: string) => `PROJECT
  ${projectPlan}
  
  
  ---
  
  
  Assess the ethical and ecological co-benefits and co-hazards of the project.`;
