(function () {
  window.addEventListener('load', function () {
    // Ethnicity fields

    // IDs of Ethnicity fields
    const ethnicityCheckBoxesFieldID = 97270574;
    const ethnicityHiddenFieldID = 97270677;

    // Fields
    const ethnicityCheckBoxField = loader.getEngine().getDocument().getElementById(ethnicityCheckBoxesFieldID);
    const ethnicityHiddenField = loader.getEngine().getDocument().getElementById(ethnicityHiddenFieldID);

    // This is ran every time a checkbox changes from "checked" to "not checked"
    ethnicityCheckBoxField.on('value-change', function () {
      // Get current "state" of checkboxes
      const checkBoxes = ethnicityCheckBoxField.getValue();

      // Set comma-separated value to Ethnicity hidden field
      // -> "checkbox value 1,checkbox value 2, ..."
      ethnicityHiddenField.setValue({ value: checkBoxes.values.join() });
    });

    // Set comma-separated value to Ethnicity hidden field
    // -> "checkbox value 1,checkbox value 2, ..."
    ethnicityHiddenField.setValue({ value: ethnicityCheckBoxField.getValue().values.join() });

    // IDs of Gender fields
    const genderCheckBoxesFieldID = 97387782;
    const genderHiddenFieldID = 97387801;

    // Fields
    const genderCheckBoxesField = loader.getEngine().getDocument().getElementById(genderCheckBoxesFieldID);
    const genderHiddenField = loader.getEngine().getDocument().getElementById(genderHiddenFieldID);

    // This is ran every time a checkbox changes from "checked" to "not checked"
    genderCheckBoxesField.on('value-change', function () {
      // Get current "state" of checkboxes
      const checkBoxes = genderCheckBoxesField.getValue();

      console.log(checkBoxes);

      const genderValues = checkBoxes.values.join().replace('Female', 'F').replace('Male', 'M');

      // Set comma-separated value to Ethnicity hidden field
      // -> "checkbox value 1,checkbox value 2, ..."
      genderHiddenField.setValue({ value: genderValues });
    });

    // Set comma-separated value to Ethnicity hidden field
    // -> "checkbox value 1,checkbox value 2, ..."
    genderHiddenField.setValue({ value: genderCheckBoxesField.getValue().values.join() });

    // IDs of Issues fields
    const issueCheckBoxFieldID = 97387815;
    const issuesHiddenFieldID = 97387818;

    // Fields
    const issuesCheckBoxField = loader.getEngine().getDocument().getElementById(issueCheckBoxFieldID);
    const issuesHiddenField = loader.getEngine().getDocument().getElementById(issuesHiddenFieldID);

    // This is ran every time a checkbox changes from "checked" to "not checked"
    issuesCheckBoxField.on('value-change', function () {
      // Get current "state" of checkboxes
      const checkBoxes = issuesCheckBoxField.getValue();

      // Set comma-separated value to Ethnicity hidden field
      // -> "checkbox value 1,checkbox value 2, ..."
      issuesHiddenField.setValue({ value: checkBoxes.values.join() });
    });

    // Set comma-separated value to Ethnicity hidden field
    // -> "checkbox value 1,checkbox value 2, ..."
    issuesHiddenField.setValue({ value: issuesCheckBoxField.getValue().values.join() });
  });
})();
