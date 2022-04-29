import { useContext } from "react";
import { FormContext } from "../Context/FormContext";
import { Div } from "./TasksStyles";

export const Single = (props) => {
    const { handleRemove, setForm, handleCheck } = useContext(FormContext);

    return (
        <Div>
            <div>
                <input type="checkbox" checked={props.item.check ? "checked" : ""} onChange={() => handleCheck(props.item.id, props.item.check)} />
            </div>

            <div>
                <h3>Name</h3>
                <p>{props.item.task}</p>
            </div>

            <div>
                <h3>Description</h3>
                <p>{props.item.description}</p>
            </div>

            <div>
                <h3>Date</h3>
                <p>{props.item.date}</p>
            </div>

            <div>
                <button onClick={() => handleRemove(props.item.id)}>Delete</button>
                <button onClick={() => setForm(props.item)}>Edit</button>
            </div>
        </Div>
    )
}