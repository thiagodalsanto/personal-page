import type { Locale } from "./site";

type Localized<T> = Record<Locale, T>;

export type ProjectDetail = {
	kind: string;
	description: string;
	overview: string;
	sections: { title: string; items: string[] }[];
};

export type Project = {
	slug: string;
	title: string;
	status: "ongoing" | "shipped";
	image?: string;
	imageWidth?: number;
	imageHeight?: number;
	imageAlt?: string;
	url?: string;
	repository?: string;
	primaryLabel?: "live" | "package";
	technologies: string[];
	detail: Localized<ProjectDetail>;
};

export const projects: Project[] = [
	{
		slug: "the-verdict",
		title: "The Verdict",
		status: "ongoing",
		technologies: [
			"TypeScript",
			"Next.js",
			"LLM orchestration",
			"Source verification",
			"Automated publishing",
		],
		detail: {
			en: {
				kind: "Independent product · Ongoing",
				description:
					"A fully automated newspaper where AI reports, verifies and publishes the news — with every claim traced back to its source.",
				overview:
					"The Verdict is a newsroom that runs without a newsroom. An automated editorial pipeline gathers information, writes the story, checks each claim against independent sources and publishes only what survives verification. Readers can open any article and see where every fact came from, why it was trusted and what changed along the way.",
				sections: [
					{
						title: "An automated newsroom",
						items: [
							"Continuous monitoring of primary sources, wires and public records.",
							"AI drafting with an editorial structure, not template filling.",
							"Automatic publication across site, feed and newsletter.",
							"Every stage leaves a record a human can check.",
						],
					},
					{
						title: "Verification, not guesswork",
						items: [
							"Each claim carries its sources, original quotes and the reasoning behind it.",
							"Cross-checks against independent coverage before a story ships.",
							"Confidence and disagreement are shown, never hidden.",
							"Corrections stay attached to the article instead of disappearing.",
						],
					},
					{
						title: "Trust the reader can audit",
						items: [
							"Sources, evidence and method are one click away.",
							"Transparent timestamps show how a story evolved.",
							"No engagement bait and no anonymous claims.",
							"Built to be audited by readers, not just believed.",
						],
					},
				],
			},
			pt: {
				kind: "Produto independente · Em andamento",
				description:
					"Um jornal totalmente automatizado em que a IA apura, verifica e publica as notícias — com cada afirmação rastreada até sua fonte.",
				overview:
					"The Verdict é uma redação que funciona sem redação. Um pipeline editorial automatizado coleta informações, escreve a matéria, confere cada afirmação contra fontes independentes e publica apenas o que sobrevive à verificação. O leitor pode abrir qualquer artigo e ver de onde veio cada fato, por que ele foi considerado confiável e o que mudou no caminho.",
				sections: [
					{
						title: "Uma redação automatizada",
						items: [
							"Monitoramento contínuo de fontes primárias, agências e registros públicos.",
							"Redação por IA com estrutura editorial, não preenchimento de template.",
							"Publicação automática no site, no feed e na newsletter.",
							"Cada etapa deixa um registro que pode ser conferido por humanos.",
						],
					},
					{
						title: "Verificação, não achismo",
						items: [
							"Cada afirmação carrega suas fontes, trechos originais e o raciocínio por trás dela.",
							"Checagem cruzada com coberturas independentes antes de publicar.",
							"Nível de confiança e divergências ficam visíveis, nunca escondidos.",
							"Correções permanecem ligadas ao artigo em vez de desaparecerem.",
						],
					},
					{
						title: "Confiança que o leitor pode auditar",
						items: [
							"Fontes, evidências e método a um clique de distância.",
							"Carimbos de tempo transparentes mostram como a matéria evoluiu.",
							"Sem caça-clique e sem afirmações anônimas.",
							"Feito para ser auditado pelos leitores, não apenas acreditado.",
						],
					},
				],
			},
			es: {
				kind: "Producto independiente · En curso",
				description:
					"Un periódico totalmente automatizado en el que la IA investiga, verifica y publica las noticias, con cada afirmación rastreada hasta su fuente.",
				overview:
					"The Verdict es una redacción que funciona sin redacción. Un pipeline editorial automatizado recopila información, escribe la noticia, comprueba cada afirmación contra fuentes independientes y publica solo lo que supera la verificación. El lector puede abrir cualquier artículo y ver de dónde salió cada dato, por qué se consideró fiable y qué cambió por el camino.",
				sections: [
					{
						title: "Una redacción automatizada",
						items: [
							"Monitorización continua de fuentes primarias, agencias y registros públicos.",
							"Redacción con IA y estructura editorial, no relleno de plantillas.",
							"Publicación automática en web, feed y newsletter.",
							"Cada etapa deja un registro verificable por personas.",
						],
					},
					{
						title: "Verificación, no intuición",
						items: [
							"Cada afirmación incluye sus fuentes, citas originales y el razonamiento que hay detrás.",
							"Contraste con coberturas independientes antes de publicar.",
							"La confianza y las discrepancias se muestran, nunca se ocultan.",
							"Las correcciones quedan ligadas al artículo en lugar de desaparecer.",
						],
					},
					{
						title: "Confianza auditable",
						items: [
							"Fuentes, evidencia y método a un clic.",
							"Marcas de tiempo transparentes muestran cómo evolucionó la noticia.",
							"Sin anzuelos de clics ni afirmaciones anónimas.",
							"Diseñado para que los lectores lo auditen, no solo para que confíen.",
						],
					},
				],
			},
			zh: {
				kind: "独立产品 · 进行中",
				description:
					"一份完全自动化的报纸：由 AI 采写、核实并发布新闻，每一条结论都可追溯到来源。",
				overview:
					"The Verdict 是一个没有编辑部的编辑部。自动化编辑流水线收集信息、撰写报道、用独立来源逐条核实，只发布经得起验证的内容。读者可以打开任何一篇文章，看到每个事实来自哪里、为什么被采信，以及过程中发生了什么变化。",
				sections: [
					{
						title: "自动化编辑部",
						items: [
							"持续监控一手来源、通讯社与公开记录。",
							"AI 按编辑结构写作，而不是套用模板。",
							"自动发布到网站、订阅源与邮件通讯。",
							"每个环节都留下可供人工核查的记录。",
						],
					},
					{
						title: "核实，而非猜测",
						items: [
							"每条结论都附带来源、原文引用与推理过程。",
							"发布前与独立报道交叉核对。",
							"置信度与分歧公开展示，绝不隐藏。",
							"更正会保留在文章上，而不是悄悄消失。",
						],
					},
					{
						title: "可供读者审计的信任",
						items: [
							"来源、证据与方法一键可达。",
							"透明的时间戳展示报道如何演变。",
							"没有标题党，没有匿名断言。",
							"为读者审计而建，而不只是让人相信。",
						],
					},
				],
			},
		},
	},
	{
		slug: "easy-translation",
		title: "EasyTranslation",
		status: "ongoing",
		technologies: [
			"TypeScript",
			"Speech-to-text",
			"Prediction models",
			"Voice preservation",
			"Real-time audio",
		],
		detail: {
			en: {
				kind: "Independent product · Ongoing",
				description:
					"A real-time translation engine for calls that keeps each speaker's voice — timbre, tone and delivery — intact.",
				overview:
					"EasyTranslation translates speech while people are still talking. Prediction models anticipate the next words, voice models re-speak the translation in the speaker's own timbre and tone, and the result lands back in the call with almost no delay. The goal is simple: two people who do not share a language should still sound like themselves, not like a dubbing track.",
				sections: [
					{
						title: "Real time by design",
						items: [
							"Streaming speech recognition instead of waiting for a full sentence.",
							"Prediction models draft ahead so translation keeps pace with the call.",
							"A low-latency audio pipeline built for live conversation.",
							"Graceful degradation when the network or a model lags.",
						],
					},
					{
						title: "The voice stays yours",
						items: [
							"Keeps the original speaker's timbre, pitch and tone.",
							"Prosody and delivery carried into the translated audio.",
							"Per-speaker voice profiles for meetings and calls.",
							"Works across languages without flattening personality.",
						],
					},
					{
						title: "Built for conversation",
						items: [
							"Turn-taking that respects interruptions and pauses.",
							"Context carried across sentences, not word by word.",
							"Session transcripts to review after the call.",
							"Designed for meetings, support calls and interviews.",
						],
					},
				],
			},
			pt: {
				kind: "Produto independente · Em andamento",
				description:
					"Um motor de tradução em tempo real para chamadas que preserva a voz de cada pessoa — timbre, tom e entonação.",
				overview:
					"EasyTranslation traduz a fala enquanto as pessoas ainda estão falando. Modelos de predição antecipam as próximas palavras, modelos de voz revestem a tradução com o timbre e o tom do próprio falante, e o resultado chega à chamada quase sem atraso. O objetivo é simples: duas pessoas que não compartilham um idioma devem soar como elas mesmas, não como uma dublagem.",
				sections: [
					{
						title: "Tempo real por princípio",
						items: [
							"Reconhecimento de fala em streaming, sem esperar a frase inteira.",
							"Modelos de predição adiantam o rascunho para acompanhar a conversa.",
							"Pipeline de áudio de baixa latência feito para fala ao vivo.",
							"Degradação controlada quando a rede ou um modelo atrasa.",
						],
					},
					{
						title: "A voz continua sendo sua",
						items: [
							"Mantém timbre, altura e tom do falante original.",
							"Prosódia e entonação preservadas no áudio traduzido.",
							"Perfis de voz por participante para reuniões e chamadas.",
							"Funciona entre idiomas sem apagar a personalidade.",
						],
					},
					{
						title: "Feito para conversa",
						items: [
							"Turnos de fala que respeitam interrupções e pausas.",
							"Contexto entre frases, não tradução palavra por palavra.",
							"Transcrição da sessão para revisar depois da chamada.",
							"Pensado para reuniões, suporte e entrevistas.",
						],
					},
				],
			},
			es: {
				kind: "Producto independiente · En curso",
				description:
					"Un motor de traducción en tiempo real para llamadas que conserva la voz de cada persona: timbre, tono y entonación.",
				overview:
					"EasyTranslation traduce el habla mientras las personas siguen hablando. Los modelos de predicción anticipan las siguientes palabras, los modelos de voz revisten la traducción con el timbre y el tono del propio hablante, y el resultado llega a la llamada casi sin retardo. El objetivo es simple: dos personas que no comparten idioma deben sonar como ellas mismas, no como un doblaje.",
				sections: [
					{
						title: "Tiempo real por diseño",
						items: [
							"Reconocimiento de voz en streaming, sin esperar la frase completa.",
							"Modelos de predicción redactan por delante para seguir la llamada.",
							"Pipeline de audio de baja latencia pensado para conversación en vivo.",
							"Degradación controlada cuando la red o un modelo se retrasan.",
						],
					},
					{
						title: "La voz sigue siendo tuya",
						items: [
							"Mantiene el timbre, la altura y el tono del hablante original.",
							"Prosodia y entonación trasladadas al audio traducido.",
							"Perfiles de voz por participante para reuniones y llamadas.",
							"Funciona entre idiomas sin aplanar la personalidad.",
						],
					},
					{
						title: "Hecho para conversar",
						items: [
							"Turnos de palabra que respetan interrupciones y pausas.",
							"Contexto entre frases, no traducción palabra por palabra.",
							"Transcripción de la sesión para revisar tras la llamada.",
							"Pensado para reuniones, soporte y entrevistas.",
						],
					},
				],
			},
			zh: {
				kind: "独立产品 · 进行中",
				description:
					"面向通话的实时翻译引擎，保留每位说话者的音色、语气与表达方式。",
				overview:
					"EasyTranslation 在人们还在说话时就完成翻译。预测模型提前推断接下来的内容，语音模型用说话者自己的音色和语气重新生成译文，结果几乎无延迟地回到通话中。目标很简单：两个语言不同的人，听起来仍应像他们自己，而不是像一条配音。",
				sections: [
					{
						title: "为实时而生",
						items: [
							"流式语音识别，无需等待整句结束。",
							"预测模型提前起草，让翻译跟上通话节奏。",
							"面向实时对话的低延迟音频链路。",
							"网络或模型延迟时的可控降级。",
						],
					},
					{
						title: "保留原本的声音",
						items: [
							"保留原说话者的音色、音高与语气。",
							"韵律与表达方式延续到译文音频中。",
							"为会议和通话提供每位参与者的声音档案。",
							"跨语言工作，也不会抹平个性。",
						],
					},
					{
						title: "为对话而建",
						items: [
							"尊重打断与停顿的轮次控制。",
							"跨句携带上下文，而非逐词翻译。",
							"通话后可回看会话转录。",
							"为会议、客服与面试场景设计。",
						],
					},
				],
			},
		},
	},
];

export function getProject(slug: string): Project | undefined {
	return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string): Project {
	const index = projects.findIndex((project) => project.slug === slug);
	return projects[(index + 1) % projects.length];
}
