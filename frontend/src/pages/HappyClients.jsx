import React from 'react';

// Dummy client photos
const client1 = 'https://www.facebook.com/photo.php?fbid=956843926441468&set=pb.100063476081798.-2207520000&type=3';
const client2 ='https://www.facebook.com/photo.php?fbid=956843926441468&set=pb.100063476081798.-2207520000&type=3';
const client3 ='https://www.facebook.com/photo.php?fbid=956843926441468&set=pb.100063476081798.-2207520000&type=3';
const client4 ='https://www.facebook.com/photo.php?fbid=956843926441468&set=pb.100063476081798.-2207520000&type=3';
const client5 ='https://www.facebook.com/photo.php?fbid=956843926441468&set=pb.100063476081798.-2207520000&type=3';
const client6 ='https://www.facebook.com/photo.php?fbid=956843926441468&set=pb.100063476081798.-2207520000&type=3';

const clientImages = [client1, client2, client3, client4, client5, client6];

function HappyClients() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
        😊 Happy Clients Gallery
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {clientImages.map((img, index) => (
          <div key={index} className="rounded overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
            <img
              src={img}
              alt={`Client ${index + 1}`}
              className="w-full h-40 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HappyClients;
