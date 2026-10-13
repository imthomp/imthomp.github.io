export interface Publication {
	title: string;
	description: string;
	role: "Sole author" | "First author" | "Co-author";
	venue: string;
	status: "published" | "in-progress";
	code?: string;
	url?: string;
}

// Array order is display order within each status group.
export const publications: Publication[] = [
	{
		title: "AmanaMT: Translation Direction Predicts Automatic Metric Reliability",
		description:
			"Benchmarked 10 MT evaluation metrics across 730,748 segments and 33 languages. Translation direction is the strongest predictor of metric–human agreement (η² = 0.31), far ahead of morphological type (η² = 0.07). Also identifies a Simpson's Paradox in multi-year evaluation.",
		role: "Sole author",
		venue: "WMT 2026 @ EMNLP",
		status: "published",
		url: "https://www2.statmt.org/wmt26/pdf/2026.wmt-1.42.pdf",
		code: "https://github.com/byu-matrix-lab/amana-mt",
	},
	{
		title: "Bringing Mapudungun into the Modern MT Ecosystem",
		description:
			"Fine-tuned NLLB-200 on Mapudungun–Spanish across eight tokenization strategies. A novel Morfessor-VC segmentation matches a 5× larger model on arn→es (43.2 vs. 42.9 chrF++).",
		role: "First author",
		venue: "AmericasNLP 2026 @ ACL",
		status: "published",
		url: "https://aclanthology.org/2026.americasnlp-6.16/",
		code: "https://github.com/byu-matrix-lab/mapudungun-nllb",
	},
	{
		title: "Drawing Legs on a Snake: Handling Out-of-Vocabulary Characters in Pretrained Chinese MT",
		description:
			"Found that pretrained MT models can't represent many Chinese characters, and showed that a new embedding per missing character fixes names and ordinary words while radical-based decomposition never helps; proposed a dictionary-plus-pronunciation initialization for characters with no training data.",
		role: "First author",
		venue: "In preparation",
		status: "in-progress",
		code: "https://github.com/imthomp/subchar-mt",
	},
	{
		title: "Span F1 Misreads Cross-Lingual Retrieval",
		description:
			"Multilingual needle-in-a-haystack tests score correct English answers as wrong. This artifact explains most of the non-Latin-script gap. It also manufactures cross-script transfer from fine-tuning and reshuffles MLQA rankings across 33 models in lm-evaluation-harness. We propose script-aware scoring as a drop-in fix.",
		role: "First author",
		venue: "In preparation",
		status: "in-progress",
		code: "https://github.com/imthomp/needle-in-a-haystack",
	},
	{
		title: "Lost in Translation or Lost in the Model?",
		description:
			"Do multilingual LLMs flatten culturally untranslatable words, like Portuguese saudade, toward their English glosses? A matched-pair study of 105 untranslatable concepts across 28 languages and 7 models finds they don't. Untranslatables stay consistently farther from English than exact translations through the models' middle layers, and this holds after removing language-identity effects.",
		role: "First author",
		venue: "In preparation",
		status: "in-progress",
		code: "https://github.com/imthomp/lost-in-the-model",
	},
	{
		title: "Donor or Seed? Separating Donor Effects from Training Noise in Low-Resource Translation",
		description:
			"Shows that comparing donor languages for low-resource NLLB fine-tuning on single runs mostly measures seed noise. A donor × seed variance decomposition across six targets finds donor effects are real but small, and similarity proxies fail to predict them.",
		role: "Co-author",
		venue: "In preparation",
		status: "in-progress",
		code: "https://github.com/byu-matrix-lab/ladle",
	},
	{
		title: "Speech Registers for Multimodal MT",
		description:
			"Applies source-token registration (Qu et al. 2025) to improve zero-shot performance across all four {S,T}×{S,T} MT directions; benchmarks NLLB-200 (3.3B), fine-tuned NLLB (600M), and Whisper across 420 directions and 8 language pairs.",
		role: "Co-author",
		venue: "In preparation",
		status: "in-progress",
		code: "https://github.com/byu-matrix-lab/project-speech-registers",
	},
];

export const published = publications.filter((p) => p.status === "published");
export const workingPapers = publications.filter((p) => p.status === "in-progress");
