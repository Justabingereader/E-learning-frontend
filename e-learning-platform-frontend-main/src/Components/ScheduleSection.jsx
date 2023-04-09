import React, { useState }from 'react'
import {Tab, Tabs} from 'react-bootstrap';
import Calendar from './Calendar';
import UpcomingSection from './UpcomingSection';

export default function ScheduleSection() {
    const [key, setKey] = useState('calendar');
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="calendar" title="My Calendar">
        <Calendar />
      </Tab>
      <Tab eventKey="events" title="Upcoming Events">
        <UpcomingSection />
      </Tab>
    </Tabs>
  )
}
