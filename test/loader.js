define([ 'intern!tdd',
    'intern/chai!expect',
    '../dist/PEP'
   ],
   function (tdd, expect, pep) {

    var suite = tdd.suite;
    var test = tdd.test;

suite('Loader', function() {
  test('PointerEvent', function() {
    expect(PointerEvent).to.be.ok;
  });
  suite('PointerEventsPolyfill modules', function() {
    test('PointerEventsPolyfill', function() {
        expect(pep).to.be.ok;
    });
    test('PointerMap', function() {
      expect(pep.PointerMap).to.be.ok;
    });
    test('Dispatcher', function() {
      expect(pep.dispatcher).to.be.ok;
    });
    test('Installer', function() {
      expect(pep.Installer).to.be.ok;
    });
    test('Target Finding', function() {
      expect(pep.targetFinding).to.be.ok;
    });
  });
});

});
