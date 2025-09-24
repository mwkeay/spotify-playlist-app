import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";

// Standard font
const interSans = Inter({
	variable: "--font-inter-sans",
	subsets: ["latin"],
});

// Numeric font
const openSans = Open_Sans({
	variable: "--font-open-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Spotify Playlist App",
	description: "Doing a Spotify web app properly this time",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${interSans.variable} ${openSans.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
