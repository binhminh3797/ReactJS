import React from "react";
import "./Table.css";
class Table extends React.Component {
  render() {
    const { charactersData, removeCharacter } = this.props; // tương đương với const charactersData = this.props.charactersData nhưng nếu trùng tên thì có thể dùng cách {charactersData}
    return (
      <table>
        <TableHeader />
        <TableBody
          characterData={charactersData}
          removeCharacter={removeCharacter}
        />
      </table>
    );
  }
}
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th></th>
      </tr>
    </thead>
  );
};
//key tựa như id của tr
const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};
export default Table;
