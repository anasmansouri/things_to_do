import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "../node_modules/@fortawesome/free-solid-svg-icons/index";
interface Props {
  ListOfItems: string[];
  update_listOfItems: (x: any) => void;
}
const ListItem = ({ ListOfItems, update_listOfItems }: Props) => {
  var init_checked_list: boolean[] = Array.from(
    { length: ListOfItems.length },
    () => false
  );
  const [checked_items_state, setchecked_items_state] =
    useState<boolean[]>(init_checked_list);

  const handleCheckboxClick = () => {
    // setIsChecked(!isChecked);
  };

  const handleRemoveClick = (index: number) => {
    const updatedItems = ListOfItems.filter((_, i) => i !== index);
    update_listOfItems(updatedItems);
  };

  return (
    <div className="container">
      <div className="checkList">
        <div className="list-container">
          <ul className="list-group d-flex flex-column">
            {ListOfItems.map((item, index) => (
              <li
                className="list-group-item d-flex flex-row justify-content-start"
                key={index}
              >
                <input
                  key={index}
                  type="checkbox"
                  value={item}
                  checked={checked_items_state[index]}
                  onChange={handleCheckboxClick}
                />
                <span className="flex-grow-1" style={{ marginLeft: "10px" }}>
                  {item}
                </span>
                <button
                  className="btn btn-sm"
                  onClick={() => handleRemoveClick(index)}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
