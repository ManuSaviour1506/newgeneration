import React from "react";

function EventCard({ eventName, eventDate, imageUrl }) {
  // Helper function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "short", day: "numeric" };
    return {
      day: date.toLocaleDateString("en-US", { day: "numeric" }),
      month: date.toLocaleDateString("en-US", { month: "short" }),
    };
  };

  const formattedDate = formatDate(eventDate);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <div className="relative w-full h-56">
        <img
          src={imageUrl}
          alt={eventName}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-teal-500 text-white p-2 rounded-lg text-center font-bold shadow-md">
          <div className="text-2xl">{formattedDate.day}</div>
          <div className="text-sm uppercase">{formattedDate.month}</div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{eventName}</h3>
        {/* The full description will now be in the modal */}
        <p className="text-gray-600 text-sm">Click to view details...</p>
      </div>
    </div>
  );
}

export default EventCard;