import Application from 'whatshouldiride/app';
import config from 'whatshouldiride/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
