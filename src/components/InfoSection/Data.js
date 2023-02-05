export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: 'ABOUT US',
    headline: 'Here is what you would like to know about us',
    description: 'Technology is an integral part of our daily lives, and the further into the future we become, the more we depend on it. For this reason, we have taken the initiative to gather all students from all over the world to participate in the CGS Technovation 2023.' 
        + ' So what is CGS Technovation?'  
        + ' This is a four-day online event hosted by a joint group of students from our three student associations at Chittagong Grammar School: the Programming Club, the eSports Club, and the Recreational Club. Throughout the event, students will not only be able to compete against students from other schools in their chosen segment but will also have the opportunity to be inspired by great keynote speakers who have made outstanding contributions in their technical fields. Students will be able to interact with each other and sharpen their social skills and most importantly, they will be provided with an incredible experience that will foster their creativity, knowledge, leadership skills, and passion for the interdisciplinary application of technology and that too, completely free of cost.',
    imgStart: false,
    img: require('../../images/Technovation-Logo.png'),
    alt: 'About Us Image',
    darkText: true
};

export const homeObjTwo = {
    id: 'segments',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: 'Segments',
    headline: 'Stem (Master Coder)',
    description: 'Segment: Code Inclusion, Type: Submission based.'
        + " Learning a new language isn’t hard if you know where to start. This segment was created with the intention to help young programmers develop a better understanding of coding. Are you ready, future Master Coders, to experience a new side of programming?"
        + ' RULES:'
        + ' (1) Maximum number of participants from each school: 3.'
        + ' (2) Plagiarism of code will result in immediate disqualification of the participant.' 
        + ' (3) The provided code must be unaltered unless the instructions explicitly require the participants to change particular values or parameters.'
        + " (4) There is no size or memory limit to the participant's code." 
        + ' (5) Use of open-source libraries are allowed but they must be referenced in the code as well as the write-up.'
        + ' INSTRUCTIONS:'
        + ' (1) Few lines of code will be given to the participants.'
        + ' (2) Participants will have to use the lines of code given, to a create program of their own in 48 hours.' 
        + ' (3) Python 3 will be used as the programming language.'
        + ' (4) Participants will also be provided a text-document template with questions and will be required to provide a small write-up based on the questions such as the challenges they faced, how they generated their idea and how their code could be implemented in the real world upon further development.'
        + ' JUDGING CRITERIA: Creativity, Efficiency, Way of code usage and Contents of the write-up.'
        + ' *Participants will be provided with the method of submission at the start of the contest*',
    imgStart: true,
    img: require('../../images/Master-Coder.png'),
    alt: 'Master Coder Image',
    darkText: false
};

export const homeObjThree = {
    id: 'segments',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: '',
    headline: "Stem (Ace Designers')",
    description: 'Segment: 3D Modelling, Type - Submission-based.'
    + ' Future architects, engineers, and designers, prepare to experience the first taste of your future. The segment, “Ace Designers”, was created in order to allow young creative minds like yours to experience a new medium and allow your creations to take on a new form.'
    + ' RULES:'
    + ' (1) Maximum number of participants from each school: 3.'
    + ' (2) Participants are only allowed to submit a single model.'
    + ' (3) Participants will only be given 72 hours to complete the entire project and submit it.'
    + ' (4) The main file of the model needs to be submitted along with an Exported FBX version together with the textures.'
    + ' (5) A render of the model must also be submitted.'
    + ' (6) The following software are only allowed for modeling: Blender, Autodesk Maya, SketchUP.'
    + ' (7) Any TEXTURING software is allowed (if participants wish to use a different software to create textures).' 
    + ' (8) The maximum texture resolution is 4k.'
    + ' (9) The model MUST be UV unwrapped (for Blender, Maya, and SketchUP).'
    + ' (10) Downloaded models are not allowed; if caught, the involved participant(s) will be disqualified.'
    + ' (11) Low-Poly models are not allowed.'
    + ' (12) Screenshots of the progress of the model have to also be provided when asked for by the segment runners within appropriate deadlines through appropriate methods.'
    + ' INSTRUCTIONS:'
    + ' (1) Participants will be given a topic and need to make a model on the given topic.'
    + ' (2) Participants will be required to compress all the required files (check the rules for more information) as a ZIP/RAR file before submission (this ZIP file B needs to be renamed in the following format: Participant Name_School Name).'
    + ' (3) Participants using any Blueprints or sheets need to submit them (this will help the judges make informed decisions about the model; participants may wish to watermark their blueprints.)'
    + ' JUDGING CRITERIA: Overall Mesh quality Topology, Efficiency of UV maps, Photorealism of the render, Efficiency of the model (the amount of vertices, tri etc.)'
    + ' *Participants will be provided the method of submission at the start of the contest*',
    imgStart: false,
    img: require("../../images/Ace-Designers'.png"),
    alt: 'Ace Designers Image',
    darkText: true
};

