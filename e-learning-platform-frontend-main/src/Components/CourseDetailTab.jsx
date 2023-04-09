import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ClassForum from './ClassForum';
import Classwork from './Classwork';
import CourseContent from './CourseContent';
import CourseOverview from './CourseOverview';


function CourseDetailTab() {

    const [key, setKey] = useState('overview');

  return (
    <Tabs
      defaultActiveKey="overview"
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="overview" title={`Course Overview`}>
        <CourseOverview />
      </Tab>
      <Tab eventKey="content" title="Course Content">
        <CourseContent />
      </Tab>
      <Tab eventKey="classwork" title="Classwork">
        <Classwork />
      </Tab>
      <Tab eventKey="forum" title="Class Forum">
        <ClassForum />
      </Tab>
    </Tabs>
  );
}

export default CourseDetailTab;