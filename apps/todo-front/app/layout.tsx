import RootStyleRegistry from './emotion';
import Link from 'next/link';
import { AppShell, Footer, Group, Header, Text } from "@mantine/core";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <head />
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}