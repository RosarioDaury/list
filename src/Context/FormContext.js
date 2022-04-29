import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { DB } from "../Service/Firebase";


export const FormContext = createContext();

const initialForm = {
    id: null,
    task: "",
    description: "",
    date: "",
    check: false
};


export const FormContextProvider = ({ children }) => {
    const [form, setForm] = useState(initialForm);
    const [update, setUpdate] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            await DB.collection("list")
                .get()
                .then(elements => {
                    const data = [];
                    elements.forEach(el => {
                        data.push(el.data());
                    })
                    setData(data);
                })
        }

        getData();

    }, [update]);


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.id === null) {
            try {
                DB.collection("list")
                    .add({
                        id: Date.now(),
                        task: form.task,
                        description: form.description,
                        date: form.date,
                        check: false
                    })
                    .then(() => {
                        setForm(initialForm);
                        Swal.fire({
                            title: "Success",
                            text: "Task added successfully",
                            icon: "success",
                        });
                        setUpdate(!update);
                    });
            } catch (error) {
                Swal.fire({
                    title: "Oppss!",
                    text: "Task can't be added",
                    icon: "error",
                });
                console.log(error);
            }
        } else {
            try {
                DB.collection("list")
                    .where("id", "==", form.id)
                    .get()
                    .then(elements => {
                        elements.forEach(el => {
                            el.ref.update({
                                id: form.id,
                                task: form.task,
                                description: form.description,
                                date: form.date,
                                check: form.check
                            })
                                .then(() => {
                                    setForm(initialForm);
                                    Swal.fire({
                                        title: "Success",
                                        text: "Task updated successfully",
                                        icon: "success",
                                    });
                                    setUpdate(!update);
                                });
                        })
                    })

            } catch (error) {
                Swal.fire({
                    title: "Oppss!",
                    text: "Task can't be added",
                    icon: "error",
                });
                console.log(error);
            }
        }
    }

    const handleRemove = (id) => {
        DB.collection("list")
            .where("id", "==", id)
            .get()
            .then(elements => {
                elements.forEach(el => {
                    el.ref.delete();
                })

                Swal.fire({
                    title: "Success",
                    text: "Task removed successfully",
                    icon: "success",
                })
                setUpdate(!update);
            })
    }

    const handleCheck = (id, checked) => {
        DB.collection("list")
            .where("id", "==", id)
            .get()
            .then(elements => {
                elements.forEach(el => {
                    el.ref.update({
                        check: checked ? false : true
                    })
                })

                setUpdate(!update);


                if (checked === false) {
                    Swal.fire({
                        title: "Success",
                        text: "Task completed successfully",
                        icon: "success",
                    })
                } else {
                    Swal.fire({
                        title: "Success",
                        text: "Task not completed",
                        icon: "success",
                    })
                }
            })
    }

    const datas = { form, handleChange, handleSubmit, update, data, handleRemove, setForm, handleCheck }

    return (<FormContext.Provider value={datas}>{children}</FormContext.Provider>)
};