import React from 'react';
import UTMDataFields from './UTMDataFields';
import UTMInputField from './UTMInputField';
import UTMUrl from './UTMUrl';
import UTMcss from './css/UTMcss.module.css';

function UTM() {

    return(
        <div id = "utmContainer">
            <div id = "formContainer">
                <form>
                    <UTMUrl output = "urlOutput"/>
                    <table>
                    <tbody>
            {UTMDataFields.map((utmField) => {

            return (
                <tr key = {utmField.id}>
                    <td>
                    <label>
                        <span className = {utmField.isRequired === 1 ? UTMcss.required : UTMcss.bold} >
                            {utmField.label}
                        </span>
                    </label>
                    </td>
                    <td>
                    <UTMInputField type = {utmField.fieldType} id = {utmField.utmField} name = {utmField.utmField} />
                    </td>
                </tr>
                );
            })}
                </tbody>
                </table>            
                </form>
        </div>
        <div>
            <p><span className = {UTMcss.bold}>UTM URL</span></p>
            <p><span id = "utmOutput"></span></p>
            <p><span id = "urlOutput"></span></p>
        </div>
        </div>

    );

}

export default UTM;