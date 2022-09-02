This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Automatic Setup
`
yarn create next-app
`
- githubtan cektiğimiz repoyu localde calıstırmak için n
` npm install , npm run dev `

### Routing
- Pages'in altındaki tüm compentler otomatik olarak route lanır. React taki gibi bir 3rd party library e gerek yoktur. Kullanmak için Link i import edip "Link href="address" şeklinde href e adres verilerek kullanılabilir.

- Pages ler nextJs te bestPractice küçük harfle componentler ise büyük harfle başlar.

### Head
- import Head from "next/head" seklinde alarak ilgili componentin altında bu şekilde kullanılabilir.
```
<Head> 
<title> title here </title>
<meta> meta here </meta>
<link rel="icon" href="/favicon.ico" />
</Head>
```

### Public
- Public in altına genellikle assetleri koyuyoruz. Burada href ile sadece "/" şeklinde adres vererek kolaylıkla import edebiliriz. 

### Styling
- global css sadece _app.js e import edilir.
- Home.module.css 
` import styles from "../styles/Home.module.css" `
- modullerin classını verme 
` <div className={styles.main}>

- build in support => .css , .scss, .sass, CSS IN JS (styled jsx)
```
function HiThere() {
  return <p style={{ color: 'red' }}>hi there</p>
}

export default HiThere
```

```
  <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
```

#### Components 
- Componentleri React te src nin altına folder acıp o şekilde yazıyorduk. Fakta nextJs te ana dizine component folder ı açıp onun içine yazıyoruz.

###  Layout Component
- Layoutu tüm sayfalarda görünmesini istediğimiz componentleri arasına children olarak geçeriz.
```
// components/layout.js

import Navbar from './navbar'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
```

