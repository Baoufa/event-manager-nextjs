import { useRouter } from 'next/router';
import Head from 'next/head';

import { getAllEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';

function AllEventsPage(props) {
  const events = props.events;
  const router = useRouter();

  function defineEventsHandler(year, month) {
    const fullpath = `/events/${year}/${month}`;
    router.push(fullpath);
  }

  return (
    <>
    <Head>
      <title>All Events</title>
      <meta name='description' content='Find a lot of great events' />
    </Head>
      <EventsSearch onSearch={defineEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export const getStaticProps = async ctx => {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 1800,
  };
};

export default AllEventsPage;
