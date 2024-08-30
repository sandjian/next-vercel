import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
import {ClerkProvider} from '@clerk/nextjs'
 
export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
          },
          variables: {
            colorText: "#545454",
            colorPrimary: "#0E78F9",
            colorBackground: "#fff",
            colorInputBackground: "#252A41",
            colorInputText: "#545454",
          },
        }}
      >
      <html lang="en">
        <body className={`${inter.className} h-screen antialiased`}>
          {children}
        </body>
      </html>

    </ClerkProvider>
  );
}
