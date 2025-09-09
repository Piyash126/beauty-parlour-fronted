import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import coverImg from "../../../../assets/items/Mehndi Design.jpg";
import useService from "../../../hooks/useService";
import Cover from "../../../shared/cover/Cover";
import ServiceItems from "../serviceItems/ServiceItems";

const AllServices = () => {
  const categories = ["skin", "hair", "makeup", "spa", "nails"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  //   const [tabIndex, setTabIndex] = useState(0);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [service] = useService();
  const skin = service.filter((item) => item.category === "skin");
  const hair = service.filter((item) => item.category === "hair");
  const makeup = service.filter((item) => item.category === "makeup");
  const spa = service.filter((item) => item.category === "spa");
  const nails = service.filter((item) => item.category === "nails");

  return (
    <div>
      <Cover img={coverImg} title="Appointment for Book"></Cover>
      <div className="mt-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-20 text-center">
          Our Awesome Services<span className="text-pink-500">Area </span>
        </h2>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Skin</Tab>
            <Tab>Hair</Tab>
            <Tab>Makeup</Tab>
            <Tab>Spa</Tab>
            <Tab>Nails</Tab>
          </TabList>
          <TabPanel>
            <ServiceItems items={skin}></ServiceItems>
          </TabPanel>
          <TabPanel>
            <ServiceItems items={hair}></ServiceItems>
          </TabPanel>
          <TabPanel>
            <ServiceItems items={makeup}></ServiceItems>
          </TabPanel>
          <TabPanel>
            <ServiceItems items={spa}></ServiceItems>
          </TabPanel>
          <TabPanel>
            <ServiceItems items={nails}></ServiceItems>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default AllServices;
