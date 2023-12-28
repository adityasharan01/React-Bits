import { useState } from "react";
import "./styles.css";

const employeeList = [
    { id: 1, name: "Aditya" },
    { id: 2, name: "Badal" },
    { id: 3, name: "Chinmay" },
    { id: 4, name: "Diksha" },
];

export default function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [message, setMessage] = useState("");

    const filterAndSearch = () => {
        const foundEmployee = employeeList.find(
            ({ name }) => name.toLowerCase() === searchTerm.toLowerCase()
        );
        setMessage(foundEmployee ? "Employee Found" : "Employee not found");
    };

    const handleSearch = () => {
        filterAndSearch();
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            filterAndSearch();
        }
    };

    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>Search</button>
            <p>{message}</p>
        </div>
    );
}
