import React from 'react';
import ReactDOM from 'react-dom/client';
import utminfo from './UTMFields.js';

function clearUTMCode(e) {

    const out = "";

    document.getElementById("utmURL").innerHTML = out;

}

function HiddenField(prop) {

    return (

        <>
        <input type = "hidden" name = {prop.name} id = {prop.id} value = "" />
        </>

    );


}

function SubmitButton(prop) {

    return (

        <>
        <input type = "button" name = {prop.id} id = {prop.id} value = {prop.label} />
        </>

    );

}

function ResetButton(prop) {

    return (

        <>
        <input type = "reset" name = {prop.id} onClick = {e => { clearUTMCode (e)}} id = {prop.id} value = {prop.label} />
        </>
    );


}

function UTMGeneratorTable () {

    function processUserInput(e) {

        var id = document.getElementById(e.target.id);
        var out = document.getElementById("utmURL");
        var i = 0;
        var key = {}, inObj = {}, inURL = {};
        var output = [], outputURL = [];
        var val = "", paramURL = "", data = "", url = "";


        for(key in utminfo) {

            inObj = document.getElementById(utminfo[key].field);

            if(inObj.value && utminfo[key].field !== "utmurl") {

                // convert to lower case
                // remove non-alpha numeric except underscore character

                data = inObj.value.toLowerCase();
                data = data.replace(/\W/g, "_");

                // if the data matches alphanumeric
                // accept the data

                if(data.match(/[a-z0-9_]/)) {

                    inObj.value = data;

                } 

                // put valid data into the array
                
                outputURL[i] = utminfo[key].field + "=" + data;
                i++;

            }

        }

        paramURL = outputURL.join("&");

        val = output.join("&");

        try {

            url = document.getElementById("utmurl");
            inURL = new URL(url.value);

                out.innerHTML = url.value + "?" + paramURL;

            console.log("Valid URL");

        } catch(error) {


        }
    
    }


        const rows = utminfo.map(info => 

            <tr key = {info.id}>
                <td align = {info.align}><label>{info.label}</label></td>
                <td><input onChange={(e) => processUserInput(e)} type = "text" name = {info.field} id = {info.field} /></td>
            </tr>

        );

        return (<form><table>
            <tbody>
            {rows}
            </tbody>
        </table>
        <HiddenField id = "dataURL" name = "dataURL" value = "" />
        <SubmitButton id = "submit" label = "Copy UTM Code" /> <ResetButton id = "clearBtn" label = "Clear" />
        </form>);

}

export default UTMGeneratorTable;