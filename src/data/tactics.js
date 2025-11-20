const tactics = {
  'soft-probe': {
    key: 'soft-probe',
    title: 'Soft Probe',
    definition: 'Low-risk, low-cost contact or message used to test reactions and gather signals without committing resources.',
    example: 'A vague DM or innocuous social media comment sent to observe tone and response latency.',
    detection: ['Unexpected low-effort contacts out of character','Patterned repetition across channels','Requests that attempt to elicit emotional reaction rather than factual reply'],
    countermeasures: ['Treat unsolicited contacts with skepticism','Record timestamps and preserve original message','Verify identity through independent channels'],
    quiz: []
  },
  'loyalty-tests': {
    key: 'loyalty-tests',
    title: 'Loyalty Tests',
    definition: 'Probes framed as benign requests that are designed to reveal loyalties or provoke failure.',
    example: 'A small favor request that exposes willingness to act against stated principles.',
    detection: ['Request asks for rule-bending or secrecy','Request is unnecessary for normal interaction','Pattern of escalating asks after compliance'],
    countermeasures: ['Pause and evaluate motives','Decline or offer alternative, documented response','Log the request and participants'],
    quiz: []
  },
  'plausible-deniability': {
    key: 'plausible-deniability',
    title: 'Plausible Deniability',
    definition: 'Structuring actions so orchestrators can deny involvement by relying on intermediaries or ambiguous directives.',
    example: 'Using casual acquaintances or contractors to execute an awkward interaction.',
    detection: ['Multiple layers between source and actor','Inconsistent attribution in records','Small actors with sudden attention'],
    countermeasures: ['Trace interactions to primary sources','Preserve chain-of-contact','Be wary of contradictory statements'],
    quiz: []
  },
  'reciprocity': {
    key: 'reciprocity',
    title: 'Reciprocity',
    definition: 'Leveraging small favors or gifts to create a sense of obligation that can be later exploited.',
    example: 'Offering help or flattering praise prior to a request.',
    detection: ['Unsolicited favors with strings attached','Behavior changes after a gift','Requests that reference past favors'],
    countermeasures: ['Acknowledge favors explicitly and document them','Set clear boundaries','Avoid accepting unknown gifts that could influence decisions'],
    quiz: []
  },
  'pre-suasion': {
    key: 'pre-suasion',
    title: 'Pre‑suasion',
    definition: 'Shaping context or attention before delivering a message to increase its persuasive effect.',
    example: 'Planting topics or cues in a conversation so a later request seems natural.',
    detection: ['Context-setting unrelated to the core topic','Sudden emphasis on a theme before a request','Repeated framing across channels'],
    countermeasures: ['Identify and call out framing attempts','Refocus conversation to facts','Keep records of prior context'],
    quiz: []
  },
  'misinformation-campaigns': {
    key: 'misinformation-campaigns',
    title: 'Misinformation Campaigns',
    definition: 'Deliberate spreading of false or misleading content to shape perceptions.',
    example: 'Coordinated posts amplifying an invented narrative.',
    detection: ['Rapid spread without credible sources','Identical text across accounts','Content designed to provoke emotional reaction'],
    countermeasures: ['Cross-check claims with reputable sources','Preserve original posts and metadata','Alert platforms when coordinated abuse is suspected'],
    quiz: []
  },
  'reputation-assassination': {
    key: 'reputation-assassination',
    title: 'Reputation Assassination',
    definition: 'Targeted attempts to damage an individual’s standing through allegations, innuendo, or selective evidence.',
    example: 'Publishing edited screenshots or out-of-context quotes.',
    detection: ['Sudden influx of negative posts','Use of emotionally charged language','Selective quoting or missing context'],
    countermeasures: ['Collect original materials','Respond with factual, documented statements','Consider legal or platform remedies where appropriate'],
    quiz: []
  },
  'civilian-weaponization': {
    key: 'civilian-weaponization',
    title: 'Civilian Weaponization',
    definition: 'Turning uninvolved community members into vectors for influence or surveillance.',
    example: 'Seeding doubts among neighbors so they report trivial incidents.',
    detection: ['Unusual engagement from community members','Reports that mirror seeded narratives','Small actors repeating targeted talking points'],
    countermeasures: ['Encourage independent verification','Limit sensitive disclosures in community spaces','Document interactions and timelines'],
    quiz: []
  },
  'slow-burn-operations': {
    key: 'slow-burn-operations',
    title: 'Slow Burn Operations',
    definition: 'Long-duration campaigns that gradually shift perceptions or normalize narratives.',
    example: 'Consistent drip of content that shifts baseline expectations.',
    detection: ['Incremental narrative shifts over time','Content distributed across many channels','Low-intensity persistent messaging'],
    countermeasures: ['Maintain historical baselines','Archive content samples','Educate audiences about long-term influence tactics'],
    quiz: []
  },
  'social-proof-confirmation-bias': {
    key: 'social-proof-confirmation-bias',
    title: 'Social Proof & Confirmation Bias',
    definition: 'Using perceived consensus and existing beliefs to increase acceptance of content.',
    example: 'Bootstrapped likes, shares, or curated testimonials to create appearance of consensus.',
    detection: ['Synchronised support signals','Echoing language across networks','Rapid emergence of corroborating accounts'],
    countermeasures: ['Expose amplification patterns','Promote diverse viewpoints','Verify claims before sharing'],
    quiz: []
  },
  'law-enforcement-cooption': {
    key: 'law-enforcement-cooption',
    title: 'Law Enforcement Co‑option',
    definition: 'Attempts to use official channels or plausible reporting to legitimize narratives.',
    example: 'Submitting complaints or reports that reinforce a targeted narrative.',
    detection: ['Official reports lacking normal corroboration','Selective leaks to media','Patterned reporting timed with disinformation bursts'],
    countermeasures: ['Preserve records of official interactions','Request written confirmations and case numbers','Work with trusted ombuds or legal counsel when needed'],
    quiz: []
  },
  'pattern-framing': {
    key: 'pattern-framing',
    title: 'Pattern Framing',
    definition: 'Selective aggregation of events to create a misleading pattern.',
    example: 'Highlighting unrelated incidents as part of a connected trend.',
    detection: ['Cherry-picked samples','Missing context or timeline','Over-generalized conclusions from few data points'],
    countermeasures: ['Audit datasets for representativeness','Map full timelines','Deny over-generalized premises with evidence'],
    quiz: []
  },
  'strategic-observation': {
    key: 'strategic-observation',
    title: 'Strategic Observation',
    definition: 'Deliberate monitoring to identify triggers, patterns, and leverage points.',
    example: 'Tracking posting cadence to identify best times to inject content.',
    detection: ['Accounts that mirror your activity windows','Repeated low-level probing messages','Signal collection around specific events'],
    countermeasures: ['Harden timelines and reduce signal leakage','Limit metadata exposure where possible','Rotate routines and delay public reactions'],
    quiz: []
  },
  'authority-bias': {
    key: 'authority-bias',
    title: 'Authority Bias',
    definition: 'Exploiting trust in perceived authorities to lend credibility to content.',
    example: 'Amplifying a claim by attaching it to a credentialed but uninformed source.',
    detection: ['References to credentials without verifiable linkage','Out-of-context endorsements','Rapid uptake following authoritative-sounding mentions'],
    countermeasures: ['Verify endorsements and citations','Promote source transparency','Encourage healthy skepticism of authority claims'],
    quiz: []
  },
  'bandwagon-effect': {
    key: 'bandwagon-effect',
    title: 'Bandwagon Effect',
    definition: 'Creating momentum by simulating mass adoption or belief.',
    example: 'Coordinated posts presenting a narrative as widely accepted.',
    detection: ['Simultaneous posts across accounts','Inflated engagement metrics inconsistent with account age','Narrative pushed by clusters rather than organic spread'],
    countermeasures: ['Expose coordination graphs','Report coordinated inauthentic behavior to platforms','Educate audiences on metrics manipulation'],
    quiz: []
  },
  'digital-amplification': {
    key: 'digital-amplification',
    title: 'Digital Amplification',
    definition: 'Using automation, bots, or paid networks to magnify reach.',
    example: 'Botnets boosting a post to trend.',
    detection: ['High volume with low-quality accounts','Repetitive posting patterns','Anomalous spikes in reach without organic referral sources'],
    countermeasures: ['Archive and analyse metadata','Use platform reporting tools','Work with platform partners to identify automation'],
    quiz: []
  },
  'atmospheric-shifts': {
    key: 'atmospheric-shifts',
    title: 'Atmospheric Shifts',
    definition: 'Subtle changes to the tone or context of a community to normalize certain attitudes.',
    example: 'Repeated humor that slowly reframes a taboo topic as acceptable.',
    detection: ['Gradual shift in community language','Normalization of previously abnormal themes','Coordinated re-framing that appears organic'],
    countermeasures: ['Encourage explicit norms and moderation','Document changes over time','Provide counter-narratives anchored in evidence'],
    quiz: []
  },
  'setup-by-reaction': {
    key: 'setup-by-reaction',
    title: 'Setup by Reaction',
    definition: 'Provocations designed to elicit predictable responses that can be reframed as evidence.',
    example: 'Minor provocation expecting an emotional reply which is then presented as aggressive behavior.',
    detection: ['Tempting language intended to provoke','Rapid reframing of a reaction as proof','Coordinated witnesses echoing the frame'],
    countermeasures: ['Avoid immediate reactive replies in public','Capture and preserve the initiating material','Respond with calm, documented statements'],
    quiz: []
  },
  'gaslighting': {
    key: 'gaslighting',
    title: 'Gaslighting',
    definition: 'Persistent denial or reframing of facts to make a target doubt their reality.',
    example: 'Rewriting past statements or denying events that occurred.',
    detection: ['Conflicting records vs contemporary evidence','Repeated reframing across channels','Attempts to isolate a target from corroborating contacts'],
    countermeasures: ['Maintain contemporaneous records','Share corroborating evidence with trusted parties','Validate memories against timestamps and originals'],
    quiz: []
  },
  'darvo': {
    key: 'darvo',
    title: 'DARVO',
    definition: 'Deny, Attack, Reverse Victim and Offender — a reaction pattern used to deflect accountability.',
    example: 'A public denial followed by counter-accusations against the complainant.',
    detection: ['Role reversal narratives','Victim-blaming language','Swift counter-accusations following allegations'],
    countermeasures: ['Keep clear records of original allegations','Point to factual inconsistencies','Support complainants with documentation'],
    quiz: []
  },
  'message-undermining': {
    key: 'message-undermining',
    title: 'Message Undermining',
    definition: 'Diluting or drowning out a message through noise, distractions, or constant rebuttals.',
    example: 'Flooding comment threads with tangential arguments to exhaust audience attention.',
    detection: ['High volume of low-quality responses','Off-topic derailment patterns','Repeated reposting of counter-narratives'],
    countermeasures: ['Refocus channels on verified content','Use summarised rebuttals and pin authoritative sources','Control amplification vectors where possible'],
    quiz: []
  },
  'invisibility-through-oversaturation': {
    key: 'invisibility-through-oversaturation',
    title: 'Invisibility Through Oversaturation',
    definition: 'Burying relevant signals under mass noise so important items are overlooked.',
    example: 'Publishing many trivial posts to push important content out of view.',
    detection: ['Rapid content churn from same accounts','Important items quickly pushed down feeds','Difficulty locating original materials in timelines'],
    countermeasures: ['Use curated archives and indexes','Flag and pin critical items','Maintain redundant backups of key materials'],
    quiz: []
  },
  'countermeasures-module': {
    key: 'countermeasures-module',
    title: 'Countermeasures Module',
    definition: 'A set of general practices for resistance and resilience against influence operations.',
    example: 'Documentation workflows, verification routines, and boundary-setting practices.',
    detection: [],
    countermeasures: ['Recognizing incongruities','Strategic responses','Setting boundaries','Meticulous documentation','Self-validation'],
    quiz: []
  }
};

export default tactics;