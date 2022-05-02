
const Input = ({ id, type, label, setValue, placeholder }) =>{
    return(
        <>
        <label html={id}>{label}</label>
        <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={id}
        onChange={({ target })=> setValue(target.value)}
        />
        </>
    );
};

export default Input;