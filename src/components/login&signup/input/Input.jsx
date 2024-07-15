import './Input.css';

function Input({ placeholder }){
    return (
        <div id="input">
            <input placeholder={placeholder} />
        </div>
    );
}

export default Input;