
import React, {useState} from "react";
function DataBinding(){
    const [data, setData] = useState({
        name: "akshat",
        age:35
    })

    const handleChange=(event) => {
        let value = event.target.value;
        setData({
            ...data,name:value
        });
    }
    return(
        <div>
            <h2>Data Binding</h2>
            <h4>
                one way Binding: {data.name} - {data.age}

            </h4>
            <div>
                <input type ="text" value={data.name} />
                 oneChange = {handleChange} 
            </div>
        </div>
    )
}
export default DataBinding;