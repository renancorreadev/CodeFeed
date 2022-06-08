import "./styles/global.css";

import React from "react";

import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/renancorreadev.png",
        name: "Renan Correa",
        role: "Desenvolvedor",
      },
      content: [
        { type: "mutant", content: "Senior" },
        { type: "paragraph", content: "Hi Guys!" },
        {
          type: "paragraph",
          content:
            "Lorem labore ipsum anim ullamco deserunt. Minim eiusmod adipisicing dolor consectetur officia sint excepteur. Mollit mollit aliquip exercitation ipsum incididunt minim laboris exercitation nostrud ",
        },
        { type: "link", linkContent: "🎸 Jane MCAvoy." },
      ],
      publishedAt: new Date("2022-05-03 08:13:25"),
    },
    {
      id: 2,
      author: {
        avatarUrl:
          "https://img.freepik.com/fotos-gratis/mulher-bonita-na-rua_23-2147654236.jpg",
        name: "Diane Guifreu",
        role: "Desenvolvedora",
      },
      content: [
        { type: "mutant", content: "Junior" },
        { type: "paragraph", content: "Hi Guys!" },
        {
          type: "paragraph",
          content:
            "Lorem labore ipsum anim ullamco deserunt. Minim eiusmod adipisicing dolor consectetur officia sint excepteur. Mollit mollit aliquip exercitation ipsum incididunt minim laboris exercitation nostrud ",
        },
        { type: "link", linkContent: "🎸 Jane MCAvoy." },
      ],
      publishedAt: new Date("2022-03-03 08:13:25"),
    },
    {
      id: 3,
      author: {
        avatarUrl:
          "https://blog.unis.edu.br/hubfs/como-esta-o-mercado-para-um-analista-e-desenvolvedor-de-sistemas.png",
        name: "Anderson Correa",
        role: "Desenvolvedor",
      },
      content: [
        { type: "mutant", content: "Mestre" },
        { type: "paragraph", content: "Hi Guys!" },
        {
          type: "paragraph",
          content:
            "Lorem labore ipsum anim ullamco deserunt. Minim eiusmod adipisicing dolor consectetur officia sint excepteur. Mollit mollit aliquip exercitation ipsum incididunt minim laboris exercitation nostrud ",
        },
        { type: "link", linkContent: "🎸 Jane MCAvoy." },
      ],
      publishedAt: new Date("2022-05-13 08:13:25"),
    },
  ];
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                //@ts-ignore
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
