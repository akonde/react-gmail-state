import { useState } from "react";
import Header from "./components/Header";
import initialEmails from "./data/emails";

import "./styles/App.css";

function App() {
  // Use initialEmails for state
  // console.log(initialEmails);
  const [emails, setEmails] = useState(initialEmails);

  function toggleRead(index){
    const updatedEmails = emails.map((email, i) => {
      if (i === index) {
        return { ...email, read: !email.read };
      }
      return email;
    });
    setEmails(updatedEmails);
  }

  function toggleStar(index){
    const updatedEmails = emails.map((email, i) => {
      if (i === index) {
        return { ...email, read: !email.starred};
      }
      return email;
    });
    setEmails(updatedEmails);
  }

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
          onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">{emails.length}</span>
          </li>
          <li
            className="item"
          // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">
              {initialEmails.filter((email) => email.starred).length}
            </span>
          </li>

          <li className="item toggle">
            <label for="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
            onChange={() => {toggleRead(index)}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        {emails.map((email, index) => {
          return (
            <li key={index} className="email">
              <div className="select">
                <input className="select-checkbox" type="checkbox" />
              </div>
              <div className="star">
                <input className="star-checkbox" type="checkbox" />
              </div>
              <div className="sender">{email.sender}</div>
              <div className="title">{email.title}</div>
            </li>
          )
        })}
      </main>
    </div>
  );
}

export default App;
