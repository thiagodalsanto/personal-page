import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Thiago Dal Santo — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

async function font(file: string): Promise<ArrayBuffer> {
	const data = await readFile(join(process.cwd(), "public/fonts", file));
	return data.buffer.slice(
		data.byteOffset,
		data.byteOffset + data.byteLength,
	) as ArrayBuffer;
}

export default async function Image() {
	const display = await font("CalSans-SemiBold.ttf");

	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					position: "relative",
					overflow: "hidden",
					backgroundColor: "#F2EFE7",
					color: "#111110",
					padding: "58px 64px 54px",
				}}
			>
				<div
					style={{
						position: "absolute",
						right: "-180px",
						top: "-230px",
						width: "620px",
						height: "620px",
						borderRadius: "9999px",
						backgroundColor: "#C22F0E",
						opacity: 0.95,
					}}
				/>
				<div
					style={{
						position: "absolute",
						right: "120px",
						top: "90px",
						width: "250px",
						height: "250px",
						borderRadius: "9999px",
						border: "1px solid rgba(242,239,231,0.55)",
					}}
				/>

				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						borderBottom: "1px solid rgba(17,17,16,0.22)",
						paddingBottom: "18px",
						fontFamily: "sans-serif",
						fontSize: "17px",
						letterSpacing: "3px",
					}}
				>
					<span>TDS — PORTFOLIO 2026</span>
					<span>THIAGODALSANTO.PT</span>
				</div>

				<div
					style={{
						display: "flex",
						flexDirection: "column",
						marginTop: "auto",
					}}
				>
					<span
						style={{
							fontFamily: "Display",
							fontSize: "152px",
							lineHeight: 0.8,
							letterSpacing: "-8px",
						}}
					>
						THIAGO
					</span>
					<span
						style={{
							fontFamily: "Display",
							fontSize: "152px",
							lineHeight: 0.8,
							letterSpacing: "-8px",
							marginLeft: "120px",
						}}
					>
						DAL SANTO
					</span>
				</div>

				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "flex-end",
						marginTop: "34px",
						borderTop: "1px solid rgba(17,17,16,0.22)",
						paddingTop: "22px",
					}}
				>
					<span
						style={{
							fontFamily: "sans-serif",
							fontSize: "36px",
						}}
					>
						Software Engineer — Web & Mobile
					</span>
					<span
						style={{
							fontFamily: "sans-serif",
							fontSize: "16px",
							letterSpacing: "2px",
							color: "#C22F0E",
						}}
					>
						REACT · NEXT.JS · FLUTTER
					</span>
				</div>
			</div>
		),
		{
			...size,
			fonts: [
				{ name: "Display", data: display, style: "normal", weight: 600 },
			],
		},
	);
}