export const homeObjFour = {
    id: 'segments',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: '',
    headline: 'Stem (GameJam)',
    description: 'Segment: Game Development, Type - Submission-based.'
    + ' Game developers work as a bridge between reality and fantasy as they create fantastical environments that allows the player to feel at home. Find yourself in the shoes of one as you participate for an exhilarating experience!'
    + ' RULES:'
    + ' (1) Maximum number of teams from each school: 3 (up to 3 students per team).'
    + ' (2) There are no restrictions on the platform used, i.e. participants will be permitted to use any game development platform (e.g. Unity) or make their own game development platform if they wish to.' 
    + ' (3) All references and third-party materials, such as characters used, must be open source and all links for the references must be provided on the submissions page.'
    + ' (4) Browser based games are not allowed 2D, 3D, Infinite (Procedurally Generated) games are allowed.'
    + ' (5) There are no restrictions on the genre of the game as long as it fits with the theme.'
    + ' (6) No 18+ content will be allowed in the game.'
    + ' (7) Plagiarism is prohibited and will be strictly dealt with.'
    + ' (8) Maximum duration for the games should be 30 minutes; unless it is an infinite game.'
    + ' (9) Failure to uphold the theme will result in disqualification.'
    + ' INSTRUCTIONS:'
    + ' (1) Participants will create a game based on a given theme.'
    + ' (2) Submissions must be made through itch.io and a GitHub repository containing the source code.'
    + ' (3) Participants will be given 72 hours after the theme announcement to make and submit their game, no extra time will be given for submissions.'
    + ' (4) Participants must also submit a 90-second trailer about the game.'
    + ' (5) The target OS for the game should be Windows 10/11. Mobile games and games for macOS are not allowed.'
    + ' JUDGING CRITERIA: Gameplay Elements, Intuitiveness, Level Design, Artistic Vision, Sound Design, Story, Content of Trailer'
    + ' *Participants will be provided with the method of submission at the start of the contest*',
    imgStart: true,
    img: require('../../images/GameJam.png'),
    alt: 'GameJam Image',
    darkText: false
};

export const homeObjFive = {
    id: 'segments',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: '',
    headline: 'Stem (The Perfect UI)',
    description: 'Segment Type: Front-end Web Development, Type - Submission-based.'
    + ' The user interface of a website plays a crucial role in the success of businesses in the 21st century. Frontend web developers, it is your time to show your skills of overwhelming a financial market!'
    + ' RULES:'
    + ' (1) Maximum number of participants from each school: 3.'
    + ' (2) Only HTML, CSS, and JavaScript may be used.'
    + ' (3) You must not minify your code.'
    + ' (4) No WordPress or Wix websites will be accepted.'
    + ' (5) CSS frameworks such as Tailwind or Bootstrap are not allowed.'
    + ' (6) The website has no official limit to how many web pages it can contain but the preferred amount is 6.'
    + ' (7) Any rule broken will result in immediate disqualification.'
    + ' (8) Usage of animations is not mandatory.'
    + ' (9) Screenshots of the progress of the website have to be given through the to-be-provided methods when asked for by the admins.'
    + ' INSTRUCTION:'
    + ' (1) Participants must create a front-end project for a topic given (for example, a service business, a hospital, or a university).' 
    + ' (2) Submission must be made through a GitHub repository AND a link from the hosted site.'
    + ' (3) Total time for creating the website will be 60 hours after the announcement of the topic.'
    + ' (4) GitHub repository should be submitted through the to-be provided methods and should be updated at least twice a day before submission of the website.'
    + ' (5) If boilerplate code is being used, a reference must be provided at the footer of the website.'
    + ' *Participants will be provided with the method of submission at the start of the contest*'
    + ' JUDGING CRITERIA: Responsiveness of the website, Choice of (font, color scheme, alignment, and sizing), Content of the website Ease of use by users, Organization of the code.'
    + ' *Code with comments will be favored more than those without them*',
    imgStart: false,
    img: require('../../images/The-Perfect-UI.png'),
    alt: 'About Us Image',
    darkText: true
};

