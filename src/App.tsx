import React, { useEffect, useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import Input from "./component/Input";
import Select from "./component/Select";
import Breadcrumb from "./component/Breadcrumb";
import Tab from "./component/Tab";
import Card from "./component/Card";
import Title from "./component/Title";
import Button from "./component/Button";







function App() {















  const option = [
    {
      value: 'apple',
      name: '사과'
    },
    {
      value: 'banana',
      name: '바나나'
    },
    {
      value: 'orange',
      name: '오렌지'
    }
  ]

  /*
  [
      {
          "id": 0,
          "title": "TAB1",
          "description": "CONTENT01"
      },
      {
          "id": 1,
          "title": "TAB2",
          "description": "CONTENT02"
      },
      {
          "id": 2,
          "title": "TAB3",
          "description": "CONTENT03"
      },
      {
          "id": 3,
          "title": "TAB4",
          "description": "CONTENT04"
      },
      {
          "id": 4,
          "title": "TAB5",
          "description": "CONTENT05"
      }
  ]
  
  */

  const tabData = [
    {
      id: 0,
      title: 'TAB1',
      description: 'CONTENT01'
    },
    {
      id: 1,
      title: 'TAB2',
      description: 'CONTENT02'
    },
    {
      id: 2,
      title: 'TAB3',
      description: 'CONTENT03'
    },
    {
      id: 3,
      title: 'TAB4',
      description: 'CONTENT04'
    },
    {
      id: 4,
      title: 'TAB5',
      description: 'CONTENT05'
    },
  ]




  const [currentPath, setCurrentPath] = useState<string>('/');

  const handlePathChange = (newPath: string) => {
    setCurrentPath(newPath);
  };






  const [cardList, setCardList] = useState<any[]>([]);
  useEffect(() => {
    fetch("/data/cardData.json")
      .then((res) => res.json())
      .then((result) => setCardList(result));

  }, []);

  return (

    <BrowserRouter>
      <h1>component</h1>

      <div id="wrap">

        <div className="box">
          <h2>Input</h2>
          <Input
            blind="blind"
            id="id1"
            label="label"
            name="name"
            type="search"
            placeholder="placeholder" />
        </div>

        <div className="box">
          <h2>Input</h2>
          <Input
            blind="blind"
            id="id2"
            label="label1"
            name="name"
            type="checkbox" />
          <Input
            blind="blind"
            id="id3"
            label="label2"
            name="name"
            type="checkbox" />
          <Input
            blind="blind"
            id="id4"
            label="label3"
            name="name"
            type="checkbox" />
        </div>

        <div className="box">
          <h2>Select</h2>
          <Select
            blind="blind"
            value="value"
            option={option}
            name="name"
            id="select" />
        </div>

        <div className="box">
          <h2>Breadcrumb</h2>
          <Breadcrumb path={currentPath.split('/')} />
        </div>

        <div className="box">
          <h2>Tab</h2>
          <Tab tabData={tabData} />
        </div>

        <div className="box">
          <h2>Card</h2>
          {
            cardList.map((cardList) => {
              return (
                <Card
                  key={cardList.id}
                  tag={cardList.tag}
                  imageAlt={cardList.imageAlt}
                  imageSrc={cardList.imageSrc}
                  title={cardList.title}
                  desc={cardList.desc}
                />
              );
            })
          }
        </div>

        <div className="box">
          <h2>Title</h2>
          <Title h1="h1" h2="h2" h3="h3" h4="h4" h5="h5" h6="h6" />
        </div>

        <div className="box">
          <h2>Button</h2>
          <Button text="button" onClick={() => { alert('클릭'); }} disabled={false} />
        </div>



      </div>
    </BrowserRouter>

  );
}

export default App;
