// All project content lives here so editing the site never means touching layout code.
// Each body entry is either a paragraph string or { heading: '...' } for a sub-section.
//
// NOTE ON IMAGES: hero images currently point at Wix's CDN (static.wixstatic.com).
// They will keep working while the Wix site exists. Before cancelling Wix, download
// each image, drop it in /public/images/, and change the URLs below to '/images/<name>'.

export const projects = [
  {
    slug: 'who-owns-the-change',
    title: 'Who Owns the Change?',
    subtitle: 'Psychological ownership during M&A',
    image:
      'https://static.wixstatic.com/media/5507bb_e35edb53f99e4880933c53a22719a7fd~mv2.png/v1/fill/w_1602,h_1133,al_c/thesis_framework.png',
    body: [
      'Every deal team plans the systems migration in careful waves - audits, testing, a named completion date. Nobody plans the ownership migration. Legal ownership transfers the day the deal completes; the feeling that a team, a product or a way of working is mine transfers slowly, or not at all.',
      'Most integration failure stories are told through culture clash, resistance or attrition statistics. My thesis asked a more specific question underneath those: what actually happens to psychological ownership during an acquisition, and could integration be designed around it, the way it is already designed around systems?',
      "The evidence base is practitioner testimony, gathered under Imperial ethics approval. I recruited interviewees without an existing network in M&A and built a sample spanning different positions around the deal: founders and senior leaders who had sold businesses, employees who had experienced acquisition, and senior practitioners who had advised on or run integrations. Collectively, the participants' experience covered more than a hundred acquisitions.",
      'Interviews were semi-structured and conducted in English and Spanish. Working bilingually widened the sample and allowed Spanish-speaking participants to describe their experience directly rather than through translated interview questions.',
      'I analysed the material using theory-informed template analysis: an initial coding structure derived from the psychological-ownership literature, revised through successive passes against the interview data and extended with themes that emerged inductively. The point was not to make the transcripts fit the theory, but to use theory as a starting structure and change that structure where the evidence demanded it.',
      "One finding organised much of what followed: people don't just respond to the narrative; they read the touch-points.",
      'Leadership can repeat that little will change, but employees continue updating their beliefs as operational decisions land. A reporting line changes. A system disappears. A familiar process is replaced. The logo on a badge changes, or the name on a payslip. These apparently ordinary touch-points become evidence about who now has control, what still belongs to whom and which parts of the old organisation are expected to survive.',
      'The second finding was that ownership threat was not simply an "acquired-side problem". What mattered was whose practices, identities and areas of control became dominant after combination. Acquired employees often faced the clearest disruption, but acquiring-side employees could also experience threat when their own practices were displaced.',
      "The ownership journey also changed radically depending on where someone sat. A founder's ownership could be explicit, identity-laden and negotiated. A broad-base employee's could be embedded in routines, teams and ways of working they had never previously needed to name. Treating both groups as one generic \u201cemployee population\u201d risks missing the mechanism entirely.",
      "I didn't want the output to stop at a discussion chapter, so I translated the research into tools an integration practitioner could use.",
      'Four stakeholder ownership journeys mapped how psychological ownership could shift across the acquisition timeline for acquired senior leaders, acquired employees, acquiring integration leaders and the acquiring incumbent population. Each journey identified changing ownership targets, threat points and the signals likely to matter at different stages.',
      'A stage-anchored framework of 21 decision points and 30 actions translated those diagnoses into practice. Actions were organised around the routes through which psychological ownership develops (knowing, control and self-investment) and tied to particular moments in the deal rather than presented as a generic list of "people" recommendations.',
      'The purpose was to move from advice like communicate clearly or involve employees to more diagnostic questions: what do people currently feel ownership over, what is threatening it, which route to ownership has been disrupted, and what operational touchpoint could change that?',
      'The framework went through seven iterations before structured practitioner appraisal.',
      'Different versions were challenged through interviews and written feedback, and the frozen final summary was then appraised by a panel of practitioners across dimensions including validity, usefulness, usability and likelihood of adoption. Across the final appraisal, 90% of responses were agreement or strong agreement.',
      'I treat that as directional evidence of practitioner plausibility, not proof of effectiveness.',
      'A group of experienced practitioners judging the framework credible and usable matters because they are close to the context in which it would operate. But appraisal is not an outcome study. Demonstrating effectiveness would require applying the framework during a live integration and measuring psychological ownership around actual interventions and touch-points as they occur, rather than reconstructing the process retrospectively.',
      'That is the next study this work points toward, and the boundary of what this thesis claims.',
    ],
  },
  {
    slug: 'antro',
    title: 'Antro',
    subtitle: 'A VR platform for curating and experiencing art',
    image:
      'https://static.wixstatic.com/media/5507bb_c5788cfb2a864395bcc66e0603c70493~mv2.png/v1/fill/w_3020,h_1512,al_c/antro_featured_artists.png',
    body: [
      'Emerging artists compete for limited exhibition space, often through systems shaped by submission fees, networks and gatekeeping. At the same time, people can be interested in art without finding conventional gallery environments particularly accessible or engaging. Antro was my attempt to explore both sides of that problem through a working product: a platform where artists could present and curate their work in virtual space and audiences could experience exhibitions online.',
      'I built every layer myself: research, UX, visual identity, front end, back end, database and the 3D gallery. I spoke to people across different sides of the art ecosystem, including emerging artists, curators and audiences engaging with art online. Three recurring problems shaped the product direction:',
      'Cost: Submission fees and commission structures can create barriers for emerging artists.',
      'Gatekeeping: Access to opportunities is often influenced by networks and existing visibility.',
      'Flatness: Physical work loses scale, spatial relationships and some of its material presence when reduced to an image grid.',
      'Those findings shaped the product priorities: giving artists a professional space to present work, preserving more spatial context than a conventional portfolio grid, and connecting presentation more closely to opportunities.',
      'I developed personas spanning artist, curator and audience roles and mapped the journeys that mattered most, including an artist moving from signup to exhibiting work and a visitor moving from arrival to sustained engagement with an exhibition. The design moved from lo-fi exploration to hi-fi interface design, brand development and implementation. Several constraints became particularly important during the process: reducing unnecessary friction in portfolio administration, making a platform asking artists to upload their work feel credible, keeping the value of maintaining a profile visible, and making sure that the spatial experience did not become a new accessibility barrier.',
      'The platform was built as a full-stack web application, with Node.js and MongoDB supporting a JavaScript front end and a 3D gallery environment built with Three.js. Artists could create profiles, upload work and curate exhibitions in navigable virtual space; visitors could explore those exhibitions through the browser. Building the entire stack myself meant design and implementation could never be treated as separate exercises. Interface decisions immediately encountered database structure, performance, authentication, file handling and technical feasibility.',
      'That experience still shapes the way I design: I want to understand not only what an experience should do, but what it would actually take to build and operate it. Antro became a functioning platform, but its biggest methodological weakness is also one of the most useful things the project taught me. I did research before designing it, but I did not run sufficiently structured user testing before committing to the full implementation. Much of the feedback came once substantial parts of the system already existed. In other words: I built too much before testing enough.',
      'That is exactly backwards from how I work now. My later behavioural-design projects begin by defining the mechanism, intervention and validation approach before committing to a build.',
      'Antro therefore matters to me for two reasons: it proves I can take a digital product from research to functioning software alone, and it marks the point from which my process became much more rigorous about testing what should be built before building it.',
    ],
  },
  {
    slug: 'gili-islands-strategy',
    title: 'A Plastic Strategy for the Gili Islands',
    subtitle: 'Strategy under uncertainty, in 24 hours',
    image:
      'https://static.wixstatic.com/media/5507bb_63473e395cd34b52a4d94d8e1644552b~mv2.png/v1/fill/w_1300,h_732,al_c/sds_strategy-5.png',
    body: [
      'The Gili Islands depend heavily on tourism while the environmental conditions attracting that tourism are threatened by plastic waste. The task was to produce, in under 24 hours, a plastic strategy that a governing board could actually act on. Not a vision statement: a thought out and defendable plan. The three stakeholders had three incompatible demands.',
      'The environmental case pushed toward aggressive reduction and restrictions, tourism operators had an obvious concern: interventions that increased costs or reduced convenience could damage the economy the strategy was intended to protect, residents stood between the environmental degradation affecting the islands and the household incomes dependent on tourism.',
      "A recommendation that maximised one objective while ignoring the others would be easy to write and difficult to implement. So I set a harder constraint: the strategy had to reduce plastic leakage without treating economic viability, local legitimacy or implementation capacity as somebody else's problem.",
      'Rather than beginning with a ban, I mapped the plastic through the island system and designed interventions around the points where it entered, moved through and left that system. The resulting strategy followed five moves:',
      'Remove or highly tax plastic that does not need to enter the islands - any excess and one use unnecessary plastic should not be entering in the first place.',
      "Reduce demand for what remains - make tourists see the price of plastic, don't just include water bottles on diving trips, offer it as an extra with an additional cost.",
      'Collect used material before it leaks into the environment - increase bin concentration, implement reward schemes for rubbish collection, reusable water bottles available on deposit or for rental.',
      'Process it through a viable disposal chain - using tourists on ferries, empty shipping containers leaving the islands and larger processing centres elsewhere if possible.',
      'Rebrand the transition so lower-plastic operation could become part of the islands tourism proposition rather than being framed only as a compliance cost - create events, make tourists feel included, everybody wins from this.',
      'The strategy set two headline targets: 60% less plastic leakage by 2031 while protecting 95% of tourism profit, alongside visible progress in the first year. The sequencing mattered as much as the interventions themselves: bins before the fines, audits before banning randomly, pilots before scaling. Enforcement that arrives before the infrastructure required to comply with it reads as punishment. Infrastructure first makes later enforcement more legitimate and more feasible.',
      'The financing model followed the same principle. Costs should fall primarily where tourist-generated waste enters the system, while smaller local operators need protection during the transition rather than being forced to absorb disproportionate compliance costs.',
      'One of the most important parts of the sprint was identifying which apparently solid assumptions were actually carrying too much of the recommendation. Two claims in the source material were especially influential: an estimate around the size of the eco-conscious tourism segment and the assumption that strong restrictions would necessarily damage tourism. Both affected the commercial logic of the strategy. Neither was evidence I was willing to treat as settled. So the final recommendation explicitly identified the evidence that would need to be strengthened before implementation:',
      'A proper current plastic-flow audit, because the strategy needs reliable volumes and sources rather than estimates.',
      'Validation of the ferry and logistics chain, because any off-island processing model depends on it.',
      'A stronger evidence base for the tourism-segment assumption, because the commercial case for repositioning the islands partly rests on whether that audience is substantial enough to matter.',
      "Naming those gaps wasn't hedging. It was the difference between presenting a plausible direction and pretending the evidence justified more certainty than it did.",
      'The 24-hour constraint taught the opposite lesson too: uncertainty cannot become an excuse to analyse indefinitely, some requests for more evidence simply postpone a decision.',
    ],
  },
  {
    slug: 'mindweb',
    title: 'MindWeb',
    subtitle: 'Turning a research field into a landscape',
    image:
      'https://static.wixstatic.com/media/5507bb_024088c248d149dfa4dbeee5571ce27c~mv2.png/v1/fill/w_1469,h_916,al_c/mindweb_interface.png',
    body: [
      "Search works well when you know what to search for. Traditional literature search is built around queries. That is efficient when you already know the authors or subfield you need, and much less useful when you're trying to understand the structure of an unfamiliar research landscape.",
      "MindWeb approached the problem spatially instead. We built an interactive map of a year of Imperial's open-access research, turning individual publications into a network that could be explored rather than a list that had to be searched. Publications were connected through shared topics, grouped into communities and made visually legible as parts of a wider research ecosystem.",
      'The project combined a data pipeline using the OpenAlex API with analysis and visualisation in R and an interactive interface built in Shiny. Louvain community detection was used to surface clusters within the network rather than imposing disciplinary categories from the top down. Articles could then be represented as parts of those emerging clusters, with visual prominence used to communicate relative impact.',
      'The interesting design question was not simply how to display more research. It was how to transform an abstract dataset into something a person could reason through visually. A list tells you what exists. A network can also show what sits together, what bridges different areas, and where relatively empty territory might exist between established clusters.',
      'MindWeb sits between data analysis and interface design, which is why it still belongs in the portfolio. The algorithmic output was not the final product. Clustering only became useful once its structure could be interpreted by a person.',
    ],
  },
  {
    slug: 'calaratobi',
    title: 'Calara Tobi',
    subtitle: 'A real site for a real business',
    image:
      'https://static.wixstatic.com/media/5507bb_05139b33d4c0427faf49dabba7293f5e~mv2.png/v1/fill/w_3024,h_1526,al_c/Screenshot%202026-08-31%20at%2020.45.44.png',
    body: [
      "Calara Tobi is an 18th-century riad in Essaouira's medina. The commission was to turn the property into a functioning digital presence for a real hospitality business: a site capable of presenting the riad and supporting its marketing and booking journey. Unlike university work, there was no speculative future user and no final presentation after which the project stopped mattering. It had to be delivered, handed over and continue functioning once I was no longer actively designing it.",
      'The job was partly visual, translating the character of a historic physical space into a digital experience, but the site also had to make practical information easy to find and give prospective guests a clear route towards booking. I designed, built and shipped the website, and it remains live for the business.',
      'It is deliberately one of the simpler projects in this portfolio. Its value is different from the thesis or behavioural-science work: it is evidence of delivery and my most recent freelance work.',
    ],
  },
  {
    slug: 'moving-forward-hub',
    title: 'Moving Forward Hub',
    subtitle: 'Designing against student loneliness',
    image:
      'https://static.wixstatic.com/media/5507bb_4b5d822642e84328b12f8b7e5c936abd~mv2.png/v1/fill/w_3000,h_1688,al_c/mfh_intervention_stages.png',
    body: [
      'Universities create plenty of opportunities for first-year students to meet. The harder problem is getting those first encounters to develop into actual relationships. The Moving Forward Hub was designed around that gap, instead of another one-off icebreaker, the intervention brings the same students back together across three progressively deeper sessions using a card-based format to move interaction deliberately from low-risk conversation towards more meaningful self-disclosure.',
      'Students remain in groups of four, initially matched around shared interests. The structure changes at each stage: early sessions are weighted towards easy prompts and shared actions; later sessions introduce more reflective one-to-one conversations. The intervention ends with a Friendship Ticket: three activities the group agrees to do together, with dates attached, followed by a reminder designed to keep that intention alive.',
      'The design was built around a specific behavioural mechanism rather than a general ambition to "help people connect."',
      'Social Penetration Theory informed the progression from surface conversation towards deeper disclosure, while the disclosure\u2013liking effect supplied the central mechanism: deeper reciprocal disclosure can increase liking and interpersonal connection. The Friendship Ticket tackles a different failure point, the familiar gap between "we should do this again" and actually arranging it, by turning a vague intention into specified future actions. COM-B and Self-Determination Theory were also used to interrogate whether students had the capability, opportunity and motivation to participate comfortably.',
      'After submitting the group project, we individually designed a 10-week longitudinal randomised controlled trial recruiting 160 first-year students, allowing for 20% attrition from an a priori minimum sample of 128. Participants would be assigned through stratified randomisation to either the Hub or a waitlist control, with loneliness measured using the UCLA Loneliness Scale and social connectedness through the Social Connectedness Scale-Revised. The study tests three things: whether the Hub reduces loneliness, whether it increases social connectedness, and whether completing more stages is associated with a larger effect.',
      'The more interesting part of designing the study was identifying where an apparently positive intervention could fail. Students opting into a loneliness programme may already be more socially motivated than those who need it most. Progressive disclosure could also become uncomfortable rather than connective for some socially anxious students. And matching around similarity might make early interaction easier while unintentionally reinforcing social homogeneity.',
      "The biggest change I'd make before a real trial would therefore be to integrate the Hub more closely into normal orientation rather than relying entirely on self-selection. The project taught me something I now apply much more broadly: a plausible intervention is only the beginning. The next design question is how you would prove yourself wrong.",
    ],
  },
  {
    slug: 'ayan',
    title: 'AYAN',
    subtitle: 'A wearable for managing sickle cell crises',
    image:
      'https://static.wixstatic.com/media/5507bb_f9d0a298cdc2475faecde048d4e51a13~mv2.png/v1/fill/w_2000,h_1125,al_c/ayan_hero.png',
    body: [
      'AYAN was developed around sickle cell crises: acute episodes where timing matters and delayed pain management can make an already difficult episode harder to manage. The project began with primary research with people living with sickle cell disease. One participant expressed the problem particularly clearly:',
      '"If I had taken the pain relief earlier, I would be in less pain now."',
      'That observation shifted the design problem away from pain relief alone and towards recognising and responding earlier.',
      'As a team of five, we developed the concept for a wearable patch intended to monitor biosignals associated with an approaching crisis and support timely transdermal pain-relief delivery. Once the research and ideation had been done as a team, my contribution focused on the companion-app interface in Figma and the colour, material and finish direction for the wearable itself.',
      "A medical wearable can communicate illness every time it is visible. We explored skin-tone palettes and softer, more everyday forms so the device could sit on the body with less of the visual language of conventional medical equipment. That same principle carried into the companion experience: health information has to be available without making the user feel as though their condition has become the interface's entire identity.",
      'AYAN is concept work rather than a clinically validated device, what it demonstrates is a design shift I care about: starting with lived experience, then allowing that evidence to change both the functional proposition and the physical expression of the product.',
      'The technology is only useful if the person who has to wear it can actually imagine doing so.',
    ],
  },
  {
    slug: 'shifting-realities',
    title: 'Shifting Realities',
    subtitle: 'Privacy, consciousness and education in the age of AI',
    image:
      'https://static.wixstatic.com/media/5507bb_b4fa87609be84a2aaceb78101eba1732~mv2.png/v1/fill/w_2614,h_1462,al_c/Screenshot%202026-09-02%20at%2019.32.17.png',
    body: [
      'Shifting Realities explored what happens when artificial intelligence moves beyond being a technical tool and begins shaping how people are observed, understood and influenced. Rather than answering that through one medium, I built the project as three connected investigations:',
      { heading: '1. In the Public: making surveillance something you experience' },
      "The first project began with Foucault's Panopticon: surveillance changes behaviour not because someone is necessarily watching at every moment, but because people know that they could be.",
      'I translated that idea into Under the Gaze, a cyberpunk visual story following Cam through a city where facial recognition, location tracking, behavioural profiling and targeted systems are embedded into ordinary life. The project asks what happens when the observer is no longer a guard in a tower but an invisible network of automated systems.',
      'The visuals were generated with MidJourney and developed through iterative prompting, selection and post-production. That process became part of the project itself: AI made rapid image production possible but struggled with character consistency, spatial control and sequential coherence. I had to repeatedly generate, curate and edit outputs to construct a narrative that actually held together.',
      "I didn't want surveillance to remain something happening only to the fictional character, I therefore built an interactive consent flow in HTML, CSS and JavaScript, deliberately borrowing the formality and friction of real digital terms-and-conditions interfaces. It asked users for personal information and consent before participating in an emotion-tracking experiment, making the act of data collection visible rather than hiding it behind the experience.",
      'I then experimented with facial-emotion analysis using OpenCV and DeepFace, processed the resulting data in Python and visualised it using Matplotlib. The interesting result was how often its classifications failed to match what participants said they actually felt. That failure strengthened the conceptual argument: turning human behaviour into data does not automatically mean understanding it.',
      { heading: "2. The Awakening of Ava: intelligence isn't the same as consciousness" },
      'Using Ex Machina as a case study, I wrote a critical media analysis around the distinction between performing intelligence and possessing consciousness. Ava appears to understand emotion, manipulate relationships, pursue autonomy and act according to her own interests. I used that fictional scenario to investigate several questions that become increasingly important as AI systems become more socially convincing:',
      'Can fluent behaviour be mistaken for understanding?',
      'What happens when people form emotional attachments to machines?',
      'If an artificial system ever became genuinely autonomous, where would ownership end and rights begin?',
      "And how should accountability work when an intelligent system acts beyond its creator's intentions?",
      "The value of the exercise wasn't predicting whether Ava-like AI will exist. It was using fiction to expose assumptions that already affect how people interpret real AI systems: we are extremely willing to infer understanding, intention and personality from convincing behaviour.",
      { heading: '3. Will Robots Finally Revolutionise Education?: moving from speculation to a social system' },
      'The final investigation moved from fictional AI into a real institutional context: education. I explored the argument that increasingly capable AI and robotics could support personalised learning, reduce administrative work and extend educational access - but also introduce new problems around privacy, bias, dependency and control.',
      'Rather than finishing with my own argument, I collected anonymous responses to deliberately expose it to other perspectives. One participant argued that automation might be most valuable precisely where teachers are least human, while preserving the relational parts of teaching that people remember. Another raised a more difficult possibility: hyper-personalised education could optimise around each child\u2019s measured strengths and weaknesses, but in doing so could also begin deciding very early what sort of future each student is suited for.',
      'At first glance these are three different questions, the thread connecting them is agency.',
      'Who gets to observe us?',
      'Who gets to interpret what our behaviour means?',
      "When does a machine's simulation of understanding become persuasive enough that people treat it as real?",
      'And what happens when those systems move from describing people to making decisions that shape what happens to them?',
      'Shifting Realities was an early project, and some of its methods were exploratory rather than experimentally rigorous. But it established a question that has carried into much of my later work: When a system makes claims about human behaviour, what gives us reason to trust those claims, and what happens when we do?',
    ],
  },
]

