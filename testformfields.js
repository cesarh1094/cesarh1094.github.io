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

    // Political fields (as objects)
    const politicalDropDownField = loader.getEngine().getDocument().getElementById(politicalDropDownFieldID);
    const politicalOtherField = loader.getEngine().getDocument().getElementById(politicalOtherFieldID);
    const politicalHiddenField = loader.getEngine().getDocument().getElementById(politicalHiddenID);

    // The following is triggered when the "Other Political Affiliation" text field changes
    politicalOtherField.on('value-change', function () {
      const dropdownValue = politicalDropDownField.getValue();

      // Hidden field should not be filled if dropdown if NOT 'other'
      if ('Other' !== dropdownValue.value) {
        return;
      }

      const other = politicalOtherField.getValue().value;

      // Don't fill hidden field with "null" value
      if (!other) {
        politicalHiddenField.setValue({ value: '' });

        return;
      }

      // As user types in field, fill hidden field
      politicalHiddenField.setValue({
        value: 'Demographics > Political Party: ' + other,
      });
    });

    // The following is triggered when the "What is your political affiliation" dropdown field changes
    politicalDropDownField.on('value-change', function () {
      const dropdownValue = politicalDropDownField.getValue();

      if ('Other' === dropdownValue.value) {
        const other = politicalOtherField.getValue().value;

        if (!other) {
          politicalHiddenField.setValue({ value: '' });

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

    // Education Level field IDs
    const educationLevelDropDownFieldID = 97500085;
    const educationLevelOtherFieldID = 97500111;
    const educationLevelHiddenFieldID = 97500113;

    // Education Level fields (as objects)
    const educationLevelDropDownField = loader.getEngine().getDocument().getElementById(educationLevelDropDownFieldID);
    const educationLevelOtherField = loader.getEngine().getDocument().getElementById(educationLevelOtherFieldID);
    const educationLevelHiddenField = loader.getEngine().getDocument().getElementById(educationLevelHiddenFieldID);

    // The following is triggered when the "Other Education" text field changes
    educationLevelOtherField.on('value-change', function () {
      const dropdownValue = educationLevelDropDownField.getValue();

      // Hidden field should not be filled if dropdown if NOT 'other'
      if ('Other' !== dropdownValue.value) {
        return;
      }

      const other = educationLevelOtherField.getValue().value;

      // Don't fill hidden field with "null" value
      if (!other) {
        educationLevelHiddenField.setValue({ value: '' });

        return;
      }

      // As user types in field, fill hidden field
      educationLevelHiddenField.setValue({
        value: 'Demographics > Education: ' + other,
      });
    });

    // The following is triggered when the "Please choose your highest level of education" dropdown field changes
    educationLevelDropDownField.on('value-change', function () {
      const dropdownValue = educationLevelDropDownField.getValue();

      if ('Other' === dropdownValue.value) {
        const other = educationLevelOtherField.getValue().value;

        if (!other) {
          educationLevelHiddenField.setValue({ value: '' });

          return;
        }

        // As user types in field, fill hidden field
        educationLevelHiddenField.setValue({
          value: 'Demographics > Education: ' + other,
        });

        return;
      }

      // Reset hidden field when value of dropdown is NO LONGER 'Other'
      educationLevelHiddenField.setValue({ value: '' });
    });

    // Education Level field IDs
    const coachingDropDownFieldID = 97500189;
    const coachingOtherFieldID = 97500201;
    const coachingHiddenFieldID = 97500204;

    // Education Level fields (as objects)
    const coachingDropDownField = loader.getEngine().getDocument().getElementById(coachingDropDownFieldID);
    const coachingOtherField = loader.getEngine().getDocument().getElementById(coachingOtherFieldID);
    const coachingHiddenField = loader.getEngine().getDocument().getElementById(coachingHiddenFieldID);

    // The following is triggered when the "Other Education" text field changes
    coachingOtherField.on('value-change', function () {
      const dropdownValue = coachingDropDownField.getValue();

      // Hidden field should not be filled if dropdown if NOT 'other'
      if ('Other' !== dropdownValue.value) {
        return;
      }

      const other = coachingOtherField.getValue().value;

      // Don't fill hidden field with "null" value
      if (!other) {
        coachingHiddenField.setValue({ value: '' });

        return;
      }

      // As user types in field, fill hidden field
      coachingHiddenField.setValue({
        value: 'Coaching lead: ' + other,
      });
    });

    // The following is triggered when the "Please choose your highest level of education" dropdown field changes
    coachingDropDownField.on('value-change', function () {
      const dropdownValue = coachingDropDownField.getValue();

      if ('Other' === dropdownValue.value) {
        const other = coachingOtherField.getValue().value;

        if (!other) {
          coachingHiddenField.setValue({ value: '' });

          return;
        }

        // As user types in field, fill hidden field
        coachingHiddenField.setValue({
          value: 'Coaching lead: ' + other,
        });

        return;
      }

      // Reset hidden field when value of dropdown is NO LONGER 'Other'
      coachingHiddenField.setValue({ value: '' });
    });
  });
})();
