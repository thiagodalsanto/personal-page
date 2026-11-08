import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					backgroundColor: "#111110",
					position: "relative",
				}}
			>
				<div
					style={{
						position: "absolute",
						width: "150px",
						height: "150px",
						borderRadius: "9999px",
						backgroundColor: "#C22F0E",
					}}
				/>
				<div
					style={{
						position: "relative",
						width: "84px",
						height: "84px",
						display: "flex",
					}}
				>
					<div
						style={{
							position: "absolute",
							left: "40px",
							top: "0px",
							width: "4px",
							height: "84px",
							backgroundColor: "#F2EFE7",
						}}
					/>
					<div
						style={{
							position: "absolute",
							top: "40px",
							left: "0px",
							height: "4px",
							width: "84px",
							backgroundColor: "#F2EFE7",
						}}
					/>
					<div
						style={{
							position: "absolute",
							left: "10px",
							top: "10px",
							width: "64px",
							height: "64px",
							border: "4px solid #F2EFE7",
							borderRadius: "9999px",
						}}
					/>
				</div>
			</div>
		),
		size,
	);
}
