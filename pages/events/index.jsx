import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy-data';

import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  function defineEventsHandler(year, month) {
    const fullpath = `/events/${year}/${month}`;
    router.push(fullpath);
  }

  return (
    <>
      <EventsSearch onSearch={defineEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export default AllEventsPage;
