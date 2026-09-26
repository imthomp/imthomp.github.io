export interface Education {
	school: string;
	location: string;
	degree: string;
	dates: string;
	details: string[];
}

export const education: Education[] = [
	{
		school: "Brigham Young University",
		location: "Provo, UT",
		degree: "Doctor of Philosophy in Computer Science",
		dates: "September 2025 – est. August 2030",
		details: [
			"4.00 GPA",
			"Advisor: Dr. Eric Ringger",
			"Focus: Low-Resource Machine Translation and Multilingual NLP",
		],
	},
	{
		school: "Brigham Young University",
		location: "Provo, UT",
		degree: "Bachelor of Science in Computer Science and Spanish",
		dates: "August 2022 – April 2025",
		details: ["3.89 GPA", "Minors in Mathematics, Statistics, and Translation & Localization"],
	},
];

export interface ExperienceEntry {
	org: string;
	orgUrl?: string;
	location: string;
	role: string;
	dates: string;
	bullets: string[];
}

export const experience: ExperienceEntry[] = [
	{
		org: "BYU Machine Translation Lab (MATRIX)",
		orgUrl: "https://matrix.byu.edu",
		location: "Provo, UT",
		role: "Research Assistant",
		dates: "February 2025 – Present",
		bullets: [
			"Conducting research across multiple active projects; see Research for details.",
			"Running large-scale multilingual training experiments on BYU's supercomputer (SLURM), managing multi-GPU jobs up to 3.3B parameters and coordinating scheduling across concurrent projects.",
			"Building automated evaluation pipelines (Python, HF Transformers) computing BLEU, chrF, COMET, and BERTScore across multilingual outputs, enabling comparison across language pairs.",
			"Led a 12-language MQM project supervising 5+ researchers, producing human quality-estimation training data for COMETQE models spanning typologically diverse, low-resource language pairs.",
		],
	},
	{
		org: "B. H. Roberts Foundation",
		orgUrl: "https://bhroberts.org",
		location: "Holladay, UT",
		role: "MT Research Engineer Intern",
		dates: "August 2023 – April 2024, May 2026 – Present",
		bullets: [
			"Designing a scalable multilingual MT pipeline for Latter-day Saint scholarly content across 20–40 languages, integrating domain-adapted models and custom evaluation to ensure translation quality.",
			"Developing terminology-aware MT workflows and domain-adapted evaluation methods for religious text, building glossaries and style guides to enforce consistency across languages at scale.",
			"Building publication-ready translation infrastructure and terminology databases for independent operational use, enabling the foundation to evaluate and deploy MT systems without technical support.",
		],
	},
	{
		org: "BYU Translation Research Group",
		location: "Provo, UT",
		role: "Senior Student Developer",
		dates: "June 2024 – August 2025",
		bullets: [
			"Led development of ataexamcorpus.net, a 10,000-entry ATA certification exam corpus (Python, SQL, AWS), enabling the first large-scale computational study of professional translation exam patterns.",
			"Redesigned database schema and migrated 10,000+ items into AWS RDS (EC2, Elastic IP); built a researcher-facing access interface enabling programmatic and web-based corpus queries.",
			"Coordinated a 5-member team of linguists, translators, and engineers to align corpus design across technical and non-technical stakeholders, producing a schema adopted for all subsequent releases.",
		],
	},
	{
		org: "BYU Computer Science Department",
		orgUrl: "https://cs.byu.edu",
		location: "Provo, UT",
		role: "Teaching Assistant, CS 111 & CS 270",
		dates: "January 2023 – August 2023, September 2025 – April 2026",
		bullets: [
			"Supported 100+ students as TA for Introduction to Machine Learning (CS 270): perceptrons, k-fold CV, decision trees, backpropagation, regression.",
			"Supported 100+ students in Introduction to Computer Science (CS 111) covering Python fundamentals, debugging, and algorithmic thinking through office hours, lab sessions, and grading.",
			"Collaborated with 5+ TAs to improve courses and grading workflows for future cohorts.",
		],
	},
];

export const skills = {
	technical: [
		"Python (PyTorch, HuggingFace, PEFT/LoRA, Pandas, NumPy)",
		"SLURM / HPC cluster computing",
		"Git",
		"Bash / Linux",
		"LaTeX",
		"R",
		"SQL",
		"AWS (RDS, EC2)",
		"Claude Code",
	],
	languages: [
		"Native English",
		"Fluent Spanish",
		"Fluent Portuguese",
		"Basic Mandarin Chinese",
	],
	research: [
		"Low-Resource MT",
		"Multimodal & Speech MT",
		"Linguistically Informed NLP",
		"LLM Fine-Tuning & Evaluation",
		"Model Interpretability",
	],
};

export const coursework = {
	upcoming: ["AI Harness Engineering (CS 401R)", "Readings in Machine Translation (CS 704R)"],
	graduate: [
		"Evaluation Metrics for Language Models (CS 501R)",
		"Transformers in NLP (CS 574)",
		"Advanced Machine Translation (CS 601R)",
		"AI Model Interpretability (CS 601R)",
		"Advanced Deep Learning (CS 674)",
		"Readings in Prosocial Language Models (CS 704R)",
	],
	undergraduate: [
		"Intro to Machine Learning (CS 270)",
		"Deep Learning (CS 474)",
		"Intro to Machine Translation (CS 479)",
		"full BS CS curriculum",
	],
};
