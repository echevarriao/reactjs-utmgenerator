function UTMUrl(props) {

    function validateURL(e) {

        let url = null;
        let data = "";

        data = e.target.value;

        try {

          url = new URL(data);

          if(url){ 

            document.getElementById(props.output).innerHTML = "Valid";

            }

        } catch(error) {

            document.getElementById(props.output).innerHTML = "Not Valid";

        }

    }

    const urlField = {

        id : 0,
        label : 'Website URL',
        fieldType : 'url',
        fieldId : 'url',
        fieldName : 'url',
        fieldValue : ''

    };

    return (

        <div>
        <label>
            <span>
                {urlField.label}:
            </span>
                <input onInput = {(e) => {validateURL(e)}} type = {urlField.fieldType} id = {urlField.fieldId} name = {urlField.fieldName} />
        </label>
        </div>

    );

}

export default UTMUrl;