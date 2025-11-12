import { Play , Mic , Lightbulb, Search, Zap , Globe} from "lucide-react";
import { FeatureCards } from "./FeatureCards";
import { Models } from "./Models";
export function  HowItWorksSection  () {
  const features = [
    {
      icon: Play,
      title: 'Object & Scene Detection',
      description: 'AI can recognize visual elements objects, people, and environments in your video',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: Mic,
      title: 'Speech Transcription',
      description: 'Whisper AI converts the audio from your video into accurate text transcription',
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: Lightbulb,
      title: 'Semantic Understanding',
      description: 'LLM model deep contextual understanding enabling natural conversations',
      bgColor: 'bg-pink-100',
      iconColor: 'text-pink-600'
    },
    {
      icon: Search,
      title: 'Intelligent Search',
      description: 'Ask code-friendly questions to generate powerful search queries for more precision',
      bgColor: 'bg-rose-100',
      iconColor: 'text-rose-600'
    },
    {
      icon: Globe,
      title: 'Web-as-its-Discovery',
      description: 'Using multiple LLM agents to facilitate video retrieval related content',
      bgColor: 'bg-green-100',
      iconColor: 'text-green-600'
    }
  ];

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-center text-gray-900 mb-4">
        How It Works
      </h3>
      <p className="text-center text-gray-600 text-sm mb-12 max-w-2xl mx-auto">
        Our platform combines state-of-the-art AI models to analyze your video content at multiple levels - from the visual and textual information.
      </p>

      <div className="grid grid-cols-3 gap-6 mb-12">
        {features.map((feature, index) => (
          <FeatureCards key={index} {...feature} />
        ))}
      </div>

      <Models />
    </div>
  );
};