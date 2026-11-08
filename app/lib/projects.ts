import type { Locale } from "./site";

type Localized<T> = Record<Locale, T>;

export type ProjectSection = {
	title: Localized<string>;
	items: Localized<string[]>;
};

export type ProjectDetail = {
	kind: string;
	description: string;
	overview: string;
	sections: { title: string; items: string[] }[];
};

export type Project = {
	slug: string;
	title: string;
	date: string;
	year: string;
	image: string;
	imageWidth: number;
	imageHeight: number;
	imageAlt: string;
	url?: string;
	repository: string;
	primaryLabel: "live" | "package";
	technologies: string[];
	detail: Localized<ProjectDetail>;
};

const bricsSections: ProjectSection[] = [
	{
		title: {
			en: "What's inside",
			pt: "O que tem dentro",
			es: "Qué incluye",
			zh: "内容亮点",
		},
		items: {
			en: [
				"Side-by-side comparison of all BRICS members.",
				"Population, area, density, languages and currencies in one view.",
				"Geographic distribution and global metrics.",
				"Live data from REST Countries API v5.",
				"Responsive, accessible interface built with ShadCN and TanStack Query.",
			],
			pt: [
				"Comparação lado a lado entre todos os membros do BRICS.",
				"População, área, densidade, idiomas e moedas em uma única visão.",
				"Distribuição geográfica e métricas globais.",
				"Dados em tempo real da REST Countries API v5.",
				"Interface responsiva e acessível construída com ShadCN e TanStack Query.",
			],
			es: [
				"Comparación lado a lado de todos los miembros del BRICS.",
				"Población, superficie, densidad, idiomas y monedas en una sola vista.",
				"Distribución geográfica y métricas globales.",
				"Datos en vivo de la REST Countries API v5.",
				"Interfaz responsiva y accesible construida con ShadCN y TanStack Query.",
			],
			zh: [
				"所有金砖国家的并排对比。",
				"在一处查看人口、面积、密度、语言和货币。",
				"地理分布与全球指标。",
				"来自 REST Countries API v5 的实时数据。",
				"使用 ShadCN 和 TanStack Query 构建的响应式、无障碍界面。",
			],
		},
	},
];

