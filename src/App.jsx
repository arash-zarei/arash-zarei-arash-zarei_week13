import { useState } from "react";
import Content from "./components/content/Content";
import Header from "./components/header/Header";

const contentData = [
  {
    id: 1,
    title: "Title 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 2,
    title: "Title 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 3,
    title: "Title 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 4,
    title: "Title 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

function App() {
  const defaultActiveTab = Number(localStorage.getItem("tab"));
  const [activeTab, setActiveTab] = useState(defaultActiveTab || 1);

  const tabChangeHandler = (tabId) => {
    setActiveTab(tabId);
    localStorage.setItem("tab", tabId.toString());
  };

  const contentFind = contentData.find((content) => content.id === activeTab);
  return (
    <>
      <Header activeTab={activeTab} setActiveTab={tabChangeHandler} />
      <Content
        title={contentFind.title}
        description={contentFind.description}
      />
    </>
  );
}

export default App;
