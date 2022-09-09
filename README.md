
![Animation](https://user-images.githubusercontent.com/99739515/189138222-195e59d7-a3ce-4ddc-ba6a-d8a1396bcbd9.gif)

### In this project i used

🛠 NextJs Auth

🛠 Next-i18next library for translation

🛠 Fetch Api

🛠 Dynamic Routes

🛠 Material Ui

🛠 React Hooks

🛠 State Component Logic

🛠 Next Router

🛠 Server Side Rendering

🛠 Static Side Generation

### NextJs Auth kullanmak için;

```
yarn add next-auth

└── pages
    └── api
        ├── auth
        |   └── [...nextauth].js
        
```
- Github sayfasından developer settingten token al.
- Bu tokenları .env.local sayfasında tut.
- Diğer ilgili kısımlar için ise  [buradan devam ediniz](https://next-auth.js.org/getting-started/example) 


### NextJs ile birlikte dil seçenegi kullanmak için 
```
yarn add next-i18next

.
└── public
    └── locales
        ├── en
        |   └── common.json
        └── de
            └── common.json
 {
    "nav1" : "Home",
    "nav2" : "Characters",
    "nav3" : "Detaıls"
}

{
    "nav1" : "Anasayfa",
    "nav2" : "Karakterler",
    "nav3" : "Detaylar"
}

    const router = useRouter();
    const { locale } = router;
    const t = locale === "tr" ? tr : en;

    const handleChange = (e) => {
    const locale = e.target.value;
    router.push("/", "/", { locale });
  };

   <Button>
   {t.nav1} 
   buraya değişken localesde değişken olarak atadığımız değerleri atıyoruz.
   </Button>

```

### How to make dynamic page with nextJs 

```
  <Link href="/posts/[id]" as={`/posts/${card.id}`}>
  burada post folderın altındaki id dynamic page ine gönderiyor.
  her gelen id ye göre fetch işlemi yapıyor. Tıklandığında ilgili [id].js sayfasına atıyor.
```

```
export const getServerSideProps = async (context) => {
  const data = await fetch(
    `https://rickandmortyapi.com/api/character/${context.params.id}`
  );
  const res = await data.json();
  return {
    props: {
      res,
    },
  };
};
```



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

