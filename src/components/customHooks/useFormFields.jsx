// یه custom hook اینشکلیه که مثل توابع کمکی میمونه ولی توشون میشه از هوک های آماده استفاده کرد
// یه کامپوننت میسازی با rfc و بعدش لاجیک رو مینویسی و بجای return مواردی که میخوای جاهای دیگه اسفاده کنی رو میدی بیرون

import {useState} from "react";

const UseFormFields = (initialState) => {
    const [field, setField] = useState(initialState);

    const handleChange = (e) => {
        setField({
            ...field,
            [e.target.name]: e.target.value
        })
    }

    return {field, handleChange}
};

export default UseFormFields

// الان توی این custom hook برای هر ورودی میتونیم مقدار value رو از field بگیریم و onchange رو با handleChange مدیریت کنیم
// initialState هم مقدار اولیه ای هست که میتونیم برای همه ورودی ها در نظر بگیریم