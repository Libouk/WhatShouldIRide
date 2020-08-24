import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | equipment', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders information about a surfboard', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Equipment />`);

    assert.dom('article').hasClass('equipment');
    assert.dom('article h3').hasText('Shortboard');
    assert.dom('article .detail.program').includesText('Vagues puissantes');
    assert.dom('article .detail.height').includesText('1,5');
    assert.dom('article .detail.length').includesText('6');
    assert.dom('article .detail.volume').includesText('28');
    assert.dom('article .image').exists();
  });
});
