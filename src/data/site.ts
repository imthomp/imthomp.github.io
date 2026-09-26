export const site = {
	name: "Isaac Thompson",
	tagline:
		"Studying why language technology fails underrepresented communities, and how to fix it.",
	blurb:
		"I'm a PhD student in Computer Science at Brigham Young University, advised by Dr. Eric Ringger in the MATRIX Lab. My research focuses on low-resource machine translation, multilingual NLP, model interpretability, and cross-lingual evaluation.",
	email: "isaac@imthomp.com",
	location: "Provo, UT",
	links: {
		github: "https://github.com/imthomp",
		scholar: "https://scholar.google.com/citations?user=M2GUmCkAAAAJ",
		linkedin: "https://www.linkedin.com/in/imthomp/",
	},
	orgs: {
		matrix: "https://matrix.byu.edu",
		bhroberts: "https://bhroberts.org",
	},
	researchInterests: [
		{ label: "Low-Resource MT", color: "red" },
		{ label: "Interpretability", color: "green" },
		{ label: "Multilingual NLP", color: "blue" },
		{ label: "Cross-Lingual Eval", color: "yellow" },
	] as const,
};