export const site = {
  name: 'NICOLE STOTT',
  tagline: 'Researching behaviour. Designing systems. Building what comes next.',
  intro: [
    'I\u2019m a designer-researcher working across behavioural science, strategy and technology.',
    'I research why people behave the way they do, turn evidence into decisions, and design and build what the evidence calls for.',
  ],
  location: 'London / Madrid',
  email: 'n.s.stott@outlook.com',
  phone: '+44 7826 477534',
  phoneDisplay: '07826 477534',
  linkedin: 'https://www.linkedin.com/in/nicolestottloz',
  homeImage:
    'https://static.wixstatic.com/media/5507bb_b9ca8bceb49b4bad9faf752efaaebd02~mv2.jpeg/v1/crop/x_0,y_28,w_1664,h_1014/fill/w_980,h_597,al_c,q_85/Document_2026-09-02_165344.jpeg',
  poppyTop:
    'https://static.wixstatic.com/media/5507bb_c7133cd55ecf4315b80f897955408344~mv2.png/v1/fill/w_1960,h_654,al_c,q_85/Pink%20Poppy%20Flowers.png',
  poppyBottom:
    'https://static.wixstatic.com/media/5507bb_b151f1e93943431db45fbcf6400f04f7~mv2.png/v1/fill/w_1960,h_654,al_c,q_85/Pink%20Poppy%20Flowers.png',
  aboutImage:
    'https://static.wixstatic.com/media/5507bb_53a32beffcbb4a2c8ec275db191393ce~mv2.jpeg/v1/crop/x_75,y_0,w_683,h_1036/fill/w_683,h_1036,al_c,q_85/CBBF03EB-BCB2-42FB-8739-A3930973C254_1_105_c.jpeg',
}
