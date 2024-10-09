import React, { useState } from 'react';
import './BirthdayList.css';

function BirthdayList() {
  const [people, setPeople] = useState([
    {
      id: 1,
      name: 'Vijay',
      age: 50,
      image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/cinema-vijay-sixteen_nine.jpg?VersionId=Vk2VthEDt55K6g61mFelRoO2PJr.zFwH&size=690:388',
    },
    {
      id: 2,
      name: 'Punith Rajkumar',
      age: 47,
      image: 'https://celebritykick.com/wp-content/uploads/2014/09/Puneeth-Rajkumar1-150x150.jpg',
    },
    {
      id: 3,
      name: 'Sharuk khan',
      age: 60,
      image: 'https://w0.peakpx.com/wallpaper/100/128/HD-wallpaper-don-2-bollywood-movie-srk-thumbnail.jpg',
    },
    {
      id: 4,
      name: 'Virat Kohli',
      age: 35,
      image: 'https://s.ndtvimg.com/images/entities/300/virat-kohli-967.png',
    },
    {
      id: 5,
      name: 'Surya',
      age: 45,
      image: 'https://m.media-amazon.com/images/I/41e63nLKIIL._SX300_SY300_QL70_FMwebp_.jpg',
    },
    {
      id: 6,
      name: 'Samantha Ruth prabhu',
      age: 36,
      image: 'https://img.indiaforums.com/person/640x480/1/3824-samantha-ruth-prabhu.jpg',
    },
  ]);

  const handleClearAll = () => {
    setPeople([]);
  };

  return (
    <div className="birthday-container">
      <h1>{people.length} Birthdays today</h1> { }
      {people.map((person) => (
        <div className="birthday-person" key={person.id}>
          <img src={person.image} alt={person.name} />
          <ruby>
            <span className="birthday-person-name">{person.name}</span>
            <rp>(</rp>
            <rt className="birthday-person-age">{person.age} years</rt>
            <rp>)</rp>
          </ruby>
        </div>
      ))}
      <button onClick={handleClearAll}>Clear All</button>
    </div>
  );
}

export default BirthdayList;
