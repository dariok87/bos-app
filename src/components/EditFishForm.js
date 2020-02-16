import React from "react";

class EditFishForm extends React.Component {
  render() {
    return (
      <div>
        <input type="text" name="name" />
        <input type="text" name="price" />
        <select type="text" name="status"></select>
        <option value="available">Fresh!</option>
        <option value="unavailable">Sold Out!</option>
        <textarea type="text" name="desc" />
        <input type="text" name="image" />
      </div>
    );
  }
}

export default EditFishForm;
