import React from 'react';
import axios from 'axios';

export default class BibleVerses extends React.Component {
  state = {
    verses: []
  }

  componentDidMount() {
    axios.get('https://bible-api.com/john 3:16')
      .then(res => {
        const verses = res.data;
        console.log(verses);
        this.setState({ verses });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.verses
            .map(verses =>
              <li key={verses.reference}>{verses.text}</li>
            )
        }
      </ul>
    )
  }
}