export interface Publication {
	title: string;
	description: string;
	role: "First author" | "Co-author";
	venue: string;
	status: "published" | "in-progress";
	code?: string;
	url?: string;
}

export const publications: Publication[] = [
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
		title: "Lost in Translation or Lost in the Model?",
		description:
			"A mechanistic study of cultural bias in multilingual LLMs. A matched-pair metric spanning 105 untranslatable concepts, 28 languages, and 4 models shows cultural concepts flatten toward English in a phase-specific, causally steerable subspace.",
		role: "First author",
		venue: "Seeking venue",
		status: "in-progress",
		code: "https://github.com/imthomp/lost-in-the-model",
	},
	{
		title: "Lies, Damned Lies, and N-Grams",
		description:
			"Benchmarked 10 MT evaluation metrics across 707k segments and 31 languages. Translation direction × morphological type (η² = 0.72) predicts metric reliability, attributing two failure modes to domain mismatch and Simpson's Paradox.",
		role: "First author",
		venue: "Seeking venue",
		status: "in-progress",
		code: "https://github.com/imthomp/multilingual-mqm-benchmark",
	},
	{
		title: "“Drawing Legs on a Snake”",
		description:
			"Identified a systematic BLEU inflation artifact in sub-character Chinese MT across 9 tokenization schemes and 2 pretrained models, confirmed across three evaluation paradigms (COMET, LLM-as-judge, bootstrap significance testing).",
		role: "First author",
		venue: "Seeking venue",
		status: "in-progress",
		code: "https://github.com/imthomp/subchar-mt",
	},
	{
		title: "Needles Without Borders",
		description:
			"A cross-lingual needle-in-a-haystack evaluation across 8 languages and 5 models. English SFT fails to transfer retrieval to non-Latin-script languages due to answer-span illegibility, supported by five-type needle ablation and GQA-corrected LoRA weight-delta analysis.",
		role: "First author",
		venue: "Seeking venue",
		status: "in-progress",
		code: "https://github.com/imthomp/needle-in-a-haystack",
	},
	{
		title: "Speech Registers for Multimodal MT",
		description:
			"Applies source-token registration to improve zero-shot performance across all four {S,T}×{S,T} MT directions; benchmarks NLLB-200 (3.3B), fine-tuned NLLB (600M), and Whisper across 420 directions and 8 language pairs.",
		role: "Co-author",
		venue: "Seeking venue",
		status: "in-progress",
		code: "https://github.com/byu-matrix-lab/project-speech-registers",
	},
	{
		title: "LADLE: LoRA Angle-Driven Language Ensemble",
		description:
			"Uses LoRA weight-angle distances to select helper languages for NLLB-1.3B fine-tuning targeting Chuukese and Guaraní; achieves +12.9 spBLEU over zero-shot, outperforming model soups (Wortsman et al.).",
		role: "Co-author",
		venue: "Seeking venue",
		status: "in-progress",
		code: "https://github.com/byu-matrix-lab/ladle",
	},
];
