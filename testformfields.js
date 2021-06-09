(function () {
  window.addEventListener('load', function () {
    var sourceControlId = 97270677,
      targetControlId = 97270574,
      sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId),
      targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);

    sourceControlInstance.on('value-change', function () {
      const values = sourceControlInstance.getValue();
      targetControlInstance.setValue(values.values.join());
    });

    targetControlInstance.setValue(sourceControlInstance.getValue().values.join());
  });
})();