const flutterSections: ProjectSection[] = [
	{
		title: {
			en: "Component library",
			pt: "Biblioteca de componentes",
			es: "Biblioteca de componentes",
			zh: "组件库",
		},
		items: {
			en: [
				"Inputs: Textfield, Checkbox, Radio, Slider, Switch, Dropdown and TimePicker.",
				"Navigation: TabBar and BottomBar.",
				"Interaction: Button, BigButton, TextButton and IconButton.",
				"Feedback: LinearProgressIndicator and AlertDialog.",
			],
			pt: [
				"Entrada: Textfield, Checkbox, Radio, Slider, Switch, Dropdown e TimePicker.",
				"Navegação: TabBar e BottomBar.",
				"Interação: Button, BigButton, TextButton e IconButton.",
				"Feedback: LinearProgressIndicator e AlertDialog.",
			],
			es: [
				"Entrada: Textfield, Checkbox, Radio, Slider, Switch, Dropdown y TimePicker.",
				"Navegación: TabBar y BottomBar.",
				"Interacción: Button, BigButton, TextButton e IconButton.",
				"Feedback: LinearProgressIndicator y AlertDialog.",
			],
			zh: [
				"输入：Textfield、Checkbox、Radio、Slider、Switch、Dropdown 和 TimePicker。",
				"导航：TabBar 和 BottomBar。",
				"交互：Button、BigButton、TextButton 和 IconButton。",
				"反馈：LinearProgressIndicator 和 AlertDialog。",
			],
		},
	},
	{
		title: {
			en: "Accessibility first",
			pt: "Acessibilidade primeiro",
			es: "Accesibilidad primero",
			zh: "无障碍优先",
		},
		items: {
			en: [
				"Touch-tolerant widgets with configurable size, padding and colors.",
				"Presets for fine motor, severe motor and aphasia-oriented configurations.",
				"Draggable floating assistive button that opens the runtime configuration UI.",
			],
			pt: [
				"Widgets tolerantes ao toque com tamanho, espaçamento e cores configuráveis.",
				"Presets para dificuldade motora fina, motora severa e configurações orientadas a afasia.",
				"Botão assistivo flutuante e arrastável que abre a UI de configuração em tempo de execução.",
			],
			es: [
				"Widgets tolerantes al toque con tamaño, espaciado y colores configurables.",
				"Presets para dificultad motora fina, motora severa y configuraciones orientadas a la afasia.",
				"Botón asistivo flotante y arrastrable que abre la UI de configuración en tiempo de ejecución.",
			],
			zh: [
				"可配置尺寸、内边距和颜色的触控友好组件。",
				"面向精细动作、严重运动障碍和失语症的预设配置。",
				"可拖动的悬浮辅助按钮，用于打开运行时配置界面。",
			],
		},
	},
	{
		title: {
			en: "Runtime control",
			pt: "Controle em tempo de execução",
			es: "Control en tiempo de ejecución",
			zh: "运行时控制",
		},
		items: {
			en: [
				"Configuration through UserComponentProvider.",
				"Optional haptic and visual feedback.",
				"Optional activation delay with pressDelay.",
			],
			pt: [
				"Configuração através do UserComponentProvider.",
				"Feedback háptico e visual opcionais.",
				"Atraso de ativação opcional com pressDelay.",
			],
			es: [
				"Configuración mediante UserComponentProvider.",
				"Feedback háptico y visual opcionales.",
				"Retardo de activación opcional con pressDelay.",
			],
			zh: [
				"通过 UserComponentProvider 进行配置。",
				"可选的触觉与视觉反馈。",
				"通过 pressDelay 设置可选的激活延迟。",
			],
		},
	},
];

function makeDetail(
	sections: ProjectSection[],
	detail: Localized<Omit<ProjectDetail, "sections">>,
): Localized<ProjectDetail> {
	return {
		en: {
			...detail.en,
			sections: sections.map((section) => ({
				title: section.title.en,
				items: section.items.en,
			})),
		},
		pt: {
			...detail.pt,
			sections: sections.map((section) => ({
				title: section.title.pt,
				items: section.items.pt,
			})),
		},
		es: {
			...detail.es,
			sections: sections.map((section) => ({
				title: section.title.es,
				items: section.items.es,
			})),
		},
		zh: {
			...detail.zh,
			sections: sections.map((section) => ({
				title: section.title.zh,
				items: section.items.zh,
			})),
		},
	};
}

