import useFormFields from "./useFormFields.jsx";

const CustomHookExample = () => {
    const {field, handleChange} = useFormFields({
        firstName: "",
        lastName: "",
        email: "",
    });

    return (
        <form>
            <span>نام</span>
            <input type="text" name="firstName" value={field.firstName} onChange={handleChange}/>
            <span>نام خانوادگی</span>
            <input type="text" name="lastName" value={field.lastName} onChange={handleChange}/>
            <span>ایمیل</span>
            <input type="email" name="email" value={field.email} onChange={handleChange}/>
        </form>
    );
};

export default CustomHookExample