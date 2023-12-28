import "./styles.css";
export default function App() {
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
            <Loader />
        </div>
    );
} // Import the CSS file for styling

export const Loader = () => {
    return (
        <div className="loader">
            <div className="circle"></div>
        </div>
    );
};