export const homeObjSix = {
    id: 'segments',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: '',
    headline: 'Business and Recreation (Ingenious Geniuses)',
    description: 'Segment: Business Proposal, Type: Live.'
    + ' By being persuasive without being relentless, by being bold without being pretentious, you will need to learn how to hold onto more than just the attention of your audience and win this dynamic segment.'
    + ' RULES:'
    + ' (1) Participants are required to be present at their exact allocated time.'
    + ' (2) Failure to show up within 1 minute of the allocated time will result in immediate disqualification.'
    + ' (3) Participants must immediately notify the segment runner through appropriate discord channels if they are facing any network or technical issues and will hence be unable to show up.'
    + ' (4) Requests for time change will be dealt with on a case-by-case basis.'
    + ' (5) The business idea needs to be turned into a proposal in a PowerPoint presentation.'
    + ' (6) Failure to share a presentation, except due to technical difficulties, will result in a large deduction of points.'
    + ' (7) Although the ideas may be very innovative, the proposals are required to be practical. For example, a startup is highly unlikely to receive an initial investment of $10 million.'
    + ' (8) The participants are required to explain each and every detail in their proposed business plan to achieve higher points.'
    + ' (9) They may include the Source of finance, allocation of the factors of production, profitability, the revenue model, suitability of the business in the chosen region, their USP (if there is one), and the market condition.'
    + ' (10) Maximum number of participants from each school: 3.',
    imgStart: true,
    img: require('../../images/Ingenious-Geniuses.png'),
    alt: 'Ingenious Geniuses Image',
    darkText: false
};

export const homeObjSixSix = {
    id: 'segments',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: '',
    headline: '',
    description: 'INSTRUCTIONS:'
    + ' ROUND 1:'
    + ' (1) Participants will pitch a business proposal to judges live on Zoom.'
    + ' (2) Participants are required to create a PowerPoint presentation and use it to present their ideas during the pitch.'
    + ' (3) Participants should start working on their pitch as soon as they receive confirmation of their registration because they will be randomly allocated a particular time in the first two days to pitch their proposal and will not be given further time to prepare.'
    + ' (4) Participants will only be allowed to speak for a specific amount of time.'
    + ' (5) Further details about time constraints will be released before the competition.'
    + ' (6) There will be a Q/A session at the end of the presentation where participants may be asked questions by judges about their proposal.'
    + ' (7) Over the span of the competition, there will be representative members of the segment who will be there to help the participants with their proposals and keep a check on their progress through appropriate discord channels.'
    + ' (8) Participants are also required to submit their PowerPoint presentation through to-be-announced methods by the end of round 1.'
    + ' ROUND 2:'
    + ' (1) Qualified participants will move on to the next round which will be held on the third day of the event.'
    + ' (2) The participants will be given a situation and will have to present their proposals accordingly.'
    + ' (3) Further details about the second round will be released further in the competition.'
    + ' JUDGING CRITERIA: Critical thinking, Authenticity of the idea Innovation and creativity of the business idea, Presentation skills, Coherence in the answers to the questions by the panel, Choice of font, color scheme, alignment, and sizing in the PowerPoint',
    imgStart: false,
    img: require('../../images/Ingenious-Geniuses.png'),
    alt: 'Ingenious Geniuses Image',
    darkText: false
};

