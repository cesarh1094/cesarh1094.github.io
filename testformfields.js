(function () {
  window.addEventListener('load', function () {
    var sourceControlId = 'text-0000000c',
      targetControlId = 'text-00000012',
      sourceControlInstance = loader.getEngine().getDocument().getElementById(sourceControlId),
      targetControlInstance = loader.getEngine().getDocument().getElementById(targetControlId);
    sourceControlInstance.on('value-change', function () {
      targetControlInstance.setValue(sourceControlInstance.getValue());
    });
    targetControlInstance.setValue(sourceControlInstance.getValue());
  });
})();
