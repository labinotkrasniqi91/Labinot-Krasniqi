
import { GoogleGenAI, Type } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const generateArchitectAdvice = async (userPrompt: string) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: userPrompt,
    config: {
      systemInstruction: `You are a world-class AI Architect in the year 2026. 
      Your mission is to help developers build AI MVPs following the "2026 Blueprint":
      1. Application Layer (Next.js, UI)
      2. Orchestration Layer (LangGraph, CrewAI)
      3. Knowledge Layer (Vector DBs, RAG)
      4. Model Layer (Gemini, Llama)

      When a user describes an app idea, analyze it through these 4 layers. Be concise, technical, and forward-thinking. 
      Suggest specific tools and agentic logic (looping, self-correction). 
      Format your response in professional Markdown.`,
      temperature: 0.7,
      topP: 0.95,
    },
  });

  return response.text || "I'm having trouble connecting to the architectural grid. Please try again.";
};

export const analyzeAppIdea = async (idea: string) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Analyze this app idea: "${idea}" and provide a JSON blueprint.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          appName: { type: Type.STRING },
          applicationLayer: { type: Type.STRING },
          orchestrationLayer: { type: Type.STRING },
          knowledgeLayer: { type: Type.STRING },
          modelLayer: { type: Type.STRING },
          keyWorkflow: { type: Type.STRING },
        },
        required: ["appName", "applicationLayer", "orchestrationLayer", "knowledgeLayer", "modelLayer", "keyWorkflow"],
      },
    },
  });

  return JSON.parse(response.text);
};