export const homeObjSeven = {
    id: 'segments',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: '',
    headline: 'Business and Recreation (Course Of A Discourse)',
    description: 'Segment: Debate, Type: Live.'
    + ' There is nothing that cannot be settled without words. Do you stand for or against the opinions of society? Take a stand. Debate it.'
    + ' INSTRUCTIONS:'
    + ' (1) Each round of debate will focus on a different motion (topic).'
    + ' (2) The motion will be disclosed 5 minutes prior to the beginning of the first speech.'
    + ' (3) During the 5- minute preparation time before the round, the participants may speak only to their partner.'
    + ' (4) The participants will learn their team’s position in a given round just before the motion is announced.'
    + ' (5) Participants will be divided to participate in groups of four teams to participate in a British Parliamentary (BP) round.'
    + ' (6) Two teams will represent the Government (in support of the motion) and two teams will represent the Opposition (opposed to the Government and the motion).'
    + ' (7) Here are the names of the teams and the individual roles:'
    + ' Opening Government (OG), Prime Minister & Deputy Prime Minister'
    + ' , Opening Opposition (OO) Leader & Deputy Leader of Opposition Closing Government (CG)'
    + ' , Member of Government & Government Whip Closing Opposition (CO)'
    + ' , Member of Opposition & Opposition Whip'
    + ' (8) The Government will open the debate, and the Opposition will deliver the final speech.'
    + ' (9) Each speaker can present one 2-minute speech.'
    + ' (10) The speeches will proceed in this order: Prime Minister -> Leader of Opposition -> Deputy Prime Minister -> Deputy Leader of Opposition -> Member of Government -> Member of Opposition -> Government Whip -> Opposition Whip.'
    + ' (11) All the rounds will be held through Zoom.'
    + ' There will be three stages in this competition:'
    + ' 1) The first round will be the qualifying round, where each speaker will get two minutes of speaking time. In this round, there will be no rebuttals.'
    + ' 2) The second round will be the semi-finals. Each speaker will get two minutes speaking time, and one minute for rebuttals.'
    + ' 3) The final round will contain the best debaters. In this round, there will be two minutes for speaking and one minute for rebuttals.'
    + ' *Maximum number of participants from each school: 3.',
    imgStart: false,
    img: require('../../images/Course-of-a-Discourse.png'),
    alt: 'Course of a Discourse Image',
    darkText: true
};

export const homeObjEight = {
    id: 'segments',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: '',
    headline: 'Business and Recreation (Collaging Words)',
    description: 'Segment: Poetry, Type: Submission-based.'
    + ' Words that are preserved in the right way. Outlive their creators by centuries. Join us, as we immortalize what we wish to say at the moment, on papers that will live on with our own legacy.'
    + ' RULES:'
    + ' (1) Maximum number of participants from each school: 3.'
    + ' (2) The pages or articles will be given at random.'
    + ' (3) Rhyming scheme is not required.'
    + ' (4) Appropriate use of words is encouraged.'
    + ' (5) Plagiarized work will be disqualified immediately.'
    + ' (6) Any rule broken will result in immediate disqualification.'
    + ' INSTRUCTIONS:'
    + ' (1) The contestants will be given a page from a book or an article generated by a given website.'
    + ' (2) They will block out words (similar to blacking out the words), in order to come up with their very own poetry or a story.'
    + ' (3) Participants must use the given website.'
    + ' (4) Submission should be done through the given method by sharing the link to the finished work or taking a screenshot of the poem.'
    + ' JUDGING CRITERIA: Vividness of the idea of the poetry, Relevance to the topic of the poem, Proper usage of words',
    imgStart: true,
    img: require('../../images/Collaging-Words.png'),
    alt: 'Collaging Words Image',
    darkText: false
};

export const homeObjNine = {
    id: 'segments',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: '',
    headline: 'Business and Recreation (Poster Picasso)',
    description: 'Segment: Digital Arts, Type: Submission-based.'
    + ' For the creative minds that struggle with traditional art forms, and for the artists who do not wish to go back to a world without an “undo” button, may the works of art you create become masterpieces.'
    + ' RULES:'
    + ' (1) Maximum number of participants from each school: 3.'
    + ' (2) Plagiarism will result in immediate disqualification.'
    + ' (3) Participants can make use of any application of their choice.'
    + ' (4) Participants must include all the given elements in their poster.'
    + ' (5) Participants may wish to make use of royalty-free third-party elements.'
    + ' (6) They should, however, reference the original creators of the elements through the to-be provided methods'
    + ' INSTRUCTIONS:'
    + ' (1) Participants will be given the topic and the elements on the day the contest starts.'
    + ' (2) Participants will use the elements given to make a poster in 72 hours.'
    + ' (3) Screenshots of the progress of the website have to be provided through the to-be-provided methods when asked for by the admins.'
    + ' *Participants will be provided the method of submission of the file(s) at the start of the contest.*'
    + ' JUDGING CRITERIA: Creativity, Style, Looks, Description, Use of elements',
    imgStart: false,
    img: require('../../images/Poster-Picasso.png'),
    alt: 'Poster Picasso Image',
    darkText: true
};

