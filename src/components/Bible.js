import React from 'react';
import axios from 'axios';

export default class BibleVerses extends React.Component {
  state = {
    verses: []
  }

  async componentDidMount() {
   await axios.get('https://bible-api.com/john 3:16')
  //  console.log(response)
      .then(res => {
        const verses = res.data;
        // console.log(verses);
        this.setState({ verses });
      })
  }

  render() {
    return (

      

      <div>
        {/* <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.id}>{person.name}</li>
            )
        }
      </ul> */}

        {
          `${this.state.verses.text}`
        } 
      </div>)
  }
}