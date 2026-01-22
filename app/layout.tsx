export const metadata = {
  title: 'Hello World - Next.js',
  description: 'A simple Hello World app with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
