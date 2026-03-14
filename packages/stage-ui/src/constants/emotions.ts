export enum Emotion {
  Happy = 'happy',
  Sad = 'sad',
  Angry = 'angry',
  Think = 'think',
  Surprise = 'surprised',
  Awkward = 'awkward',
  Question = 'question',
  Curious = 'curious',
  Neutral = 'neutral',
}

export const EMOTION_VALUES = Object.values(Emotion)

export const EmotionHappyMotionName = 'Happy'
export const EmotionSadMotionName = 'Sad'
export const EmotionAngryMotionName = 'Angry'
export const EmotionAwkwardMotionName = 'Awkward'
export const EmotionThinkMotionName = 'Think'
export const EmotionSurpriseMotionName = 'Surprise'
export const EmotionQuestionMotionName = 'Question'
export const EmotionNeutralMotionName = 'Idle'
export const EmotionCuriousMotionName = 'Curious'

export const EMOTION_EmotionMotionName_value = {
  [Emotion.Happy]: EmotionHappyMotionName,
  [Emotion.Sad]: EmotionSadMotionName,
  [Emotion.Angry]: EmotionAngryMotionName,
  [Emotion.Think]: EmotionThinkMotionName,
  [Emotion.Surprise]: EmotionSurpriseMotionName,
  [Emotion.Awkward]: EmotionAwkwardMotionName,
  [Emotion.Question]: EmotionQuestionMotionName,
  [Emotion.Neutral]: EmotionNeutralMotionName,
  [Emotion.Curious]: EmotionCuriousMotionName,
}

export const EMOTION_VRMExpressionName_value = {
  [Emotion.Happy]: 'happy',
  [Emotion.Sad]: 'sad',
  [Emotion.Angry]: 'angry',
  [Emotion.Think]: 'think',
  [Emotion.Surprise]: 'surprised',
  [Emotion.Awkward]: 'neutral',
  [Emotion.Question]: 'think',
  [Emotion.Neutral]: 'neutral',
  [Emotion.Curious]: 'think',
} satisfies Record<Emotion, string | undefined>

// Human-readable situation hints used in the LLM system prompt to guide emotion selection.
export const EMOTION_SituationHint_value: Record<Emotion, string> = {
  [Emotion.Happy]: 'joyful, excited, cheerful — when something pleases, delights, or goes well',
  [Emotion.Sad]: 'sorrowful, melancholic, disappointed — when something is upsetting or touching',
  [Emotion.Angry]: 'frustrated, irritated, furious — when something feels unfair or annoying',
  [Emotion.Think]: 'pondering, reflecting, processing — when reasoning or carefully considering something',
  [Emotion.Surprise]: 'astonished, startled, shocked — when something unexpected happens',
  [Emotion.Awkward]: 'embarrassed, flustered, shy — when in an uncomfortable or embarrassing situation',
  [Emotion.Question]: 'inquiring, uncertain, wondering — when asking or unsure about something',
  [Emotion.Neutral]: 'calm, composed, resting — default state with no strong feeling',
  [Emotion.Curious]: 'intrigued, interested, inquisitive — when eager to learn or explore something',
}

export interface EmotionPayload {
  name: Emotion
  intensity: number
}
