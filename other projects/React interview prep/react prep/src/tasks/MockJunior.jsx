// const CATS = [
//   {
//     name: "aaaaaa",
//     breed: "aaaaa",
//     url: "https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg",
//     description: "Lorem etc etc",
//     age: 7,
//   },
//   {
//     name: "mmmmmmmmm",
//     breed: "mmmmmmmmm",
//     url: "https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg",
//     description: "Lorem etc etc",
//     age: 7,
//   },
//   {
//     name: "nnnnnnnnn",
//     breed: "nnnnnnn",
//     url: "https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg",
//     description: "Lorem etc etc",
//     age: 7,
//   },
//   {
//     name: "bbbbb",
//     breed: "bbbbb",
//     url: "https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg",
//     description: "Lorem etc etc",
//     age: 7,
//   },
//   {
//     name: "xxxxxxx",
//     breed: "xxxxxxxx",
//     url: "https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg",
//     description: "Lorem etc etc",
//     age: 7,
//   },
//   {
//     name: "fffffffff",
//     breed: "ffffffff",
//     url: "https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg",
//     description: "Lorem etc etc",
//     age: 1,
//   },
//   {
//     name: "kkkkkkk",
//     breed: "kkkkkk",
//     url: "https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg",
//     description: "Lorem etc etc",
//     age: 4,
//   },
//   {
//     name: "uuuuuuu",
//     breed: "uuuuuu",
//     url: "https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg",
//     description: "Lorem etc etc",
//     age: 1,
//   },
// ];
import React from "react";
import "./styles.css";
import "./cardimg.css"; // Import the CSS file

const MockJunior = ({ cat: { name, breed, url, description, age } }) => {
  return (
    <div className="card">
      <img src={url} alt="cat pic" className="cardimg"></img>
      <p className="cardName"> {name}</p>
      <p className="cardBreedAge">
        {breed} . {age} {age > 1 ? "years" : "year"}
      </p>
      <p className="cardDesc">{description}</p>
    </div>
  );
};

export default MockJunior;
