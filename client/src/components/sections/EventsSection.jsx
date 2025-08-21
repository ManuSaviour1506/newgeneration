import React, { useState, useEffect } from "react";
import EventCard from "../ui/EventCard";
import SkeletonCard from "../ui/SkeletonCard";
import { fetchEvents } from "../../api/apiService";

function EventsSection() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null); // State for the modal

  useEffect(() => {
    const getEvents = async () => {
      setLoading(true);
      try {
        const eventData = await fetchEvents();
        setEvents(eventData.slice(0, 4));
      } catch (error) {
        console.error("Failed to load events");
      } finally {
        setLoading(false);
      }
    };

    getEvents();
  }, []);

  const openModal = (event) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);

  return (
    <section
      id="events"
      className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-100 to-pink-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-blue-900 mb-16 drop-shadow-lg font-bubblegum">
          Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} className="h-96" /> // Increased height
            ))
          ) : events.length > 0 ? (
            events.map((event) => (
              <div key={event._id} onClick={() => openModal(event)}>
                <EventCard
                  eventName={event.eventName}
                  eventDate={event.eventDate}
                  imageUrl={event.imageUrl}
                />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-4">
              No upcoming Achievements found.
            </p>
          )}
        </div>
      </div>

      {/* Modal for viewing full achievement details */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-2xl p-6 max-w-lg w-full relative transform scale-100 transition-transform duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 text-3xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={selectedEvent.imageUrl}
              alt={selectedEvent.eventName}
              className="w-full h-auto object-cover rounded-md mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {selectedEvent.eventName}
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              {new Date(selectedEvent.eventDate).toLocaleDateString()}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {selectedEvent.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default EventsSection;