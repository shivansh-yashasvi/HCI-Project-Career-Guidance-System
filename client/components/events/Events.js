import Link from 'next/link';
import { Container, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import EventSingle from './EventSingle';

const Events = () => {
   // allEventsItems
   const allEventsItems = useSelector(state => state.events.allEvents);
   // status
   const status = useSelector(state => state.events.status)
   // loading
   if (status === 'pending') {
      return <Container className='my-5 text-center'>
         <Spinner animation="grow" />
      </Container>
   }
   return (
      <>
         <section className="event__area pt-115">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="section__title-wrapper-2 text-center mb-60">
                        <span className="section__title-pre-2">Featured Courses</span>
                        <h3 className="section__title-2">Join our upcoming event</h3>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-xxl-12">
                     {
                        allEventsItems.map(event => <EventSingle key={event?._id} event={event} />)
                     }
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Events;