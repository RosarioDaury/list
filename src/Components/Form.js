import { useContext } from "react";
import { FormContext } from "../Context/FormContext";
import { FormStyles } from "./FormStyles";

export const Form = () => {
    const { form, handleChange, handleSubmit } = useContext(FormContext);
    return (
        <div>
            <FormStyles onSubmit={handleSubmit}>

                <div>
                    <span>Task Name</span>
                    <input type="text" id="task-name" name="task" onChange={handleChange} value={form.task} required />
                </div>

                <div>
                    <span>Task Description</span>
                    <input type="text" id="task-description" name="description" onChange={handleChange} value={form.description} required />
                </div>

                <div>
                    <span>Set a Date</span>
                    <input type="date" name="date" onChange={handleChange} value={form.date} required />
                </div>

                <input type="submit" value="Add Task" />

            </FormStyles>
        </div>
    )
}