export const homeObjTen = {
    id: 'segments',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: '',
    headline: 'ESports (Valorant)',
    description: 'Type: Live. On a stage where competition is present, combine your style and knowledge. You have 13 rounds to use skillful gunplay and tactical prowess to assault and protect your side. Think more quickly than your opponent if you want to live, as you only get one life per round. Take on opponents and prevail!'
    + ' RULES:'
    + ' (1) Maximum number of teams from each school: 3 (5 members + 1 substitute).'
    + ' (2) Both teams must join the indicated discord voice channels for tossing, map bans, and server selection.'
    + ' (3) Beware of the players you register as we won’t be allowing random unregistered players to play.'
    + ' (4) Important announcements and updates will be on our official discord server. Hence, participants are required to join the Server and take their roles.'
    + ' (5) Teaming among participants is strictly prohibited, if participants are caught teaming they will be immediately disqualified.'
    + ' INSTRUCTIONS:'
    + ' (1) The event will be a competitive 5v5 valorant tournament.'
    + ' (2) The servers will be decided in accordance to both teams’ pings.'
    + ' (3) The brackets will be created in random order and not in accordance to ranks.',
    imgStart: true,
    img: require('../../images/Valorant.png'),
    alt: 'Valorant Image',
    darkText: false
};

export const homeObjEleven = {
    id: 'segments',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: '',
    headline: 'ESports (Fortnite)',
    description: 'Type: Live. Collaborate with allies to survive in an open-world environment by battling other players or fortifying your cover. The last team standing gets to take the Victory Royale their way.'
    + ' INSTRUCTIONS:'
    + ' (1) Maximum number of participants from each school: 3.'
    + ' (2) Round 1: Participants will compete in the SOLO game mode.'
    + ' (3) There will be 3 games.'
    + ' (4) The 10 players with the highest point total will move to Round 2.'
    + ' (5) Round 2: The player will be competing in zone wars.'
    + ' (6) The final two contestants with the greatest points total will advance to the finals.'
    + ' (7) Day 3 the final 2 players will be competing in the box fight system of points.'
    + ' SCORING SYSTEM:' 
    + ' (1) Participants in the Top 5 will earn 4 points.'
    + ' (2) Participants in the Top 10 will earn 3 points.'
    + ' (3) Every 3 kills will earn the participants 2 points.'
    + ' (4) Participants in Top 20 will earn one point.',
    imgStart: false,
    img: require('../../images/Fortnite.png'),
    alt: 'Fortnite Image',
    darkText: true
};

export const homeObjTwelve = {
    id: 'speakers',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: 'Speakers',
    headline: 'Here are the lists of our keynote speakers',
    description: 'STEPHEN TURBAN: Presenting one of the most talented personalities in the tech field, Stephen Turban, who is one of our honorable keynote speakers in CGS Technovation 2023. Stephen will be sharing all of his bits of advice and achievements throughout the event. Some information about him: Stephen Turban is the co-founder and director of Lumiere Education, an initiative to make high-quality research opportunities easily available for students all around the globe. Except for this helpful approach, his intellectual prowess has allowed him to be a Ph.D. student in Organizational Behavior at Harvard Business School and earn a Bachelor of Science (B.S.) Statistics from Harvard University.',
    imgStart: true,
    img: require('../../images/Speakers.png'),
    alt: 'Speakers Image',
    darkText: false
};