export const projects: Project[] = [
	{
		slug: "bricsinsight",
		title: "BricsInsights",
		date: "2026-06-18",
		year: "2026",
		image: "/projects/bricsinsight.png",
		imageWidth: 1899,
		imageHeight: 956,
		imageAlt:
			"BricsInsights dashboard showing comparative data visualisations for BRICS countries",
		url: "https://thiagodalsanto.github.io/bricsinsight/",
		repository: "thiagodalsanto/bricsinsight",
		primaryLabel: "live",
		technologies: [
			"TypeScript",
			"React",
			"Vite",
			"Tailwind CSS",
			"ShadCN",
			"TanStack Query",
			"Lucide React",
			"REST Countries",
		],
		detail: makeDetail(bricsSections, {
			en: {
				kind: "Open source · Personal project",
				description:
					"An interactive dashboard that analyzes data from the BRICS members using visualizations and global metrics.",
				overview:
					"BRICSInsights is a modern dashboard built with React 19, Vite, TypeScript, ShadCN and Recharts, consuming data from the REST Countries API v5. The application offers in-depth analysis of the population, area, density, languages, currencies and geographic distribution of BRICS countries.",
			},
			pt: {
				kind: "Open source · Projeto pessoal",
				description:
					"Um dashboard interativo que analisa dados dos países do BRICS por meio de visualizações e métricas globais.",
				overview:
					"O BRICSInsights é um dashboard moderno construído com React 19, Vite, TypeScript, ShadCN e Recharts, consumindo dados da REST Countries API v5. A aplicação oferece análises aprofundadas sobre população, área, densidade, idiomas, moedas e distribuição geográfica dos países do BRICS.",
			},
			es: {
				kind: "Open source · Proyecto personal",
				description:
					"Un panel interactivo que analiza datos de los países del BRICS mediante visualizaciones y métricas globales.",
				overview:
					"BRICSInsights es un panel moderno construido con React 19, Vite, TypeScript, ShadCN y Recharts, que consume datos de la REST Countries API v5. La aplicación ofrece un análisis detallado de la población, superficie, densidad, idiomas, monedas y distribución geográfica de los países del BRICS.",
			},
			zh: {
				kind: "开源 · 个人项目",
				description:
					"一个交互式数据仪表盘，通过可视化和全球指标分析金砖国家数据。",
				overview:
					"BRICSInsights 是一个使用 React 19、Vite、TypeScript、ShadCN 和 Recharts 构建的现代仪表盘，数据来自 REST Countries API v5。应用深入分析金砖国家的人口、面积、密度、语言、货币和地理分布。",
			},
		}),
	},
	{
		slug: "flutter-assistive-ui-components",
		title: "Flutter Assistive UI Components",
		date: "2026-04-01",
		year: "2026",
		image: "/projects/flutter-assistive-ui.png",
		imageWidth: 939,
		imageHeight: 668,
		imageAlt:
			"Flutter Assistive UI Components package preview showing accessibility-focused widgets",
		url: "https://pub.dev/packages/flutter_assistive_ui_components",
		repository: "thiagodalsanto/flutter_assistive_ui_components",
		primaryLabel: "package",
		technologies: ["Flutter", "Provider", "Shared Preferences"],
		detail: makeDetail(flutterSections, {
			en: {
				kind: "Open source · Flutter package",
				description:
					"A Flutter package of assistive components for interfaces used by people with fine motor difficulties.",
				overview:
					"A Flutter package of assistive components for interfaces used by people with fine motor difficulties. It provides larger, more touch-tolerant widgets that can be configured at runtime, with support for haptic feedback, visual feedback, activation delay and accessibility presets.",
			},
			pt: {
				kind: "Open source · Pacote Flutter",
				description:
					"Um pacote Flutter de componentes assistivos para interfaces usadas por pessoas com dificuldades motoras finas.",
				overview:
					"Um pacote Flutter de componentes assistivos para interfaces usadas por pessoas com dificuldades motoras finas. Oferece widgets maiores e mais tolerantes ao toque, configuráveis em tempo de execução, com suporte a feedback háptico, feedback visual, atraso de ativação e presets de acessibilidade.",
			},
			es: {
				kind: "Open source · Paquete Flutter",
				description:
					"Un paquete Flutter de componentes asistivos para interfaces utilizadas por personas con dificultades motoras finas.",
				overview:
					"Un paquete Flutter de componentes asistivos para interfaces utilizadas por personas con dificultades motoras finas. Ofrece widgets más grandes y tolerantes al toque, configurables en tiempo de ejecución, con soporte para feedback háptico, feedback visual, retardo de activación y presets de accesibilidad.",
			},
			zh: {
				kind: "开源 · Flutter 包",
				description:
					"一个 Flutter 辅助组件包，面向精细动作困难用户所使用的界面。",
				overview:
					"一个 Flutter 辅助组件包，面向精细动作困难用户所使用的界面。它提供更大、更易触控的组件，可在运行时配置，并支持触觉反馈、视觉反馈、激活延迟和无障碍预设。",
			},
		}),
	},
];

export function getProject(slug: string): Project | undefined {
	return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string): Project {
	const index = projects.findIndex((project) => project.slug === slug);
	return projects[(index + 1) % projects.length];
}
