
export interface Layer {
  title: string;
  description: string;
  tools: string[];
  icon: string;
  color: string;
}

export interface Step {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  actionPrompt: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum BuildPath {
  VIBE = 'VIBE',
  PRO = 'PRO'
}
