import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
   title: 'Văn Đạt & Phương Thảo',
   description:
      'Một câu chuyện tình yêu vượt thời gian. Hãy cùng chúng tôi kỷ niệm hành trình tuyệt vời này và chuẩn bị cho một chương mới với ngày cưới đầy yêu thương.',
   keywords: 'Văn Đạt, Phương Thảo, vandat, phuongthao, wedding, đám cưới, 20/10/2024',
   author: 'Nguyễn Văn Đạt',
   viewport: 'width=device-width, initial-scale=1',
   charset: 'UTF-8',
   robots: 'index, follow',
   themeColor: '#ffffff',
   og: {
      title: 'Văn Đạt & Phương Thảo',
      type: 'website',
      url: 'https://yourwebsite.com',
      image: 'https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/88b6d6c5cb36ccd3725c92f0e0b3d89b.jpeg',
      description:
         'Một câu chuyện tình yêu vượt thời gian. Hãy cùng chúng tôi kỷ niệm hành trình tuyệt vời này và chuẩn bị cho một chương mới với ngày cưới đầy yêu thương.',
   },
   twitter: {
      card: 'summary_large_image',
      site: '@yourtwitterhandle',
      creator: '@yourtwitterhandle',
      title: 'Văn Đạt & Phương Thảo',
      description:
         'Một câu chuyện tình yêu vượt thời gian. Hãy cùng chúng tôi kỷ niệm hành trình tuyệt vời này và chuẩn bị cho một chương mới với ngày cưới đầy yêu thương.',
      image: 'https://cdn.biihappy.com/ziiweb/website/61990349db8f76231c132068/88b6d6c5cb36ccd3725c92f0e0b3d89b.jpeg',
   },
   canonical: 'https://yourwebsite.com',
   manifest: '/',
   favicon: '/favicon.ico',
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={inter.className}>{children}</body>
      </html>
   );
}
