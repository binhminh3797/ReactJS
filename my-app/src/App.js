import React from "react";
import "./App.css";
import Form from "./form/Form";
import Table from "./table/Table";

class App extends React.Component {
  removeCharacter = (index) => {
    const { characters } = this.state;
    this.setState({
      //Filter : Trả về phần tử của mảng characters nếu (i !== index) = true
      characters: characters.filter((character, i) => {
        return i !== index;
      }),
    });
  };
  //hàm setState ở đây : set giá trị cho state = state.characters sẵn có + character thêm vào 
  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
    console.log(this.state)
  };

  state = {
    characters: [
      {
        name: "Charlie",
        job: "Janitor",
      },
      {
        name: "Mac",
        job: "Bouncer",
      },
      {
        name: "Dee",
        job: "Aspring actress",
      },
      {
        name: "Dennis",
        job: "Bartender",
      },
    ],
  };
  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table
          charactersData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
export default App;
