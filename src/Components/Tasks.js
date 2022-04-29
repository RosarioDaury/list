import { useContext } from "react";
import { FormContext } from "../Context/FormContext";
import { Single } from "./Single";
import { BigDiv } from "./TasksStyles";

export const Tasks = () => {
    const { data } = useContext(FormContext);
    const today = data.filter(item => item.date === new Date().toISOString().slice(0, 10));
    const yesterday = data.filter(item => item.date === new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().slice(0, 10));

    console.log(yesterday);
    return (
        <BigDiv>
            <h2>Today</h2>
            {today.map(el => <Single item={el} key={el.id} />)}
            <br />
            <br />
            <hr />
            <h2>Yesterday</h2>
            {yesterday.map(el => <Single item={el} key={el.id} />)}
            <br />
            <br />
            <hr />
            <br />
            {data.map(el => <Single item={el} key={el.id} />)}
            <br />
            <br />
        </BigDiv>
    )
}