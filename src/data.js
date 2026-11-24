export const WORKS = [
  {id:"agent-runs", t:"Agent runs", d:"What is the agent doing, and how sure is it? A run page that answers both while the work is still happening.", c:"Tessel", y:"2025", art:"run"},
  {id:"approval-queue", t:"Approval queue", d:"An internal tool for approving what the agents aren't sure about, on one screen.", c:"Tessel", y:"2026", art:"approvals", dark:true},
  {id:"model-routing", t:"Model routing", d:"An assistant that picks the smallest model that does the job well, and says why.", c:"Kompas", y:"2022", art:"routing"},
  {id:"autonomy-dial", t:"Autonomy dial", d:"Move a task from ask-first to act-alone without losing track of what changed.", c:"Tessel", y:"2025", art:"autonomy"},
  {id:"signal-design-system", t:"Signal design system", d:"One design system for how AI behaves on screen, from thinking to unsure to done, across three products.", c:"Kompas", y:"2023", art:"signal"},
  {id:"context-window", t:"Context window", d:"Drag across a conversation to choose what the model remembers.", c:"Kompas", y:"2024", art:"context"},
  {id:"undo-for-agents", t:"Undo for agents", d:"When an agent removes something, it leaves a gap. Click the gap to bring it back.", c:"Tessel", y:"2026", art:"undo"}
];

export const NOTES = [
  {tag:"Trust", date:"23 Jun 2026", t:"Answers that aren't certain yet", d:"Why our agents describe confidence in words, and what a screen should say while the model is still working."},
  {tag:"Interaction", date:"2 Apr 2026", t:"Show the work, not the spinner", d:"A spinner tells you nothing. A list of steps tells you what to check and where to step in."},
  {tag:"Process", date:"14 Jan 2026", t:"What I check before shipping an AI feature", d:"The list I go through before a model-backed design goes to engineering. Most of it is about the answers nobody drew."}
];

export const ADDR = "hello@foldwise.example";

export const vcard = "data:text/vcard;charset=utf-8," + encodeURIComponent(
  "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:Foldwise\nORG:Foldwise\nTITLE:AI-native senior product designer\n" +
  "EMAIL;TYPE=INTERNET:hello@foldwise.example\nURL:https://foldwise.example\nADR;TYPE=WORK:;;;Amsterdam;;;\nEND:VCARD"
);
