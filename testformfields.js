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

      console.log(genderCheckBoxesField, checkBoxes);

      const genderValues = checkBoxes.values.join().replace('Female', 'F').replace('Male', 'M');

      // Set comma-separated value to Ethnicity hidden field
      // -> "checkbox value 1,checkbox value 2, ..."
      genderHiddenField.setValue({ value: genderValues });
    });

    // Set comma-separated value to Ethnicity hidden field
    // -> "checkbox value 1,checkbox value 2, ..."
    genderHiddenField.setValue({ value: genderCheckBoxesField.getValue().values.join() });

    // Political field IDs
    const politicalDropDownFieldID = 97497873;
    const politicalOtherFieldID = 97500115;
    const politicalHiddenID = 97387818;

    const politicalDropDownField = loader.getEngine().getDocument().getElementById(politicalDropDownFieldID);
    const politicalOtherField = loader.getEngine().getDocument().getElementById(politicalOtherFieldID);
    const politicalHiddenField = loader.getEngine().getDocument().getElementById(politicalHiddenID);

    // Other Political Affialiation field
    politicalOtherField.on('value-change', function () {
      const dropdownValue = politicalDropDownField.getValue();

      // Hidden field should not be filled if dropdown if NOT 'other'
      if ('Other' !== dropdownValue.value) {
        return;
      }

      const other = politicalOtherField.getValue().value;

      // Don't fill hidden field with "null" value
      if (!other) {
        return;
      }

      // As user types in field, fill hidden field
      politicalHiddenField.setValue({
        value: 'Demographics > Political Party: ' + other,
      });
    });

    //
    politicalDropDownField.on('value-change', function () {
      const dropdownValue = politicalDropDownField.getValue();

      if ('Other' === dropdownValue.value) {
        const other = politicalOtherField.getValue().value;

        if (!other) {
          return;
        }

        // As user types in field, fill hidden field
        politicalHiddenField.setValue({
          value: 'Demographics > Political Party: ' + other,
        });

        return;
      }

      // Reset hidden field when value of dropdown is NO LONGER 'Other'
      politicalHiddenField.setValue({ value: '' });
    });

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
