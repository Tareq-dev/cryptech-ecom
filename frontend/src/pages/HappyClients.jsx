import React from 'react';


const clientImages = ['https://www.facebook.com/photo.php?fbid=956843926441468&set=pb.100063476081798.-2207520000&type=3', 'https://www.facebook.com/photo.php?fbid=956843926441468&set=pb.100063476081798.-2207520000&type=3', 'https://www.facebook.com/photo.php?fbid=956843926441468&set=pb.100063476081798.-2207520000&type=3', 'https://www.facebook.com/photo.php?fbid=956843926441468&set=pb.100063476081798.-2207520000&type=3', 'https://www.facebook.com/photo.php?fbid=956843926441468&set=pb.100063476081798.-2207520000&type=3', 'https://www.facebook.com/photo.php?fbid=956843926441468&set=pb.100063476081798.-2207520000&type=3', 'https://www.facebook.com/photo.php?fbid=956843926441468&set=pb.100063476081798.-2207520000&type=3', 'https://www.facebook.com/photo.php?fbid=956843926441468&set=pb.100063476081798.-2207520000&type=3'];
console.log(clientImages)
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
