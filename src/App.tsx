

import "./App.css";
import Title from "./component/Title";
import Nav from "./component/Nav";
import Box from "./component/Box";
import Drawer from "./component/Drawer";
import { Link } from "react-router-dom";
import { useState } from "react";

function App() {

  return (
    <>
      <header id="header">
        <div className="container">

          <Box className="header">
            <Drawer>
              <Title level={2} text="ComponentList" />

              <ul className="listWrap">
                <li>
                  <Link to="/">
                    Component
                  </Link>
                </li>
              </ul>

            </Drawer>
            {/* <Title level={1} text="Component" /> */}
          </Box>
        </div>
      </header >

      <main id="main">
        <Box className="componentWrap">
          <Title level={3} text="ButtonComponent" />

        </Box>
      </main>

























      {/* <Box className="box">
        <Title className="h2" level={2} text="Nav Component" />
        <Nav />
      </Box>

      <Box className="box">
        <Title className="h2" level={2} text="Drawer Component" />
        <Drawer />
      </Box> */}


    </>

















    /* <h1>component</h1>

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



     </div> */


  );
}

export default App;
