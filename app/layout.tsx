import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cn } from "~/lib/utils";
import "~/styles/globals.css";

const fontSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const fontMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Ecommerce v0",
	description: "A minimal ecommerce application",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					fontSans.variable,
					fontMono.variable,
					"antialiased scroll-smooth",
				)}
			>
				{children}
			</body>
		</html>
	);
}
