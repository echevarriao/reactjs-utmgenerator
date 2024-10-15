function UTMInputField (props){

    function generateURL(reqFields, optFields, u, out) {

        let i = 0;
        let finalUrl = [];
        let reqField = null;
        let optField = null;
        let urlString = null;
        let r = 0;
        let o = 0;
        let url = null;
        let f = null;

        for(i = 0; i < reqFields.length; i++){
            
            reqField = document.getElementById(reqFields[i]);

            if(reqField.value !== ""){

                finalUrl[r++] = reqFields[i] + "=" + reqField.value;

            } 

            if(r === 3){

                console.log("Required UTM Elements : 100%");

            }

        }

        o = r;

        for(i = 0; i < optFields.length; i++){
            
            optField = document.getElementById(optFields[i]);

            if(optField.value !== ""){

                finalUrl[o++] = optFields[i] + "=" + optField.value;

            } 

        }

        console.log(u);

        u = document.getElementById(u).value;

        url = new URL(u);
        urlString = finalUrl.join("&");

        if(url && r === 3) {

         f = document.getElementById(out);

         f.innerHTML = url + "?" + urlString;

        } else {

        f = document.getElementById(out);

        f.innerHTML = "Not Valid";

        }

    }

    function handleInput(e, reqFields, optFields, u, out) {

        let data = e.target.value;

        data = data.toLowerCase();

        if(props.id === 'utm_content') {

            data = data.replace(/_/g, "");
            data = data.replace(/[\W]/g, "+");

            document.getElementById(props.id).value = data;

        } else {

            if(data.match(/[^a-z0-9]/ig)) {

                data = data.replace(/\W/g, "_");

                document.getElementById(props.id).value = data;

            } 

        }

        generateURL(reqFields, optFields, u, out);

    }

    return (

        <input onInput = {(e) => handleInput(e, ['utm_source', 'utm_medium', 'utm_campaign'], ['utm_id', 'utm_term', 'utm_content'], 'url', 'utmOutput') } type = {props.type} id = {props.id} name = {props.name} />

    );

}

export default UTMInputField;