export const homeObjThirteen = {
    id: 'speakers',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: 'Speakers',
    headline: '',
    description: 'FAHIM TAJWAR: Meet another brilliant and gifted individual, Fahim Tajwar. Fahim Tajwar is one of the most remarkably talented students and our second honorable keynote speaker at CGS Technovation 2023. He is going to share more about his achievements and help you learn tips and tricks for research. Some more information about him: Fahim Tajwar is one of the brightest talented individuals, having earned a Bachelor of Science (BS.) in Mathematics and Computer Science from Stanford University and currently pursuing a Master of Science (MS) in Computer Science from the same University. He is underlining amazing grades with a degree of perfectionism!',
    imgStart: false,
    img: require('../../images/Speakers.png'),
    alt: 'Speakers Image',
    darkText: true
};

export const homeObjFourteen = {
    id: 'speakers',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: 'Speakers',
    headline: '',
    description: "RAJIB DAS: Introducing another ingenious individual, Rajib Das, who has taken an astute initiative to digitize Bangladesh's transportation system and is our third honorable keynote speaker at the CGS Technovation 2023. Sharing the inspiration behind such a creative idea, he is also going to teach us some strategies during the event. Further Information about him: Rajib Das is the founder and CEO of Loop Freight. Loop Freight is committed to digitizing the logistics ecosystem to benefit shippers and carriers across Bangladesh. Apart from this lucrative goal, he attained his education in Bachelor of Commerce (B.Com), Supply Chain Management, Economics & Entrepreneurship at The University of British Columbia which has allowed him to gain much knowledge in completing his goals and ambitions.",
    imgStart: true,
    img: require('../../images/Speakers.png'),
    alt: 'Speakers Image',
    darkText: false
};

export const homeObjFifteen = {
    id: 'speakers',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: 'Speakers',
    headline: '',
    description: "SALMAN SAAFI: Finally, we would like to introduce Salman Saafi! Salman Saafi is a very versatile person who has created a medium to help people in small businesses all over Bangladesh. He will be the final keynote speaker at CGS Technovation 2023 to share the story behind his accomplishments and his creative project, Bonik. Some more information about him - Founder and CEO of Bonik, Salman Saafi has created a simple portal for people who are passionate and interested in starting a small business in minutes. As a result of his academic achievements, he received a Bachelor of Science, Electrical and Electronic Engineering degree from the International Islamic University Chittagong. Apart from that, he is also a very engaging photographer who loves to capture the most wonderful moments of his life.",
    imgStart: false,
    img: require('../../images/Speakers.png'),
    alt: 'Speakers Image',
    darkText: true
};

export const homeObjSixteen = {
    id: 'partner',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topline: 'Partner',
    headline: 'All about our partner',
    description: "All this wouldn’t be possible without our partner HEXA, so what’s Hexa? And let’s know more about them: Hexa is here to bring all your imagination to reality! The company is building an Ed-tech platform to improve the educational experience of over 50 million students worldwide studying under the International British Curriculum. It exists to make International Education more affordable and personalized for students who deserve to get much more than what they are paying for right now! Hexa partners with your school to digitize the entire 0/A-Level curriculum to make your learning more effortless! As you use their platform, their cutting-edge technology analyzes your behavior and study patterns to create a highly personalized learning experience. In short, Hexa offers you both highly-quality premium content and learning resources prepared in partnership with your school to ensure you learn exactly the way you like at your own pace! Acing your board exam is just the tip of the iceberg in your entire educational journey, and Hexa doesn't want to leave you clueless when you are done dominating those exams. It will introduce an entire ecosystem of products to connect you to the top 1% of students studying at the institutions you aspire to be in and working at the best companies in the entire world. To keep it simple, Hexa is revolutionizing your educational experience so that you can achieve what you are truly capable of and that is - to become the Top 1%.",
    imgStart: true,
    img: require('../../images/Partner.png'),
    alt: 'Partner Image',
    darkText: false
};

export const homeObjSeventeen = {
    id: 'faq',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topline: 'FAQs',
    headline: '',
    description: '(1) Is CGS Technovation an online event? Ans: Yes! It is a 4-day long online event featuring amazing keynote speakers and talented competitors!'
    + ' (2) Will there be any fees required to participate? Ans: No, the event is completely free of cost so no type of fee is required in order to participate'
    + ' (3) Can a student participate in more than one segment? Ans: Yes, a participant can register for up to 2 segments. Students can, however, participate only in one of the live segments because of the risk of time-clash.',
    imgStart: false,
    img: require('../../images/FAQ.png'),
    alt: 'About Us Image',
    darkText: true
};